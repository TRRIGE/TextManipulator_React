import React from 'react'


export default function Footer(props) {
    let myStyle = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : '#2b3035',
        borderRadius: '0px',
    }
  return (
    <div className="card text-center" style={myStyle}>
        <div className="card-body">
           <h5>TextManipulator</h5>
           <h5 className="card-title">Your Easy Text Manipulator</h5>
           <p className="card-text">CopyRight &copy; 2023 Made with <i className="bi bi-heart-fill" style={{color:'red'}}></i> By Pratik Samarth</p>
        </div>
    </div>
  )
}
