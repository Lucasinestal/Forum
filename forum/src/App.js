import './App.css';
import{ Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PostCreate from './pages/PostCreate';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import Register from './pages/Register';
import Header from './components/Header';
import Auth from './Auth';
import styled,{ createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
      background-color: #272727;
      color: white;
      display:flex;
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

  a{
    color: transparent;
  }
`


function App() {

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
      <Header  />
      <Switch>
        <PrivateRoute path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/posts/create" component={PostCreate}/>
        <PrivateRoute path="/posts/:id" component={PostDetail} />
        <PrivateRoute path="/posts" component={PostList}/>
        <Route path="/register" component={Register}/>
        <Route path="/">
        </Route>
      </Switch>
    </div>
  );


  
}


export default App;
