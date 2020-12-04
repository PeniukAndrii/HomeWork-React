import React, {Component} from 'react';
import '../../Style/style.css'
import {db} from '../../database/db'


class User extends Component {
    render() {
        let {classN}=this.props
        return (
            <div>
                {
                    db.girl.map(i => {
                            if (i.footSize === db.prince[0].footSizeFind) {
                                return (
                                    <div>
                                        <div className={`${classN} def`}>Name-{i.name}, Age-{i.age},
                                            FootSize-{i.footSize}</div>
                                        <div className={`boy def`}>Name-{db.prince[0].name}, Age-{db.prince[0].age},
                                            FootSizeFind-{db.prince[0].footSizeFind}</div>
                                    </div>
                                )
                            }
                        })
                }
            </div>
        );
    }
}
export default User;