import React, {VFC} from 'react';
import Tasks, {Task} from './tasks'
import NewTask from "./newTask";
import MenuAppBar from './header'
import './App.css';
import {
    BrowserRouter,
    Link,
    Route
} from 'react-router-dom';

const About: VFC = () => {
    return <h2>About</h2>;
}

const App: VFC = () => {
  return (
      <BrowserRouter>
        <div className="App">
            <MenuAppBar/>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/' exact>
                    <NewTask />
                </Route>
        </div>
      </BrowserRouter>
  );
}

export default App;
