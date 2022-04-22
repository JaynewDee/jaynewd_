import { useState, useEffect } from 'react';
import Main from './pages/Main';
import Header from './components/Header';

const App = () => {
   
  return (
     
    <div className="App">
       <Header />
         <Main />
    </div>
  )
   
}

export default App;