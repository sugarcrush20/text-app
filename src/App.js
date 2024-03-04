
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{ useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [Mode, setMode] = useState('light');
  const [alert,setalert] =useState(null);
  const showAlert =(message,type)=>{
    setalert({
      msg:message,
      type :type
    })
    setTimeout(()=>{
      setalert(null);
    },3000);
  }
  const toggleMode=()=>{
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  const togglegreenMode=()=>{
    if(Mode === 'light'|| Mode==='dark'){
      setMode('green');
      document.body.style.backgroundColor='#0c3224';
      showAlert("Green mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
  <Router>
<Navbar title="Textmanipulator" about="About Us" mode={Mode} toggleMode={toggleMode} togglegreenMode={togglegreenMode}/>
<Alert alert={alert}/>
 <div className="container my-3">
 <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading= "ENTER TEXT TO ANALYSE" mode={Mode} />  
            
          </Route>
   </Switch>
 </div>
</Router>
 



   
  );
}

export default App;
