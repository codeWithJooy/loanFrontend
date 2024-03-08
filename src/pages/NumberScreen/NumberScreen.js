import React from 'react'
import "../../styles/global.css"
import "../../styles/number.css"
import Header from '../../components/Header/Header'

const NumberScreen=()=>{
    return(
        <div className='main'>
            <Header />
          <div className='container'>
             <div className='card'>
                <div className='titleSection'>
                    <div className='title'>
                      <p className='titleWelcome'>Welcome To</p>
                    </div>
                    <div className='title'>
                    <p className='titleCompany'>SnapLoans</p>
                    </div>
                </div>
                <div className='numberSection'>
                    <div className='inputSection'>
                        <div className='inputLabel'>
                            <label>Enter Your Phone Number</label>
                        </div>
                        <div className='inputText'>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className='proceedSection'>
                    <button>Proceed</button>
                </div>
             </div>
          </div>
        </div>
    )
}

export default NumberScreen;