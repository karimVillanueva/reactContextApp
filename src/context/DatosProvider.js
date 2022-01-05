import React, {useState, createContext} from 'react'


const DatosContext = createContext();
export const DatosConsumer = DatosContext.Consumer;

const dataInitial =  {
  name: 'monis',
  value: 0 
}

 const DatosProvider = ({children}) =>{
  const [data, setData] = useState(dataInitial);
  return (
    <DatosContext.Provider value={{ data, setData }}>
      {children}
    </DatosContext.Provider>
  );
}

export default DatosProvider;