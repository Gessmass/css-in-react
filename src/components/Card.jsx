import "./Card.scss";

const Card = ({ carsTab }) => {
  return (
    <div className="divGlobal">
      {carsTab.map((carsTab, index) => (
        <div className="divCard" key={index}>
          <div className="divImage">
            <img src={carsTab.imgSrc} alt={carsTab.type}></img>
          </div>
          <div className="divText">
            <h3>{carsTab.type}</h3>
            <p>{carsTab.color}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
