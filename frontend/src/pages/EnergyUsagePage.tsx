import React, { useState, useEffect } from 'react';
// Import the necessary components from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Needed for Pie chart arcs
  BarElement,  // Needed for Bar chart
  RadialLinearScale // Needed for Radar charts
} from 'chart.js';
import { Line, Pie, Bar, Radar } from 'react-chartjs-2';
import EnergyForm from '../components/EnergyForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Register all the required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Register the arc element for Pie charts
  BarElement,  // Register the Bar element for Bar charts
  RadialLinearScale // Register the radial linear scale for Radar charts
);

const EnergyUsagePage: React.FC = () => {
  const [energyData, setEnergyData] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState<'weekly' | 'monthly' | 'yearly'>('weekly');

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

  const pieData = {
    labels: ['Lighting', 'Heating', 'Appliances'],
    datasets: [
      {
        data: [15, 30, 20], // Mock values for categories
        backgroundColor: ['#0077b6', '#00b4d8', '#90e0ef'],
        hoverBackgroundColor: ['#023e8a', '#0096c7', '#48cae4'],
      },
    ],
  };

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Energy Usage (kWh)',
        data: [200, 180, 250, 300, 280, 320, 290, 300, 310, 275, 260, 240],
        backgroundColor: '#00b4d8',
      },
    ],
  };

  const radarData = {
    labels: ['Lighting', 'Heating', 'Appliances'],
    datasets: [
      {
        label: 'Last Month',
        data: [20, 25, 15], // Mock data
        backgroundColor: 'rgba(0, 119, 182, 0.2)',
        borderColor: '#0077b6',
        borderWidth: 2,
      },
      {
        label: 'Current Month',
        data: [25, 20, 18], // Mock data
        backgroundColor: 'rgba(0, 183, 218, 0.2)',
        borderColor: '#00b4d8',
        borderWidth: 2,
      },
    ],
  };

  const handleFormSubmit = () => {
    toast.success('Energy data added successfully!');
  };

  const handleTimeRangeChange = (range: 'weekly' | 'monthly' | 'yearly') => {
    setTimeRange(range);
    // Update the data accordingly based on timeRange (for now, it's mock data)
    setEnergyData([60, 70, 65, 80, 75, 90, 85]);
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

          {/* Time Range Toggle */}
          <div className="flex justify-center space-x-4 mb-6">
            <button onClick={() => handleTimeRangeChange('weekly')} className={`px-4 py-2 rounded ${timeRange === 'weekly' ? 'bg-[#0077b6] text-white' : 'bg-gray-200'}`}>Weekly</button>
            <button onClick={() => handleTimeRangeChange('monthly')} className={`px-4 py-2 rounded ${timeRange === 'monthly' ? 'bg-[#0077b6] text-white' : 'bg-gray-200'}`}>Monthly</button>
            <button onClick={() => handleTimeRangeChange('yearly')} className={`px-4 py-2 rounded ${timeRange === 'yearly' ? 'bg-[#0077b6] text-white' : 'bg-gray-200'}`}>Yearly</button>
          </div>

          {/* Line Chart for Energy Usage */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
            <Line data={data} options={options} />
          </div>

          {/* Energy Usage Breakdown Pie Chart */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Energy Usage Breakdown</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Pie data={pieData} />
            </div>
          </div>

          {/* Monthly Energy Usage Bar Chart */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Monthly Energy Usage</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Bar data={barData} />
            </div>
          </div>

          {/* Energy Breakdown Section */}
          <div className="grid gap-8 md:grid-cols-3 mt-12">
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

          {/* Monthly Comparison Radar Chart */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Monthly Usage Comparison</h2>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <Radar data={radarData} />
            </div>
          </div>

          {/* Energy Form for Manual Input */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Enter Your Energy Data</h2>
            <p className="text-gray-600 mb-4">Manually add energy usage data to keep your records up-to-date.</p>
            <EnergyForm onSubmit={handleFormSubmit} />
          </div>

          {/* Insights & Recommendations */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Insights & Recommendations</h2>
            <ul className="list-disc list-inside text-gray-700">
              {energyData.some(usage => usage > 70) && (
                <li className="mb-2">
                  You have high energy usage on certain days. Consider using energy-efficient appliances.
                </li>
              )}
              {energyData.some(usage => usage < 50) && (
                <li className="mb-2">
                  Great job keeping your energy usage low! Maintaining this could save you money in the long term.
                </li>
              )}
            </ul>
          </div>
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default EnergyUsagePage;
