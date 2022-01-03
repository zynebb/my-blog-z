import "./Rectangle.css";
const Rectangle = (props) => {
  return (
    <div className="item">
      <h3>{props.title}</h3>
      <h4>{props.subtitle}</h4>
      <div className="picture"></div>
      <p>{props.description}</p>
    </div>
  );
};

export default Rectangle;
