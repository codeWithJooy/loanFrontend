import React, { useState } from "react";
import "../../styles/global.css";
import "../../styles/number.css";
import Header from "../../components/Header/Header";
import { useHistory } from 'react-router-dom'

const PersonalScreen = () => {
  const [email, setEmail] = useState("");
  const [showReEnterEmail, setShowReEnterEmail] = useState(false);
  const history = useHistory();

  const handleProceed = () => {
    history.push("/offer");
  };

  const handleEmailFocus = () => {
    setShowReEnterEmail(true);
  };

  return (
    <div className="main">
      <Header title="Add Personal Details" />
      <div className="container">
        <div className="card">
          <div className="numberSection">
            <div className="inputSection">
              <div className="inputLabel">
                <label>First Name</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Last Name</label>
              </div>
              <div className="inputText">
                <input type="text" />
              </div>
            </div>
            <div className="inputSection">
              <div className="inputLabel">
                <label>Add Email</label>
              </div>
              <div className="inputText">
                <input type="text" onChange={(e) => setEmail(e.target.value)} onFocus={handleEmailFocus} />
              </div>
            </div>
            {showReEnterEmail &&
              <div className="inputSection">
                <div className="inputLabel">
                  <label>ReEnter Email</label>
                </div>
                <div className="inputText">
                  <input type="text" />
                </div>
              </div>
            }
            <div className="inputSection">
              <div className="inputLabel">
                <label>Date Of Birth </label>
              </div>
              <div className="inputText">
                <input type="date" />
              </div>
            </div>
            <div className="proceedSection">
              <button onClick={handleProceed}>Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalScreen;

