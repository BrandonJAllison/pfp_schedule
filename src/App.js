import React from 'react';
import Login from './Login'
import Scheduler from './Scheduler'
import { Route} from 'react-router-dom'



const App = () => {
  return (
   
     <div>
      
      <Route exact path="/"
          component={Login}
        />
      <Route path="/schedule"
          component={Scheduler}
        />
      
     </div>
    
  );
}

export default App;
