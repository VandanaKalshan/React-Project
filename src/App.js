import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  const [mode, setMode] = useState('light') //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message,type)=>{
      setAlert({
        msg :  message,
        type : type
      })

      setTimeout(() => {
        setAlert(null); 
      }, 1500);

  }

  const toggleMode=()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }else{
       setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light Mode has been enabled","success");
    }
  }
 

  return (
    
    <BrowserRouter>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3"></div>
      <Routes>
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter The Text To Analyze" mode={mode} />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App; 
