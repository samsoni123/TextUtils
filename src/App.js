
import React, { useState } from 'react';
import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');// Whether the dark mode is enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }


  const toggleMode=()=>{
  if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enabled","success");
  }
  }
  return (
    <>
    <Router>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3'>
        <Routes>
              <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils- Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />} />  
              <Route exact path="/about" element={<About mode={mode}/>} /> 
        </Routes>
   </div>
   </Router>
    </>
  );
}

export default App;
