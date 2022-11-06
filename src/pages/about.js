import { useState } from "react";
import { ReactDOM } from "react";
import img2 from './deni2.jpg';
import './style.css';


const About = () => {
  const [me, setMe] = useState({
    name: "Alfiano Deni Kusuma",
    nim: "320200401003",
    University: "Republic of Indonesia Defense University"
  });
  return (
    <>
      <div className="me">
        <h1>Hay, My name is {me.name}</h1>
        <h6>
          I am from {me.University} , my nim is {me.nim}.
        </h6>
        <div className="myweb">
          <img src={img2} className="foto"></img>
          <div className="text">
            <p>
              Netlab bookstore is my first web application,
            </p>
            <p>which I built using react js with another library.</p>
            <p>
              There are still many shortcomings and errors,
            </p>
            <p>please give me corrections and suggestions.</p>
          </div>
        </div>
      </div>
    </>
  )
};

export default About