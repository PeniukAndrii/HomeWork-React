import React, {Component} from 'react';
import User from "./Components/users/User";
import Car from "./Components/Cars/car";
import House from "./Components/house/House";



class App extends Component {
  render() {
    return (
        <div>
            {
                <User classN={'girlFind'} />
            }
            {
                <Car />
            }
            {
                <House />
            }
        </div>
    );
  }
}
export default App;
