import "../styles/Namaste.css";
import homeImg from "../images/home.jpg";
export default function Namaste() {
  return (
    <>
      <div id="greet">
        <div id="namaste">
          <div id="details">
            <h1 className="h1Namaste">NAMASTE!</h1>
            <h2 className="h2Namaste">Welcome to our Nepali Homestay!</h2>
            <p className="pNamaste">
              Imagine waking up to the Himalayas kissing the sunrise, breathing
              in crisp mountain air, and savoring a steaming cup of masala chai
              prepared with love. This is the experience that awaits you at our
              authentic Nepali homestay.
            </p>
          </div>
          <div id="imageNamaste">
            <img src={homeImg} alt="home" />
          </div>
        </div>
      </div>
    </>
  );
}
