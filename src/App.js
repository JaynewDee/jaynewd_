import React, {useState} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Portal from './pages/Portal';




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