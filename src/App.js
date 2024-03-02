
import React, { useState } from 'react';
import './App.css';
// import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import Alert from './componants/Alert';


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
    showAlert("Dark mode has been enable","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Light mode has been enable","success");
  }
  }
  return (
    <>
   <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className='container my-3'>
   <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
   {/* <About/> */}
   </div>
    </>
  );
}

export default App;
