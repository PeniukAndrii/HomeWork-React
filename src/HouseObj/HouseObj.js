import React, {Component} from 'react';
import {house} from "../database/House";
import '../database/style.css'

class HouseObj extends Component {
    render() {
        return (
            <div>
                {
                    house.map(value => {
                        return(<div className={'house def'}>Position-{value.position}, Price-{value.price}, Area-{value.area}</div>)
                    })
                }
            </div>
        );
    }
}

export default HouseObj;