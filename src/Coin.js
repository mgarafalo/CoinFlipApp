import React, { Component } from 'react'

function Coin (props) {
    console.log(props);
        return (
            <div className='Coin'>
                <img src={props.face} alt="Coin Face" width={250} height={250}></img>
            </div>
        )
}

export default Coin;