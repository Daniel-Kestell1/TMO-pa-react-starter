import './App.css';
import React from 'react';
import Recipes from './components/recipes'

function App() {
  return (

    
    <div >

    <h1>My Recipes</h1>
      <Recipes />

      <h1 className="doNotRemoveMe">Hello world.</h1>
      {/* ^ Do not remove this element ^ */}
      
    </div>
  );
}

export default App;
