import React from "react";
import "./Header.css";
import { useHistory } from "react-router-dom";

const Header = ({ img, title = "SnapLoans" }) => {
  const history=useHistory()

  const handleProceed=()=>{
     history.push("/offer")
  }
  return (
    <div className="header">
      <div className="headerContainer">
        {img && (
          <>
            <div className="headerIcon">
              <img src={img} onClick={handleProceed}/>
            </div>
            <div className="headerTitle">
              <p>{title}</p>
            </div>
          </>
        )}
        {!img && (
          <div className="headerTitleAlone">
            <p>{title}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
