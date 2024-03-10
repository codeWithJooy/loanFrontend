import React, { useState } from 'react';
import "../../styles/home.css";
import "../../styles/number.css";
import { useHistory } from 'react-router-dom' 

const Offer = () => {
    const [selectedLoan, setSelectedLoan] = useState(null);
    const history = useHistory();

    const handleProceed = () => {
        history.push("/identify");
    };

    const handleLoanSelect = (loanAmount) => {
        setSelectedLoan(loanAmount);
    };

    return (
        <div className='offerMain'>
            <div className='offerHeader'>
                <div className='offerContainer'>
                    <div className='offerTitle'>
                        <p>Your Loan Offers</p>
                    </div>
                    <div className='offerSubtitle'>
                        <p>Choose Your Preferred Amount & choose your repayment Period</p>
                    </div>
                </div>
            </div>
            <div className='offerSectionContainer'>
                <div className={`offerUnit${selectedLoan === 5000 ? 'Active' : ''}`} onClick={() => handleLoanSelect(5000)}>
                    <p>Rs 5000</p>
                </div>
                <div className={`offerUnit${selectedLoan === 2000 ? 'Active' : ''}`} onClick={() => handleLoanSelect(2000)}>
                    <p>Rs 2000</p>
                </div>
                <div className={`offerUnit${selectedLoan === 1000 ? 'Active' : ''}`} onClick={() => handleLoanSelect(1000)}>
                    <p>Rs 1000</p>
                </div>
                <div className={`offerUnit${selectedLoan === 3000 ? 'Active' : ''}`} onClick={() => handleLoanSelect(3000)}>
                    <p>Rs 3000</p>
                </div>
                <div className={`offerUnit${selectedLoan === 7000 ? 'Active' : ''}`} onClick={() => handleLoanSelect(7000)}>
                    <p>Rs 7000</p>
                </div>
                <div className={`offerUnit${selectedLoan === 4000 ? 'Active' : ''}`} onClick={() => handleLoanSelect(4000)}>
                    <p>Rs 4000</p>
                </div>
                <div className={`offerUnit${selectedLoan === 6000 ? 'Active' : ''}`} onClick={() => handleLoanSelect(6000)}>
                    <p>Rs 6000</p>
                </div>
            </div>
            <div className='offerDetails'>
                <div className='offerCard'>
                    <div className='offerCardTitle'>
                        <p>Payback {selectedLoan} in 5 Months</p>
                    </div>
                    <div className='offerCardMisc'>
                        <div className='offerCardMiscTitle'>
                            <p>Monthly Interest 2%</p>
                        </div>
                        <div className='offerCardMiscValue'>
                            <p>Rs {(selectedLoan * 0.02).toFixed(0)}</p>
                        </div>
                    </div>
                    <div className='offerCardMisc'>
                        <div className='offerCardMiscTitle'>
                            <p>Monthly Payment</p>
                        </div>
                        <div className='offerCardMiscValue'>
                            <p>Rs {(selectedLoan * 0.02 + selectedLoan / 5).toFixed(0)}</p>
                        </div>
                    </div>
                    <div className='offerAccept'>
                        <button onClick={handleProceed}>Apply Loan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;
