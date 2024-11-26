import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsLightningCharge, BsGear, BsLightbulb } from 'react-icons/bs';

const HomePage: React.FC = () => {
  const [principal, setPrincipal] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrincipal = async () => {
      try {
        const fetchedPrincipal = "UserPrincipal1234"; // Mock data
        setPrincipal(fetchedPrincipal);
      } catch (err) {
        setError("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchPrincipal();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white py-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to VoltEdge{principal && `, ${principal}`}</h1>
          <p className="text-xl mb-8 animate-fade-in-delay">Empowering you to manage your energy usage efficiently and save on costs.</p>
          <Link to="/energy-usage" className="bg-white text-[#0077b6] font-bold px-8 py-4 rounded-md hover:bg-gray-100 transition transform hover:scale-105">
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
          </div>
        ) : error ? (
          <div className="text-red-600 text-center">{error}</div>
        ) : (
          <>
            {/* Energy Savings Summary Widget */}
            <div className="bg-white shadow-lg rounded-lg p-6 mb-10 transition transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Your Energy Savings Summary</h2>
              <p className="text-gray-600 mb-4">You've saved approximately <span className="font-bold text-[#00b4d8]">50 kWh</span> this month! Keep up the great work!</p>
              <Link to="/recommendations" className="text-[#00b4d8] hover:underline">View Recommendations to Save More</Link>
            </div>

            {/* Recent Activity Overview */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Recent Activities</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="border-b pb-2">Updated energy usage goal - 2 days ago</li>
                <li className="border-b pb-2">Added a new smart thermostat - 5 days ago</li>
                <li className="border-b pb-2">Viewed energy report - 1 week ago</li>
              </ul>
            </div>

            {/* Main Feature Cards */}
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <BsLightningCharge className="text-[#0077b6] mr-2 text-2xl animate-pulse" />
                  <h2 className="text-2xl font-semibold text-[#0077b6]">Track Energy Usage</h2>
                </div>
                <p className="text-gray-600 mb-4">Stay updated with your real-time energy consumption to better manage your usage and control costs.</p>
                <Link to="/energy-usage" className="text-[#00b4d8] hover:underline">Learn More</Link>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <BsLightbulb className="text-[#0077b6] mr-2 text-2xl animate-pulse" />
                  <h2 className="text-2xl font-semibold text-[#0077b6]">Receive Recommendations</h2>
                </div>
                <p className="text-gray-600 mb-4">Get personalized recommendations to optimize your energy consumption and increase efficiency.</p>
                <Link to="/recommendations" className="text-[#00b4d8] hover:underline">Learn More</Link>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105">
                <div className="flex items-center mb-4">
                  <BsGear className="text-[#0077b6] mr-2 text-2xl animate-pulse" />
                  <h2 className="text-2xl font-semibold text-[#0077b6]">Manage Your Profile</h2>
                </div>
                <p className="text-gray-600 mb-4">Update your settings, view your past energy data, and customize your energy goals.</p>
                <Link to="/profile" className="text-[#00b4d8] hover:underline">Learn More</Link>
              </div>
            </div>

            {/* Enhanced Interactive Dashboard Link */}
            <Link to="/dashboard" className="bg-[#0077b6] text-white px-8 py-4 rounded-md hover:bg-[#00b4d8] transition transform hover:scale-105 mt-12 inline-block">
              View Interactive Dashboard
            </Link>
          </>
        )}
      </main>
    </div>
  );
};

export default HomePage;
