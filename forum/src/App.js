import './App.css';
import{ Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import PostCreate from './pages/PostCreate';
import PostDetail from './pages/PostDetail';
import PostList from './pages/PostList';
import Register from './pages/Register'


function App() {
  return (
    <div>
      <h1>Forum</h1>
      <Switch>
        <Route path="/home">
          <Home/>        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/posts/create">
          <PostCreate />
        </Route>
        <Route path="/posts/:id">
        <PostDetail />
        </Route>
        <Route path="/posts">
        <PostList />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
        </Route>
      </Switch>
    </div>
  );
}

export default App;
