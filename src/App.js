import React, {Component} from 'react';
import {girl} from "./database/girl";
import {prince} from "./database/prince";
import {cars} from "./dataCars/cars";
import UserObj from "./UserObj/UserObj";
import ObjF from "./carsObj/ObjF";

class App extends Component {
  render() {

    return (
        <div>
            {
                girl.map((i, index)=>{
                    if(i.footSize===prince[0].footSizeFind){
                        return(<UserObj item={i} items={prince[0]} classN={'girlFind'}  key={index}/>)
                    }})
            }
            {
                cars.map((value,index)=>{
                    return(<ObjF item={value} key={index}/>)
                })
            }
        </div>
    );
  }
}
export default App;
