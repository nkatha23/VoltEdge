import React, { useState } from 'react';

const EnergyForm: React.FC = () => {
  const [consumption, setConsumption] = useState<number | "">("");
  const [message, setMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConsumption(parseFloat(e.target.value) || "");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof consumption === "number" && consumption > 0) {
      setMessage(`Your energy consumption is recorded: ${consumption} kWh`);
      // Submit data to the backend or perform any desired action here
    } else {
      setMessage("Please enter a valid energy consumption value.");
    }
  };

  return (
    <div className="p-4 border rounded shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Energy Consumption Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col">
          Consumption (kWh):
          <input
            type="number"
            value={consumption}
            onChange={handleInputChange}
            className="p-2 border rounded mt-1"
            placeholder="Enter your consumption in kWh"
          />
        </label>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Submit
        </button>
      </form>
      {message && (
        <p className="mt-4 text-lg font-semibold">{message}</p>
      )}
    </div>
  );
};

export default EnergyForm;
