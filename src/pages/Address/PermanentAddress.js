import React from "react";
import "../../styles/global.css";
import "../../styles/number.css";
import Header from "../../components/Header/Header";

const PermanentAddress = () => {
  return (
    <div className="main">
      <Header title="Permanent Address" img="Assets/back.png" />
      <div className="container">
        <div className="card">
          <div className="numberSection">
            <div className="inputSection">
              <div className="inputLabel">
                <label>House Number</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Street</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>City</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Pincode</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>

            <div className="inputSection">
              <div className="inputLabel">
                <label>State</label>
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

export default PermanentAddress;