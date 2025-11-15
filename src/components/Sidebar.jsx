import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Calendar, DollarSign } from 'lucide-react';

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h2 className="text-xl font-bold">Sisclin</h2>
      </div>
      <nav>
        <ul>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/" className="flex items-center">
              <Home className="mr-2" /> Dashboard
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/pacientes" className="flex items-center">
              <Users className="mr-2" /> Pacientes
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/agendamentos" className="flex items-center">
              <Calendar className="mr-2" /> Agendamentos
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-100">
            <Link to="/financeiro" className="flex items-center">
              <DollarSign className="mr-2" /> Financeiro
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
