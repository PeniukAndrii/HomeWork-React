import React, {Component} from 'react';
import '../database/style.css'
import {cars} from '../database/cars'

class ObjF extends Component {
    render() {
        return (
            <div>
                {
                    cars.map(value=>{
                        return(
                          <div className={'cars def'}>
                              {value.producer}, {value.model}, {value.year}, {value.color}, {value.type}, {value.engine}, {value.volume}, {value.power}
                          </div>)
                    })
                }
            </div>
        )
    }
}

export default ObjF;