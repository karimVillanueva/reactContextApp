import React, { Component } from 'react';
import {DatosConsumer} from '../context/DatosProvider'

class Nieto extends Component {
    constructor(props){
        super(props);
        this.handlerClick = (props) =>{
            props.setData({
                name: 'Karim',
                value: 4
            })
        }
        this.state = {props: ''}

    }
   
    render() {
        return (
            <DatosConsumer>
                {props=>{
                    console.log( 'from nieto')
                    console.log(props)
                    return (
                        <div>
                        <button onClick={()=>this.handlerClick(props)}>Click</button>
                        </div>
                        )
                }}
            </DatosConsumer>
        );
    }
}

export default Nieto;
