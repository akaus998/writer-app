import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import AboutMe from './AboutMe';
import MyWork from './MyWork';
import Inspiration from './Inspiration';

const App =() =>{
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/aboutme"element={<AboutMe/>}/>
                <Route path="/mywork" element={<MyWork/>}/>
                <Route path="/inspiration" element={<Inspiration/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;