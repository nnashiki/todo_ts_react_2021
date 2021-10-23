import React from 'react';
import Tasks, {Task} from './tasks'
import NewTask from "./newTask";
import MenuAppBar from './header'
import './App.css';

function App() {
  return (
    <div className="App">
      <MenuAppBar/>
        <NewTask />
    </div>
  );
}

export default App;
