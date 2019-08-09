import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './navbar';
import BoardIndex from './boardIndex';


const App = () => (
    <div>
        <NavBar />
        <BoardIndex />
    </div>
)

export default App;