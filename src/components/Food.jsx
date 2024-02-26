import "../styles/Food.css";
import Glimpse from "./Glimpse";
import Image1 from "../images/image1.jpg";
import Image2 from "../images/image2.jpg";
import Image3 from "../images/image3.jpg";
import Image4 from "../images/image4.jpg";

export default function Food() {
  return (
    <>
    <div id="container">
      <p className="title">Glimpse of what makes our homestay special</p>
      <div id="foodMenu">
        <Glimpse
          imageUrl={Image1}
          message="Immerse yourself in Nepali culture"
        />

        <Glimpse imageUrl={Image2} message="Taste the flavors of Nepal" />

        <Glimpse imageUrl={Image3} message="Find your adventure" />

        <Glimpse
          imageUrl={Image4}
          message="Experience the warmth of Nepali hospitality"
        />
      </div>
      </div>
    </>
  );
}
