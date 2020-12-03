import React, {Component} from 'react';
import './style.css'
import {girl} from '../database/girl'
import {prince} from "../database/prince";

class UserObj extends Component {
    render() {
        let {classN}=this.props
        console.log(classN)
        return (
            <div>
                {
                    girl.map(i =>{
                        if(i.footSize===prince[0].footSizeFind){
                            return(
                                <div>
                                    <div className={classN}>Name-{i.name} Age-{i.age} FootSize-{i.footSize}</div>
                                    <div className='boy'>Name-{prince[0].name} Age-{prince[0].age} FootSizeFind-{prince[0].footSizeFind}</div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        );
    }
}
export default UserObj;