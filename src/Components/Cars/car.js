import React, {Component} from 'react';
import '../../Style/style.css'
import {db} from '../../database/db'

class Car extends Component {
    render() {

        return (
            <div>
                {
                    db.cars.map(value=>{
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

export default Car;