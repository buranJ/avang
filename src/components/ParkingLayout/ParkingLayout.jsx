
import React from "react";
import "./ParkingLayout.css";

const parkingPlan =  "https://avangardstyle.kg/media/images/buildings/photo.webp";

const features = [
  "Просторные машиноместа",
  "Круглосуточная охрана",
  "Видеонаблюдение 24/7",
  "Система автоматического пожаротушения",
  "Рассрочка на приобретение",
];

const ParkingLayout = () => {
  return (
    <section className="parking">
      <div className="parking__container">
        <h2 className="parking__title">Планировка подземного паркинга</h2>

        <div className="parking__content">
          <div className="parking__image-wrapper">
            <img
              src={parkingPlan}
              alt="Планировка паркинга"
              className="parking__image"
            />
          </div>

          <div className="parking__features">
            {features.map((feature, index) => (
              <div className="parking__feature" key={index}>
                <span className="parking__feature-text">{feature}</span>
                <div className="parking__icon">
                  ↗
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ParkingLayout;