import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";

const carsTab = [
  {
    type: "coupe",
    imgSrc:
      "https://www.ferrarista.club/forum-ferrari/uploads/monthly_2022_04/5C9B411F-D10C-4704-A701-E1FDCCBE0FCB.jpeg.73d2fc8d827a31bbd46753c7322e8653.jpeg",
    color: "blue",
  },
  {
    type: "coupe",
    imgSrc:
      "https://auto.cdn-rivamedia.com/photos/annonce/big/maserati-4200-gt-coupe-v8-42-390-ch-bva-142035809.jpg",
    color: "grey",
  },
  {
    type: "gransport",
    imgSrc:
      "https://res.cloudinary.com/dsxfn6o4q/image/upload/c_fill,g_center,h_467,w_624/v1612447763/nk3xnmvidhtt1hlccj5r.jpg",
    color: "grey",
  },
  {
    type: "coupe",
    imgSrc:
      "https://static.wixstatic.com/media/ad2ca4_4e03b3025b2b47598651f7143c67d241~mv2.jpg/v1/fill/w_1194,h_796,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ad2ca4_4e03b3025b2b47598651f7143c67d241~mv2.jpg",
    color: "red",
  },
];

function App() {
  return (
    <div>
      <h1>Maserati 4200GT</h1>
      <Card carsTab={carsTab} />
    </div>
  );
}

export default App;
