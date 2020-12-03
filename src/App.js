import React, {Component} from 'react';
import UserObj from "./UserObj/UserObj";
import ObjF from "./carsObj/ObjF";

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
        </div>
    );
  }
}
export default App;
