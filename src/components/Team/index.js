import React from "react";
import "./Team.css";

function Team() {
  return (
    <div className="w3-row-padding">
      <h2>Team at Hogwarts</h2>
      <br></br>
      <div className="row">
        <div className="column">
          <div className="card">
            <img src="images/dumbledore.jpeg" alt="Jane" className="responsive" />
            <div className="container">
              <h2>Professor Dumbledore</h2>
              <p className="title">Headmaster</p>
              <p>Some text that describes me.</p>
              <p>example@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="images/minerve.jpeg" alt="Mike" className="responsive" />
            <div className="container">
              <h2>Minerva McGonagall</h2>
              <p className="title">Headmistress</p>
              <p>Some text that describes me.</p>
              <p>example@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="images/Horace.jpeg" alt="John" className="responsive" />
            <div className="container">
              <h2>Horace Slughorn</h2>
              <p className="title">Professor - Potions Master</p>
              <p>Some text that describes me.</p>
              <p>example@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="images/snape.jpeg" alt="Mike" className="responsive" />
            <div className="container">
              <h2>Severus Snape</h2>
              <p className="title">Professor - Potions Master</p>
              <p>Some text that describes me.</p>
              <p>example@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src="images/Hgrid.jpeg" alt="Mike" className="responsive" />
            <div className="container">
              <h2>Rubeus Hagrid</h2>
              <p className="title">Standby Professor - Potions Master</p>
              <p>Some text that describes me.</p>
              <p>example@example.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
