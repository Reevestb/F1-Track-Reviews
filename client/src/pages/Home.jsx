//This will be the first page the user will see - the root
// it can be the same as app

//? routing help
// i wrapped my app in main.jsx with browser router
// i will build my routes in the root component (app or home)

// routes should wrap your route
// Route has 2 attributes --. path, for your params; and element, for the component you want to render in that path
// for user naviagtion, seperately, you will have link components
// the link component has an attribute called to="" to specifiy the params we are navigating to
import "./Home.css";
import f1calender from "/Images/f1_calender.jpg";

export default function TrackArt() {
  return (
    <div className="imgBox">
      <img
        id="img"
        src={f1calender}
        // src="https://www.wallart.com/media/catalog/product/cache/5b18b93ddbe5d6592c6b175f41d24454/w/1/w12028-small_1_1.jpg"
        alt="F1 Calender"
      />
    </div>
  );
}
