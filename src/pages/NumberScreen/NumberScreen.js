import React, { useState } from "react";
import "../../styles/global.css";
import "../../styles/number.css";
import Header from "../../components/Header/Header";
import { useHistory } from "react-router-dom";
import { updateToast } from "../../actions/toastActions";
import { CodeAnalogy } from "../../components/Toasty/Toasty";

const NumberScreen = () => {
  const [number, setNumber] = useState(true);
  const [otp,setOtp]=useState("")
  const history = useHistory();
  const handleOtp = () => {
    setNumber(false);
    updateToast({
        code:CodeAnalogy.SUCCESS,
        title:"Otp Send Successfully",
        message:"Enter Otp Send to You Phone"
    })
  };
  const handleOtpInput=(e)=>{
    setOtp(e.target.value)
  }
  const handleProceed = () => {
    if(otp==="123456"){
        history.push("/personal");
    }
    else{
        updateToast({
            code:CodeAnalogy.ERROR,
            title:"Incorrect Otp",
            message:"Please check the Otp Send"
        })
    }
  };
  return (
    <div className="main">
      <Header />
      <div className="container">
        <div className="card">
          <div className="titleSection">
            <div className="title">
              <p className="titleWelcome">Welcome To</p>
            </div>
            <div className="title">
              <p className="titleCompany">SnapLoans</p>
            </div>
          </div>
          {number && (
            <div className="numberSection">
              <div className="inputSection">
                <div className="inputLabel">
                  <label>Enter Your Phone Number</label>
                </div>
                <div className="inputText">
                  <input type="number" />
                </div>
              </div>
            </div>
          )}
          {!number && (
            <div className="numberSection">
              <div className="inputSection">
                <div className="inputLabel">
                  <label>Enter Otp Send To Your Number</label>
                </div>
                <div className="inputText">
                  <input type="number" onChange={handleOtpInput}/>
                </div>
              </div>
            </div>
          )}
          <div className="proceedSection">
            {number && <button onClick={handleOtp}>Request Otp</button>}
            {!number && <button onClick={handleProceed}>Proceed</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumberScreen;
