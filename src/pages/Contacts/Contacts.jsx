import { getContactInfo } from "../../api/contactsApi";
import { useAsyncData } from "../../hooks/useAsyncData";
import "./Contacts.css";

function InfoList({ title, items }) {
  if (!items.length) return null;

  return (
    <section className="contacts-page__section">
      <h2 className="contacts-page__section-title">{title}</h2>
      <div className="contacts-page__list">
        {items.map((item) => (
          <article className="contacts-page__item" key={`${title}-${item.title || item.name}`}>
            <h3>{item.name || item.title}</h3>
            {item.description && (
              <div dangerouslySetInnerHTML={{ __html: item.description }} />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default function Contacts() {
  const { data, error, loading } = useAsyncData(
    (signal) => getContactInfo({ signal }),
    []
  );

  return (
    <main className="contacts-page">
      <div className="contacts-page__shell">
        <h1 className="contacts-page__title">Контакты</h1>

        {loading && <p className="contacts-page__state">Загрузка контактов...</p>}
        {!loading && error && <p className="contacts-page__state">Не удалось загрузить контакты.</p>}
        {!loading && !error && data && (
          <>
            <InfoList title="Офисы продаж" items={data.salesOffices} />
            <InfoList title="Реквизиты в сомах" items={data.somRequisites} />
            <InfoList title="Реквизиты в долларах" items={data.dollarRequisites} />
          </>
        )}
      </div>
    </main>
  );
}
