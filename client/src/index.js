import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import App from "./App";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router, Route
} from "react-router-dom";
import About from "./components/About";



const Home = () => {


    // const doRedirect = () => {
    //     let loggedIn = localStorage.getItem("signupData");

    //     if (loggedIn) {
    //         return <Redirect to="/" />;
    //     }
    //     else {
    //         return <Redirect to="/test" />;
    //     }
    // }


    return (
       
            <Router>
            
            <Route path="/" component={App} />
        
    </Router>
       
    
    )
}


ReactDOM.render(<Provider store={store}> <Home /> </Provider>, document.getElementById('root'));