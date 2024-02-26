import "../styles/Customer.css";
export default function Customer(props) {
  return (
    <>
      <div id="detailsReview">
        <div id="info">
          <img id="imageCustomer" src={props.imageUrl} alt="" />
          <div>
            <p className="propsReview">{props.name}</p>
            <p className="propsReview prop">{props.star}</p>
          </div>
        </div>
        <p id="msgCustomer">{props.message}</p>
      </div>
    </>
  );
}
