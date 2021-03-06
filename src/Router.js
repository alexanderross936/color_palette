/* 
    Write code for React Router here
Import the Home and About components from 
the component folder. Assign the default
path "/" to the Home component and "/about"
to the About component.

Remember to export the component at the end
*/
import Main from './Main';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HSL3 from './hsl'
import ColorChooser from './ColorChooser';
import HSLAny from './hsl2';

// Write component imports here //



// Start Router function here //
function Router (){
    return (
        <BrowserRouter>
                            <Switch>
                <Route exact path="/" component = {Main} />
                <Route exact path="/hsl" component = {HSL3} />   
                <Route exact path="/hslany" component = {HSLAny} />   
        </Switch>
        </BrowserRouter>

      
    )
}

export default Router;