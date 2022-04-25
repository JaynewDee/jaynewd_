import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';




const App = () => {

  return (
     <BrowserRouter>
         <div className="App">
            <Header/>
              <Main/>
         </div>
    </BrowserRouter>
  )
   
}

export default App;