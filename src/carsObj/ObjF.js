import React, {Component} from 'react';
import './car.css'
import {cars} from '../dataCars/cars'

class ObjF extends Component {
    render() {
        return (
            <div>
                {
                    cars.map(value=>{
                        return(
                          <div className={'cars'}>
                              {value.producer}, {value.model}, {value.year}, {value.color}, {value.type}, {value.engine}, {value.volume}, {value.power}
                          </div>)
                    })
                }
            </div>
        )
    }
}

export default ObjF;