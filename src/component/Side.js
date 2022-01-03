import "./Side.css";
const Side = (props) => {
  return (
    <div className="side">
      <h5>{props.title}</h5>

      <div className="picture2"></div>
      <div className="para">{props.description}</div>
    </div>
  );
};

export default Side;
