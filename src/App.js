import React, {Component} from 'react';
import UserObj from "./UserObj/UserObj";
import ObjF from "./carsObj/ObjF";
import HouseObj from "./HouseObj/HouseObj";



class App extends Component {
  render() {
    return (
        <div>
            {
                <UserObj classN={'girlFind'}/>
            }
            {
                <ObjF/>
            }
            {
                <HouseObj/>
            }
        </div>
    );
  }
}
export default App;
