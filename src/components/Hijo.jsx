import React, { Component} from 'react'
import Nieto from './Nieto'
import {DatosConsumer} from '../context/DatosProvider'


class Hijo extends Component { 
    render() {
        return(
       <DatosConsumer>
        {(props) => {
          return <div>{props.data.name}+hi2
          <Nieto></Nieto>
          </div>
        }}
        
       </DatosConsumer>                
        )
    }
}

export default Hijo;
