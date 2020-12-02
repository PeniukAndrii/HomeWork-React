import React, {Component} from 'react';
import './style.css'
class UserObj extends Component {
    render() {
        let {item, items}=this.props
        return (
            <div>
                <div className={this.props.classN}>Name-{item.name} Age-{item.age} FootSize-{item.footSize}</div>
                <div className={'boy'}>Name-{items.name} Age-{items.age} FootSize-{items.footSizeFind}</div>
            </div>
        );
    }
}
export default UserObj;