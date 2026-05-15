import ReactCompareImage from "react-compare-image";
import "./beforeafter.css";
const BeforeAfter = () => {
  return (
    <section className="before-after">
      <h2 className="before-after__title">Атмосфера вечернего парка</h2>

      <div className="before-after__slider">
        <ReactCompareImage
          leftImage="https://avangardstyle.kg/media/images/buildings/4.jpg"
          rightImage="https://avangardstyle.kg/media/images/buildings/19.jpg"
          sliderLineWidth={3}
          handleSize={34}
        />
      </div>
    </section>
  );
};

export default BeforeAfter;
