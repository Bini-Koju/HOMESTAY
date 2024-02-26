import "../styles/Food.css";
export default function Glimpse(props) {
  return (
    <>
      <div className="items">
        <img id="imageFood" src={props.imageUrl} alt="" />
        <p id="messageFood">{props.message}</p>
      </div>
    </>
  );
}
