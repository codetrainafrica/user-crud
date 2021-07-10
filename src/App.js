import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Signup from './pages/signup';
import { BrowserRouter, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <ProtectedRoute path="/" exact component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <ProtectedRoute path="/settings" component={Settings} />
      </BrowserRouter>
    </div>
  );
}

export default App;
