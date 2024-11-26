import React, { useState } from 'react';

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    profilePictureUrl: 'https://via.placeholder.com/150',
    energyGoal: 500,
    notifyEnergyUsageAlerts: true,
    notifyRecommendations: false,
    principalId: 'abcd-efgh-ijkl-mnop',
  });

  return (
    <div className="bg-white text-gray-900">
      <div className="container mx-auto px-6 py-12">
        <section className="mb-10">
          <h3 className="text-3xl font-bold text-[#0077b6] mb-6">Profile Page</h3>

          {/* Personal Information Section */}
          <h3 className="text-xl font-bold mb-4">Personal Information</h3>
          <div className="flex items-center mb-6">
            <img src={`https://api.adorable.io/avatars/150/${user.name}.png`} alt="Profile" className="w-16 h-16 rounded-full mr-4" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Name</label>
            <input type="text" value={user.name} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Email (stored off-chain)</label>
            <input type="email" value={user.email} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
        </section>

        {/* Principal ID Display Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Your Principal ID</h3>
          <p className="text-sm text-gray-700 mb-4">This is your unique identifier on the Internet Computer. Keep it safe and do not share it unnecessarily.</p>
          <div className="flex items-center mb-4">
            <span className="bg-gray-100 p-2 rounded-md">{user.principalId}</span>
            <button 
              onClick={() => navigator.clipboard.writeText(user.principalId)} 
              className="ml-4 bg-[#0077b6] text-white px-4 py-2 rounded-md hover:bg-[#00b4d8] transition"
            >
              Copy Principal ID
            </button>
          </div>
        </section>

        {/* Energy Goal Settings Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Energy Goals</h3>
          <p className="text-sm text-gray-700 mb-4">Set your energy-saving goals to help reduce your consumption and make informed decisions.</p>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Monthly Energy Usage Goal (kWh)</label>
            <input type="number" value={user.energyGoal} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <button className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#00b4d8] transition">Save Goal</button>
        </section>

        {/* Notification Preferences Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Notification Preferences</h3>
          <div className="mb-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" checked={user.notifyEnergyUsageAlerts} className="form-checkbox" />
              <span>Energy Usage Alerts (via email if provided)</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center space-x-3">
              <input type="checkbox" checked={user.notifyRecommendations} className="form-checkbox" />
              <span>Monthly Recommendations (via email if provided)</span>
            </label>
          </div>
        </section>

        {/* Energy Usage Summary Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Energy Usage Summary</h3>
          <p className="text-sm text-gray-700 mb-4">Here is a summary of your energy consumption over time.</p>
          {/* Placeholder for the graph, replace with an actual graph component */}
          <div className="bg-white shadow rounded-lg p-6">
            <p>Graph Placeholder for Energy Usage Trend</p>
          </div>
        </section>

        {/* Connected Devices Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Connected Devices</h3>
          <div className="mb-6">
            <ul className="space-y-4">
              <li className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
                <span>Smart Thermostat (Living Room)</span>
                <button className="text-red-500 hover:underline">Disconnect</button>
              </li>
              <li className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
                <span>Smart Plug (Kitchen)</span>
                <button className="text-red-500 hover:underline">Disconnect</button>
              </li>
            </ul>
          </div>
          <button className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#00b4d8] transition">Add New Device</button>
        </section>

        {/* Data Summary Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Data Summary</h3>
          <p className="text-sm text-gray-700 mb-4">
            View your energy usage and interactions stored on-chain.
          </p>
          <button className="bg-[#0077b6] text-white px-6 py-3 rounded-md hover:bg-[#00b4d8] transition">
            View Data Summary
          </button>
        </section>

        {/* Personalized Recommendations Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Personalized Recommendations</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
              <div>
                <p className="font-semibold text-[#0077b6]">Upgrade to LED Lighting</p>
                <p className="text-sm text-gray-700">Potential Savings: 5 kWh per month</p>
              </div>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">Mark as Completed</button>
            </div>
          </div>
        </section>

        {/* Permissions Management Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Permissions Management</h3>
          <p className="text-sm text-gray-700 mb-4">View and manage canisters that have permission to interact with your account.</p>
          <div className="mb-6">
            <ul className="space-y-4">
              <li className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
                <span>Energy Tracker Canister</span>
                <button className="text-red-500 hover:underline">Revoke Access</button>
              </li>
              <li className="flex justify-between items-center bg-gray-100 p-4 rounded-md">
                <span>Recommendation Engine Canister</span>
                <button className="text-red-500 hover:underline">Revoke Access</button>
              </li>
            </ul>
          </div>
        </section>

        {/* Wallet Security Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Wallet Security</h3>
          <p className="text-sm text-gray-700 mb-4">
            Your principal ID is your identity on the Internet Computer. Make sure to securely store your private keys, and avoid sharing them with anyone.
          </p>
          <a href="/help" className="text-[#00b4d8] hover:underline">Learn more about keeping your keys secure</a>
        </section>

        {/* Activity Logs Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Activity Logs</h3>
          <p className="text-sm text-gray-700 mb-4">Track your recent activities and ensure there have been no unauthorized changes.</p>
          <div className="bg-white shadow rounded-lg p-6">
            <ul className="space-y-4">
              <li>Updated energy usage goal - 2 days ago</li>
              <li>Connected a smart thermostat - 5 days ago</li>
              <li>Granted permissions to Energy Tracker Canister - 1 week ago</li>
            </ul>
          </div>
        </section>

        {/* Wallet Integration Guide Section */}
        <section className="mb-10">
          <h3 className="text-xl font-bold mb-4">Wallet Integration Guide</h3>
          <p className="text-sm text-gray-700 mb-4">
            To use VoltEdge effectively, you need a compatible wallet. Here are some guides on how to set up a wallet that works with the Internet Computer.
          </p>
          <ul className="list-disc pl-5 text-[#00b4d8]">
            <li><a href="https://plugwallet.ooo/" target="_blank" rel="noopener noreferrer" className="hover:underline">Set up Plug Wallet</a></li>
            <li><a href="https://www.stoicwallet.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">Set up Stoic Wallet</a></li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default ProfilePage;