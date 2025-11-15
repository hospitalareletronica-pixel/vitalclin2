import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import PacientesPage from './pages/PacientesPage';
import AddPacientePage from './pages/AddPacientePage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<PrivateRoute><DashboardPage /></PrivateRoute>}
        />
        <Route
          path="/pacientes"
          element={<PrivateRoute><PacientesPage /></PrivateRoute>}
        />
        <Route
          path="/pacientes/novo"
          element={<PrivateRoute><AddPacientePage /></PrivateRoute>}
        />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
}

export default App;
