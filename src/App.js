import Header from "../src/components/Header";
import { Route, Router} from 'react-router-dom'
import React from 'react';
import history from "./history";
import Explore from "./components/explore/Explore";
import Rant from "./components/rant/Rant";
import Muse from "./components/muse/Muse";
import Historical from "./components/history/History";


const App = () =>  {
  return (
      <div className="ui secondary pointing menu">
          <Router  history={history}>
              {/*<Header/>*/}
               <div>
                  <Route path="/" exact component={Header}/>
                  <Route path="/explore" exact component={Explore}/>
                  <Route path="/rant" exact component={Rant}/>
                  <Route path="/muse" exact component={Muse}/>
                  <Route path="/history" exact component={Historical}/>
                  <Route path='/books' component={() => {
                      window.location.href = 'https://chris-lomeli.gitbook.io/tiny-engines/';
                      return null;
                  }}/>
              </div>
          </Router>
      </div>
  );
}

export default App;
