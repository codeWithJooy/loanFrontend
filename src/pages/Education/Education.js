import React from "react";
import "../../styles/global.css";
import "../../styles/number.css";
import Header from "../../components/Header/Header";

const Education = () => {
  return (
    <div className="main">
      <Header title="Education Details" img="Assets/back.png" />
      <div className="container">
        <div className="card">
          <div className="numberSection">
            <div className="inputSection">
              <div className="inputLabel">
                <label>Last Degree</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Instituion Name</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Completed Year</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>

            <div className="proceedSection">
              <button>Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;