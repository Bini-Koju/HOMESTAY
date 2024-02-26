import Customer from "./Customer";
import Food from "./Food";
import "../styles/Customer.css";
import rajan from "../images/rajan.jpg";
import jakesh from "../images/jakesh.jpg";
import alien from "../images/alien.jpg";
export default function Review() {
  return (
    <>
      <Food />
      <div id="main">
        <p className="cust">Customer Says</p>
        <h1 className="cust2">REVIEWS</h1>
        <div id="detailInfo">
          <Customer
            imageUrl={rajan}
            name="Rajan Khyamali"
            message="My room was a cozy haven, filled with traditional touches and mountain views. This homestay feels like a home away from home, nestled in the heart of Nepal."
            star="⭐⭐⭐⭐⭐5.0"
          />

          <Customer
            imageUrl={jakesh}
            name="Jakesh Bohaju"
            message="Every day was an adventure! From cooking momos with the family to exploring hidden waterfalls, this homestay truly immersed me in Nepal."
            star="⭐⭐⭐⭐⭐5.0"
          />

          <Customer
            imageUrl={alien}
            name="alien"
            message="The sunrise over the Himalayas from my room was breathtaking. This homestay isn't just a place to stay, it's a gateway to experiencing the magic of Nepal"
            star="⭐⭐⭐⭐⭐5.0"
          />
        </div>
      </div>
    </>
  );
}
