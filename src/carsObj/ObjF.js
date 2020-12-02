import React, {Component} from 'react';
import './car.css'

class ObjF extends Component {
    render() {
        let {item}=this.props
        return (
            <div>
                <div className={'cars'}>{item.producer}, {item.model}, {item.year}, {item.color}, {item.type}, {item.engine}, {item.volume}, {item.power}</div>
            </div>
        );
    }
}

export default ObjF;