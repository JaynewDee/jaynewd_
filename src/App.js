import React, { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';




const App = () => {
  const DisplayContext = React.createContext('unopened');
  const [displayContext, setContext] = useState(DisplayContext);

  return (
   <DisplayContext.Provider value={this}>
     <BrowserRouter>
         <div className="App">
            <Header/>
              <Main/>
         </div>
    </BrowserRouter>
    </DisplayContext.Provider>
  )
   
}

export default App;