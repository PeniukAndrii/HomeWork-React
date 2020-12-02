import React, {Component} from 'react';
import {girl} from "./database/girl";
import {prince} from "./database/prince";
import UserObj from "./UserObj/UserObj";

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
        </div>
    );
  }
}
export default App;
