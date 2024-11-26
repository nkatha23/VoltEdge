import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SettingsPage: React.FC = () => {
  const [notificationEmail, setNotificationEmail] = useState<boolean>(true);
  const [notificationSMS, setNotificationSMS] = useState<boolean>(false);
  const [energyGoal, setEnergyGoal] = useState<number>(10);
  const [password, setPassword] = useState<string>('');
  const [language, setLanguage] = useState<string>('English');
  const [deviceCount, setDeviceCount] = useState<number>(2); // Example of devices connected

  const handleNotificationChange = (type: string) => {
    if (type === 'email') {
      setNotificationEmail(!notificationEmail);
    } else if (type === 'sms') {
      setNotificationSMS(!notificationSMS);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEnergyGoalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnergyGoal(parseInt(e.target.value));
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-[#0077b6] mb-8">Settings</h1>
      
      {/* Account Information Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Account Information</h2>
        <form>
          <div className="mb-6">
            <label className="block text-lg text-gray-700">Change Password</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-4 py-2 mt-2 border rounded-md"
            />
          </div>
        </form>
      </div>
      
      {/* Preferences and Notifications Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Preferences and Notifications</h2>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={notificationEmail}
            onChange={() => handleNotificationChange('email')}
            className="mr-2"
          />
          <label className="text-lg text-gray-700">Receive Email Notifications</label>
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={notificationSMS}
            onChange={() => handleNotificationChange('sms')}
            className="mr-2"
          />
          <label className="text-lg text-gray-700">Receive SMS Notifications</label>
        </div>
      </div>

      {/* Energy Management Preferences */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Energy Management Preferences</h2>
        <label className="block text-lg text-gray-700">Energy Saving Goal (%)</label>
        <input
          type="number"
          value={energyGoal}
          onChange={handleEnergyGoalChange}
          className="w-full px-4 py-2 mt-2 border rounded-md"
        />
      </div>

      {/* Language and Localization */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Language and Localization</h2>
        <label className="block text-lg text-gray-700">Preferred Language</label>
        <select
          value={language}
          onChange={handleLanguageChange}
          className="w-full px-4 py-2 mt-2 border rounded-md"
        >
          <option value="English">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>

      {/* Connected Devices Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Connected Devices</h2>
        <p className="text-lg text-gray-700">You currently have {deviceCount} devices connected.</p>
        <Link to="/devices" className="text-[#00b4d8] hover:underline mt-4 inline-block">
          Manage Devices
        </Link>
      </div>

      {/* Security and Privacy Section */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Privacy and Security</h2>
        <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
          Delete Account
        </button>
      </div>

      {/* Data Backup and Export Settings */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Data Backup and Export</h2>
        <button className="bg-[#00b4d8] text-white px-6 py-3 rounded-md hover:bg-[#0077b6] transition mr-4">
          Backup Data
        </button>
        <button className="bg-[#00b4d8] text-white px-6 py-3 rounded-md hover:bg-[#0077b6] transition">
          Export as CSV
        </button>
      </div>

      {/* Support and Feedback */}
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-[#0077b6] mb-4">Support and Feedback</h2>
        <Link to="/help" className="text-[#00b4d8] hover:underline">
          Visit Help Center
        </Link>
      </div>
    </div>
  );
};

export default SettingsPage;
