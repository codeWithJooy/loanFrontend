import React from "react";
import "../../styles/global.css";
import "../../styles/number.css";
import Header from "../../components/Header/Header";

const CompanyScreen = () => {
  return (
    <div className="main">
      <Header title="Company Details" img="Assets/back.png" />
      <div className="container">
        <div className="card">
          <div className="numberSection">
            <div className="inputSection">
              <div className="inputLabel">
                <label>Company Name</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Company Url</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Company Email</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Designation</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>

            <div className="inputSection">
              <div className="inputLabel">
                <label>Date of Joining</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Take Away Salary</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="radioSection">
              <div className="inputTitle">
                <label>Salary Credit Type</label>
              </div>
              <div className="inputRadio">
                <input
                  type="radio"
                  id="bank"
                  name="salaryCreditType"
                  value="bank"
                />
                <label for="bank">Bank</label>
                <input
                  type="radio"
                  id="other"
                  name="salaryCreditType"
                  value="other"
                />
                <label for="other">Other</label>
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

export default CompanyScreen;
