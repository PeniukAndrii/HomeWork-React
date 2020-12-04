import React, {Component} from 'react';
import {db} from "../../database/db";
import '../../Style/style.css'

class House extends Component {
    render() {
        return (
            <div>
                {
                    db.house.map(value => {
                        return(<div className={'house def'}>Position-{value.position}, Price-{value.price}, Area-{value.area}</div>)
                    })
                }
            </div>
        );
    }
}

export default House;