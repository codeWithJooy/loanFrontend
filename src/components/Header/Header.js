import React from "react";
import "./Header.css";

const Header = ({ img, title = "SnapLoans" }) => {
  return (
    <div className="header">
      <div className="headerContainer">
        {img && (
          <>
            <div className="headerIcon">
              <img src={img} />
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
