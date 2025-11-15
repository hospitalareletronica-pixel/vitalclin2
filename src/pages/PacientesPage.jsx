import React, { useState, useEffect } from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import { Link } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

function PacientesPage() {
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    const fetchPacientes = async () => {
      const querySnapshot = await getDocs(collection(db, 'pacientes'));
      const pacientesList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPacientes(pacientesList);
    };

    fetchPacientes();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Pacientes</h1>
        <Link to="/pacientes/novo" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Adicionar Paciente
        </Link>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left py-2">Nome</th>
              <th className="text-left py-2">Email</th>
              <th className="text-left py-2">Telefone</th>
            </tr>
          </thead>
          <tbody>
            {pacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td className="py-2">{paciente.nome}</td>
                <td className="py-2">{paciente.email}</td>
                <td className="py-2">{paciente.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}

export default PacientesPage;
