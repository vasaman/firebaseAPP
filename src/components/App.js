import React from 'react';
import SignUp from './SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';

export default function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '500px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <Route  path="/" element={} />
            </Switch>
            {/* <SignUp />
            <Dashboard />
            <Login />
            <ForgotPassword /> */}
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}
