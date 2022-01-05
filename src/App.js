import Hijo from './components/Hijo'
import React from 'react'
import DatosProvider from './context/DatosProvider'


function App(props) {
  return (
    <div className="App">
      <h1>hi</h1>
    <DatosProvider>    
      <Hijo/>
    </DatosProvider>
    </div>

  );
}

export default App;
