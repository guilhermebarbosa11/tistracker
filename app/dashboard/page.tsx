'use client';

import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import InfoCard from '../../components/InfoCard';
import Chart from '../../components/Chart';

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="p-8 overflow-y-auto">
          {/* Cabeçalho */}
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 mt-1 mb-6">Visão geral rápida</p>

          {/* Cards de estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <InfoCard
              title="Total de guias ativas"
              description="Número total de guias ativas no momento"
              value="123"
            />
            <InfoCard
              title="Total de cisternas em rota"
              description="Número total de cisternas atualmente em rota"
              value="45"
            />
          </div>

          {/* Gráfico */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Gráfico de movimentações por dia
            </h2>
            <p className="text-gray-500 text-sm mb-4">
              Visualização gráfica das movimentações diárias
            </p>
            <Chart />
          </div>
        </main>
      </div>
    </div>
  );
}
