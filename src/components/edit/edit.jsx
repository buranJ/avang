import "./edit.css";

const buildings = [
  { id: 1,  top: "52%", left: "54%" },
  { id: 2,  top: "56%", left: "44%" },
  { id: 3,  top: "65%", left: "33%" },
  { id: 4,  top: "47%", left: "26%" },
  { id: 5,  top: "37%", left: "17%" },
  { id: 6,  top: "30%", left: "25%" },
  { id: 7,  top: "24%", left: "33%" },
  { id: 8,  top: "37%", left: "40%" },
  { id: 9,  top: "18%", left: "49%" },
  { id: 10, top: "23%", left: "56%" },
  { id: 11, top: "29%", left: "67%" },
  { id: 12, top: "36%", left: "79%" },
  { id: 13, top: "43%", left: "69%" },
];

export default function Edit() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/genplan.pdf";
    link.download = "genplan.pdf";
    link.click();
  };

  return (
    <section className="genplan-section">
      <div className="genplan-card">
        <h2 className="genplan-title">Нумерация и Расположение</h2>

        <div className="genplan-map">
          <img
            src="https://avangardstyle.kg/media/images/buildings/%D0%B3%D0%B5%D0%BD%D0%BF%D0%BB%D0%B0%D0%BD_ExAx9Gn.png"
            alt="Генплан"
            className="genplan-img"
          />

          <span className="genplan-choose">ВЫБЕРИ СВОЁ</span>

          {buildings.map((b) => (
            <span
              key={b.id}
              className="genplan-pin"
              style={{ top: b.top, left: b.left }}
            >
              {b.id}
            </span>
          ))}

          <button className="genplan-download-btn" onClick={handleDownload}>
            Скачать генплан
          </button>
        </div>
      </div>
    </section>
  );
}
