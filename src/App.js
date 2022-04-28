import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Portal from './pages/Portal';
import Header from './components/Header';




const App = () => {
   


  return (
     <BrowserRouter>
         <div className="App">
              <Portal/>
         </div>
    </BrowserRouter>
  )
   
}

export default App;