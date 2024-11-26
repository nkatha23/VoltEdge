import React, { useState, useEffect } from 'react';
// @ts-ignore
import { Line } from 'react-chartjs-2';
import ChartJS from 'chart.js/auto';
import EnergyForm from '../components/EnergyForm';

const EnergyUsagePage: React.FC = () => {
  const [energyData, setEnergyData] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEnergyData = async () => {
      try {
        // Simulate fetching energy data from backend
        const data = [50, 45, 60, 55, 70, 65, 80]; // Mock data
        setEnergyData(data);
      } catch (err) {
        setError('Failed to fetch energy data.');
      } finally {
        setLoading(false);
      }
    };
    fetchEnergyData();
  }, []);

  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Energy Usage (kWh)',
        data: energyData,
        borderColor: '#0077b6',
        backgroundColor: 'rgba(0, 183, 218, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Energy Usage Over the Past Week',
      },
    },
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
        </div>
      ) : error ? (
        <div className="text-red-600 text-center">{error}</div>
      ) : (
        <>
          {/* Page Title */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-[#0077b6] mb-4">Energy Usage</h1>
            <p className="text-lg text-gray-700 mb-8">Track your daily energy consumption and optimize your efficiency.</p>
          </div>

          {/* Line Chart for Energy Usage */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
            <Line data={data} options={options} />
          </div>

          {/* Energy Breakdown Section */}
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Lighting</h2>
              <p className="text-gray-600">15 kWh used this week.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div className="bg-[#00b4d8] h-2.5 rounded-full" style={{ width: '30%' }}></div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Heating</h2>
              <p className="text-gray-600">30 kWh used this week.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div className="bg-[#00b4d8] h-2.5 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Appliances</h2>
              <p className="text-gray-600">20 kWh used this week.</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                <div className="bg-[#00b4d8] h-2.5 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>

          {/* Energy Form for Manual Input */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Enter Your Energy Data</h2>
            <p className="text-gray-600 mb-4">Manually add energy usage data to keep your records up-to-date.</p>
            <EnergyForm />
          </div>
        </>
      )}
    </div>
  );
};

export default EnergyUsagePage;
