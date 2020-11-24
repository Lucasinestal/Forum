import './App.css';
import{ Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PostCreate from './pages/PostCreate';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import Register from './pages/Register';
import { UserContext } from './UserContext';
import React, {useState} from 'react'


import { createGlobalStyle } from 'styled-components'


const GlobalStyles = createGlobalStyle`
  * { 
  padding :0;
  margin: 0;
}

  body {
      background-color: #272727;
      color: white;
      display:flex;
      flex-direction: column;
  }
  .App {
    display: flex;
    flex-direction: column;
  }

 
  ::placeholder {
      color: #747474;
  }
  
  input:active {
      border: none;
  }
  
  :focus {
      outline: -webkit-focus-ring-color auto 0px;
  }

  h1, h2, h3, h4, h5{
    font-family: 'Quicksand-medium', sans-serif;
  }

  p {
    font-family: 'Quicksand-light', sans-serif;
  }

  a:hover {
    color: transparent;
    border: #FF652F 1px solid;
    border-radius: 10px;
  }

  a {
    color: #14A76C;
    text-decoration: none;
  }

  .postContainer:hover {
    color:white;
  }

  .loader {
    margin-top: 35vh
  }

`


function App() {

  const[userDetails, setUserDetails] = useState(null)

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props =>
    localStorage.getItem("token") ? (
    <Component {...props} />
    ) : (
    <Redirect
    to={{pathname: "/login"}}/>
    )
    }
    />
    );
  
  

  return (
    <div className="App">
      <GlobalStyles />
      <UserContext.Provider value={{userDetails, setUserDetails}}>
      <Switch>
        <PrivateRoute path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/posts/create" component={PostCreate}/>
        <PrivateRoute path="/posts/:id" component={PostDetail} />
        <PrivateRoute path="/posts" component={PostList}/>
        <Route path="/register" component={Register}/>
        <Route path="/" component={Login}/>
      </Switch>
      </UserContext.Provider>
    </div>
  );


  
}


export default App;
