import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//  } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const toggleMode = (cls)=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#26577C'
      showAlert("Dark Mode Enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Enabled","success");
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <Routes> */}
          {/* <Route path="/about" element= { <About mode={mode} /> }></Route> */}
          {/* <Route path="/" element= {}></Route> */}
          <TextForm showAlert={showAlert} heading="Try - TextManipulator for Word Couter, Character Counter & many more!" mode={mode}/>
    {/* </Routes> */}
    </div>
    <Footer mode={mode}/>
    {/* </Router> */}
    </>
  );
}

export default App;
