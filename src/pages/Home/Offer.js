import React from 'react'
import "../../styles/home.css";
import "../../styles/number.css";
import {useHistory} from 'react-router-dom' 

const Offer=()=>{
    const history=useHistory()

    const handleProceed=()=>{
       history.push("/identify")
    }
    return(
        <div className='offerMain'>
          <div className='offerHeader'>
              <div className='offerContainer'>
                <div className='offerTitle'>
                  <p>Your Loan Offers</p>
                </div>
                <div className='offerSubtitle'>
                    <p>Choose Your Preffered Amount & choose your repayment Period</p>
                </div>
              </div>
          </div>
          <div className='offerSectionContainer'>
            <div className='offerUnitActive'>
                <p>Rs 5000</p>
            </div>
            <div className='offerUnit'>
                <p>Rs 5000</p>
            </div>
            <div className='offerUnit'>
                <p>Rs 5000</p>
            </div>
            <div className='offerUnit'>
                <p>Rs 5000</p>
            </div>
            <div className='offerUnit'>
                <p>Rs 5000</p>
            </div>
            <div className='offerUnit'>
                <p>Rs 5000</p>
            </div>
            <div className='offerUnit'>
                <p>Rs 5000</p>
            </div>
          </div>
          <div className='offerDetails'>
            <div className='offerCard'>
                <div className='offerCardTitle'>
                    <p>Payback 2000 in 4 Months</p>
                </div>
                <div className='offerCardMisc'>
                    <div className='offerCardMiscTitle'>
                        <p>Monthly Interest 2%</p>
                    </div>
                    <div className='offerCardMiscValue'>
                        <p>Rs 200</p>
                    </div>
                </div>
                <div className='offerCardMisc'>
                    <div className='offerCardMiscTitle'>
                        <p>Monthly Payment</p>
                    </div>
                    <div className='offerCardMiscValue'>
                        <p>Rs 200</p>
                    </div>
                </div>
                <div className='offerAccept'>
                    <button onClick={handleProceed}>Apply Loan</button>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Offer;