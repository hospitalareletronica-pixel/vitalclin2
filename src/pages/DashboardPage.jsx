import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Users, Calendar, DollarSign, BarChart } from 'lucide-react';

function DashboardPage() {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <Users className="text-blue-500" size={32} />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Total de Pacientes</h3>
            <p className="text-2xl font-bold">128</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <Calendar className="text-green-500" size={32} />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Agendamentos Hoje</h3>
            <p className="text-2xl font-bold">12</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <DollarSign className="text-yellow-500" size={32} />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Faturamento do Mês</h3>
            <p className="text-2xl font-bold">R$ 15.230</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
          <BarChart className="text-red-500" size={32} />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">Novos Pacientes</h3>
            <p className="text-2xl font-bold">8</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default DashboardPage;
