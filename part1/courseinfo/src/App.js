import React from 'react';
import './App.css';


const Hallo = (props) => {
  return (
      <div>
          <p>Hallo from component {props.name}</p>
      </div>
  )
}


function App() {
  return (
        <Hallo name="alena" />
  );
}

export default App;
