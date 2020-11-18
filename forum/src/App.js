import './App.css';
import{ Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PostCreate from './pages/PostCreate';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import Register from './pages/Register';
import Header from './components/header';


function App() {
  return (
    <div>
      <h1>Forum</h1>
      <Header />
      <Switch>
        <Route path="/home" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/posts/create" component={PostCreate}/>
        <Route path="/posts/:id" component={PostDetail}/>
        <Route path="/posts" component={PostList}/>
        <Route path="/register" component={Register}/>
        <Route path="/">
        </Route>
      </Switch>
    </div>
  );
}

export default App;
