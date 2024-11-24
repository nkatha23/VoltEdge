// // import React from 'react';

// // const Dashboard = () => {
// //   return (
// //     <div className="page-container">
// //       <h2>Dashboard</h2>
// //       <p>Welcome to your Dashboard. Here you can view and manage your energy usage.</p>
// //     </div>
// //   );
// // };

// // export default Dashboard;

// import React, { useState, useEffect } from 'react';
// import { Actor, HttpAgent } from '@dfinity/agent'; 
// //import { idlFactory } from './declarations/VoltEdge_backend/VoltEdge_backend'; // Import your canister's candid interface

// // const canisterId = "<CANISTER_ID>"; // Replace with your canister ID

// // // Initialize the agent and actor
// // const agent = new HttpAgent({ host: "https://ic0.app" }); // Connect to the Internet Computer
// // const backendActor = Actor.createActor(idlFactory, { agent, canisterId });

// function App() {
//   const [energyUsage, setEnergyUsage] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);
//   const [newUsage, setNewUsage] = useState("");
//   const [loading, setLoading] = useState(false);

//   // Fetch energy usage data and recommendations on load
//   useEffect(() => {
//     fetchEnergyUsage();
//     fetchRecommendations();
//   }, []);

//   const fetchEnergyUsage = async () => {
//     setLoading(true);
//     try {
//       const data = await backendActor.analyze_user_energy();
//       setEnergyUsage(data);
//     } catch (error) {
//       console.error("Error fetching energy usage:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchRecommendations = async () => {
//     setLoading(true);
//     try {
//       const data = await backendActor.get_recommendations();
//       setRecommendations(data);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const addEnergyUsage = async () => {
//     setLoading(true);
//     try {
//       await backendActor.add_energy_usage(parseFloat(newUsage));
//       alert("Energy usage added successfully!");
//       fetchEnergyUsage(); // Refresh data
//     } catch (error) {
//       console.error("Error adding energy usage:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const saveEnergyRecommendations = async () => {
//     setLoading(true);
//     try {
//       await backendActor.save_recommendations(recommendations);
//       alert("Recommendations saved successfully!");
//     } catch (error) {
//       console.error("Error saving recommendations:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>VoltEdge Dashboard</h1>
//       {loading && <p>Loading...</p>}
      
//       <div style={{ marginBottom: "20px" }}>
//         <h2>Add Energy Usage</h2>
//         <input
//           type="number"
//           value={newUsage}
//           onChange={(e) => setNewUsage(e.target.value)}
//           placeholder="Enter consumption in kWh"
//           style={{ padding: "10px", marginRight: "10px" }}
//         />
//         <button onClick={addEnergyUsage} style={{ padding: "10px" }}>
//           Add Usage
//         </button>
//       </div>

//       <div style={{ marginBottom: "20px" }}>
//         <h2>Energy Usage Analysis</h2>
//         {energyUsage.length > 0 ? (
//           <table border="1" style={{ width: "100%", textAlign: "left" }}>
//             <thead>
//               <tr>
//                 <th>Timestamp</th>
//                 <th>Consumption (kWh)</th>
//                 <th>Recommendation</th>
//                 <th>Potential Savings (kWh)</th>
//               </tr>
//             </thead>
//             <tbody>
//               {energyUsage.map((usage, index) => (
//                 <tr key={index}>
//                   <td>{new Date(usage.timestamp / 1e6).toLocaleString()}</td>
//                   <td>{usage.consumption_kwh}</td>
//                   <td>{usage.recommendation}</td>
//                   <td>{usage.potential_savings}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p>No energy usage data available.</p>
//         )}
//       </div>

//       <div style={{ marginBottom: "20px" }}>
//         <h2>Saved Recommendations</h2>
//         {recommendations.length > 0 ? (
//           <ul>
//             {recommendations.map((rec, index) => (
//               <li key={index}>
//                 {rec.recommendation} - Potential Savings: {rec.potential_savings} kWh
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No saved recommendations.</p>
//         )}
//         <button onClick={saveEnergyRecommendations} style={{ padding: "10px" }}>
//           Save Recommendations
//         </button>
//       </div>
//     </div>
//   );
// }

// // export default App;
// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Actor, HttpAgent } from '@dfinity/agent';
// import { idlFactory } from './declarations/VoltEdge_backend/VoltEdge_backend'; // Replace with your actual import

// const canisterId = "<CANISTER_ID>"; // Replace with your canister ID
// const agent = new HttpAgent({ host: "https://ic0.app" });
// const backendActor = Actor.createActor(idlFactory, { agent, canisterId });

// function Dashboard() {
//   const [energyUsage, setEnergyUsage] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchEnergyUsage();
//     fetchRecommendations();
//   }, []);

//   const fetchEnergyUsage = async () => {
//     setLoading(true);
//     try {
//       const data = await backendActor.analyze_user_energy();
//       setEnergyUsage(data);
//     } catch (error) {
//       console.error("Error fetching energy usage:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchRecommendations = async () => {
//     setLoading(true);
//     try {
//       const data = await backendActor.get_recommendations();
//       setRecommendations(data);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatChartData = () => {
//     const timestamps = energyUsage.map((usage) =>
//       new Date(usage.timestamp / 1e6).toLocaleDateString()
//     );
//     const consumption = energyUsage.map((usage) => usage.consumption_kwh);

//     return {
//       labels: timestamps,
//       datasets: [
//         {
//           label: "Energy Consumption (kWh)",
//           data: consumption,
//           borderColor: "rgba(75, 192, 192, 1)",
//           backgroundColor: "rgba(75, 192, 192, 0.2)",
//           borderWidth: 2,
//         },
//       ],
//     };
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>VoltEdge Dashboard</h1>
//       {loading && <p>Loading...</p>}

//       <div style={{ marginBottom: "20px" }}>
//         <h2>Energy Usage Overview</h2>
//         {energyUsage.length > 0 ? (
//           <Line
//             data={formatChartData()}
//             options={{
//               responsive: true,
//               plugins: {
//                 legend: { display: true },
//               },
//             }}
//           />
//         ) : (
//           <p>No energy usage data available.</p>
//         )}
//       </div>

//       <div style={{ marginBottom: "20px" }}>
//         <h2>Energy Efficiency Insights</h2>
//         {recommendations.length > 0 ? (
//           <ul>
//             {recommendations.map((rec, index) => (
//               <li key={index}>
//                 {rec.recommendation} - Potential Savings: {rec.potential_savings} kWh
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No recommendations available.</p>
//         )}
//       </div>

//       <div style={{ marginBottom: "20px" }}>
//         <h2>Download Report</h2>
//         <button
//           onClick={() => {
//             const csvData = energyUsage.map(
//               (usage) =>
//                 ${new Date(usage.timestamp / 1e6).toLocaleString()},${usage.consumption_kwh}
//             );
//             const blob = new Blob([Date,Consumption (kWh)\n${csvData.join("\n")}], {
//               type: "text/csv",
//             });
//             const url = URL.createObjectURL(blob);
//             const link = document.createElement("a");
//             link.href = url;
//             link.download = "energy_report.csv";
//             link.click();
//           }}
//           style={{ padding: "10px" }}
//         >
//           Download CSV
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Dashboard;

// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// // import { Actor, HttpAgent } from '@dfinity/agent';
// // import { idlFactory } from './declarations/VoltEdge_backend/VoltEdge_backend'; // Replace with your actual import

// // const canisterId = "<CANISTER_ID>"; // Replace with your canister ID
// // const agent = new HttpAgent({ host: "https://ic0.app" });
// // const backendActor = Actor.createActor(idlFactory, { agent, canisterId });

// function Dashboard() {
//   const [energyUsage, setEnergyUsage] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetchEnergyUsage();
//     fetchRecommendations();
//   }, []);

//   const fetchEnergyUsage = async () => {
//     setLoading(true);
//     try {
//       const data = await backendActor.analyze_user_energy();
//       setEnergyUsage(data);
//     } catch (error) {
//       console.error("Error fetching energy usage:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchRecommendations = async () => {
//     setLoading(true);
//     try {
//       const data = await backendActor.get_recommendations();
//       setRecommendations(data);
//     } catch (error) {
//       console.error("Error fetching recommendations:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const formatChartData = () => {
//     const timestamps = energyUsage.map((usage) =>
//       new Date(usage.timestamp / 1e6).toLocaleDateString()
//     );
//     const consumption = energyUsage.map((usage) => usage.consumption_kwh);

//     return {
//       labels: timestamps,
//       datasets: [
//         {
//           label: "Energy Consumption (kWh)",
//           data: consumption,
//           borderColor: "rgba(75, 192, 192, 1)",
//           backgroundColor: "rgba(75, 192, 192, 0.2)",
//           borderWidth: 2,
//         },
//       ],
//     };
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>VoltEdge Dashboard</h1>
//       {loading && <p>Loading...</p>}

//       <div style={{ marginBottom: "20px" }}>
//         <h2>Energy Usage Overview</h2>
//         {energyUsage.length > 0 ? (
//           <Line
//             data={formatChartData()}
//             options={{
//               responsive: true,
//               plugins: {
//                 legend: { display: true },
//               },
//             }}
//           />
//         ) : (
//           <p>No energy usage data available.</p>
//         )}
//       </div>

//       <div style={{ marginBottom: "20px" }}>
//         <h2>Energy Efficiency Insights</h2>
//         {recommendations.length > 0 ? (
//           <ul>
//             {recommendations.map((rec, index) => (
//               <li key={index}>
//                 {rec.recommendation} - Potential Savings: {rec.potential_savings} kWh
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No recommendations available.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;


// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import './Dashboard.css';  // Import the new CSS file for dashboard-specific styles

// // Register necessary components for Chart.js
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// function Dashboard() {
//   const [energyUsage, setEnergyUsage] = useState([]);
//   const [recommendations, setRecommendations] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);  // Dark mode state
//   const [tokens, setTokens] = useState(0);  // New state to store user tokens

//   useEffect(() => {
//     // Toggle dark mode based on local storage or default value
//     const savedMode = localStorage.getItem("darkMode");
//     if (savedMode) setDarkMode(JSON.parse(savedMode));
//     document.body.classList.toggle("dark-mode", darkMode);

//     // Simulate fetching energy usage and recommendations with dummy data
//     fetchEnergyUsage();
//     fetchRecommendations();
//   }, [darkMode]);

//   const fetchEnergyUsage = async () => {
//     setLoading(true);
//     // Simulating API response with dummy data
//     const dummyData = [
//       { timestamp: 1634179200000000, consumption_kwh: 5, surplus_kwh: 2 },
//       { timestamp: 1634265600000000, consumption_kwh: 8, surplus_kwh: 1 },
//       { timestamp: 1634352000000000, consumption_kwh: 7, surplus_kwh: 3 },
//       { timestamp: 1634438400000000, consumption_kwh: 6, surplus_kwh: 0 },
//       { timestamp: 1634524800000000, consumption_kwh: 9, surplus_kwh: 4 },
//     ];
//     setEnergyUsage(dummyData);
//     setLoading(false);
//     calculateTokens(dummyData);  // Calculate tokens based on energy usage and surplus
//   };

//   const fetchRecommendations = async () => {
//     setLoading(true);
//     // Simulating API response with dummy recommendations
//     const dummyRecommendations = [
//       { recommendation: 'Reduce usage during peak hours', potential_savings: 3 },
//       { recommendation: 'Use energy-efficient appliances', potential_savings: 5 },
//       { recommendation: 'Optimize HVAC settings', potential_savings: 2 },
//     ];
//     setRecommendations(dummyRecommendations);
//     setLoading(false);
//   };

//   const formatChartData = () => {
//     const timestamps = energyUsage.map((usage) =>
//       new Date(usage.timestamp).toLocaleDateString()
//     );
//     const consumption = energyUsage.map((usage) => usage.consumption_kwh);

//     return {
//       labels: timestamps,
//       datasets: [
//         {
//           label: "Energy Consumption (kWh)",
//           data: consumption,
//           borderColor: "rgba(75, 192, 192, 1)",
//           backgroundColor: "rgba(75, 192, 192, 0.2)",
//           borderWidth: 2,
//         },
//       ],
//     };
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     localStorage.setItem("darkMode", JSON.stringify(!darkMode));
//   };

//   // Calculate summary stats for energy usage
//   const calculateSummary = () => {
//     if (energyUsage.length === 0) return { total: 0, average: 0 };
//     const total = energyUsage.reduce((acc, usage) => acc + usage.consumption_kwh, 0);
//     const average = total / energyUsage.length;
//     return { total, average };
//   };

//   // Calculate tokens based on energy usage and surplus energy sold to the grid
//   const calculateTokens = (energyData) => {
//     let tokens = 0;
//     energyData.forEach((usage) => {
//       // Earn tokens for energy efficiency: Less consumption means more tokens
//       if (usage.consumption_kwh <= 7) {  // Assuming consuming <= 7 kWh/day is energy-efficient
//         tokens += 2;  // Award 2 tokens for energy-efficient behavior
//       }

//       // Earn tokens for surplus energy sold to the grid (P2P model)
//       tokens += usage.surplus_kwh;  // Award 1 token per surplus kWh sold
//     });
//     setTokens(tokens);
//   };

//   const { total, average } = calculateSummary();

//   return (
//     <div className={`dashboard-container ${darkMode ? "dark-mode" : ""}`}>
//       <div className="dashboard-header">
//         <h1>VoltEdge Dashboard</h1>
//         <button className="btn-dark-mode" onClick={toggleDarkMode}>
//           Toggle Dark Mode
//         </button>
//       </div>

//       {loading && <p>Loading...</p>}

//       {/* Energy Usage Overview Section */}
//       <div className="energy-usage-section">
//         <h2>Energy Usage Overview</h2>
//         <div className="energy-summary">
//           <div className="card-column">
//             <div className="summary-card">
//               <h3>Total Consumption</h3>
//               <p>{total} kWh</p>
//             </div>
//             <div className="summary-card">
//               <h3>Average Daily Consumption</h3>
//               <p>{average.toFixed(2)} kWh</p>
//             </div>
//           </div>

//           <div className="card-column">
//             <div className="summary-card">
//               <h3>Tokens Earned</h3>
//               <p>{tokens} Tokens</p>
//             </div>
//           </div>
//         </div>
//         {energyUsage.length > 0 ? (
//           <div className="chart-container">
//             <Line
//               data={formatChartData()}
//               options={{
//                 responsive: true,
//                 plugins: {
//                   legend: { display: true },
//                 },
//               }}
//             />
//           </div>
//         ) : (
//           <p>No energy usage data available.</p>
//         )}
//       </div>

//       {/* Recommendations Section */}
//       {/* <div className="recommendations-section">
//         <h2>Energy Efficiency Insights</h2>
//         {recommendations.length > 0 ? (
//           <ul className="recommendations-list">
//             {recommendations.map((rec, index) => (
//               <li key={index} className="recommendation-card">
//                 {rec.recommendation} - Potential Savings: {rec.potential_savings} kWh
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No recommendations available.</p>
//         )}
//       </div> */}
//       <div className="recommendations-section">
//   <h2>Energy Efficiency Insights</h2>
//   {recommendations.length > 0 ? (
//     <div className="recommendation-card-container">
//       <ul className="recommendations-list">
//         {recommendations.map((rec, index) => (
//           <li key={index} className="recommendation-card">
//             {rec.recommendation} - Potential Savings: {rec.potential_savings} kWh
//           </li>
//         ))}
//       </ul>
//     </div>
//   ) : (
//     <p>No recommendations available.</p>
//   )}
// </div>

//     </div>
//   );
// }

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar chart from chartjs
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

// Register necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const [energyUsage, setEnergyUsage] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false); 
  const [tokens, setTokens] = useState(0);

  // Calculate summary stats for energy usage
  const calculateSummary = () => {
    if (energyUsage.length === 0) return { total: 0, average: 0 };
    const total = energyUsage.reduce((acc, usage) => acc + usage.consumption_kwh, 0);
    const average = total / energyUsage.length;
    return { total, average };
  };

  useEffect(() => {
    // Toggle dark mode based on local storage or default value
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) setDarkMode(JSON.parse(savedMode));
    document.body.classList.toggle("dark-mode", darkMode);

    fetchEnergyUsage();
    fetchRecommendations();
  }, [darkMode]);

  const fetchEnergyUsage = async () => {
    setLoading(true);
    const dummyData = [
      { timestamp: 1634179200000000, consumption_kwh: 5, surplus_kwh: 2, production_kwh: 3 },
      { timestamp: 1634265600000000, consumption_kwh: 8, surplus_kwh: 1, production_kwh: 3 },
      { timestamp: 1634352000000000, consumption_kwh: 7, surplus_kwh: 3, production_kwh: 4 },
      { timestamp: 1634438400000000, consumption_kwh: 6, surplus_kwh: 0, production_kwh: 6 },
      { timestamp: 1634524800000000, consumption_kwh: 9, surplus_kwh: 4, production_kwh: 5 },
    ];
    setEnergyUsage(dummyData);
    setLoading(false);
    calculateTokens(dummyData);
  };

  const fetchRecommendations = async () => {
    setLoading(true);
    const dummyRecommendations = [
      { recommendation: 'Reduce usage during peak hours', potential_savings: 3 },
      { recommendation: 'Use energy-efficient appliances', potential_savings: 5 },
      { recommendation: 'Optimize HVAC settings', potential_savings: 2 },
    ];
    setRecommendations(dummyRecommendations);
    setLoading(false);
  };

  const formatBarChartData = () => {
    const timestamps = energyUsage.map((usage) =>
      new Date(usage.timestamp).toLocaleDateString()
    );
    const consumption = energyUsage.map((usage) => usage.consumption_kwh);
    const production = energyUsage.map((usage) => usage.production_kwh);
    const surplus = energyUsage.map((usage) => usage.surplus_kwh);

    return {
      labels: timestamps,
      datasets: [
        {
          label: "Energy Consumption (kWh)",
          data: consumption,
          backgroundColor: "rgba(75, 192, 192, 0.7)",
        },
        {
          label: "Energy Production (kWh)",
          data: production,
          backgroundColor: "rgba(255, 165, 0, 0.7)",
        },
        {
          label: "Energy Sales (kWh)",
          data: surplus,
          backgroundColor: "rgba(138, 43, 226, 0.7)",
        },
      ],
    };
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  const calculateTokens = (energyData) => {
    let tokens = 0;
    energyData.forEach((usage) => {
      if (usage.consumption_kwh <= 7) { 
        tokens += 2; 
      }
      tokens += usage.surplus_kwh; 
    });
    setTokens(tokens);
  };

  const { total, average } = calculateSummary();

  return (
    <div className={`dashboard-container ${darkMode ? "dark-mode" : ""}`}>
      <div className="dashboard-header">
        <h1>Energy Dashboard</h1>
        <button onClick={toggleDarkMode} className="btn-dark-mode">
          Toggle Dark Mode
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {/* Energy Usage Overview Section */}
      <div className="energy-usage-section">
        <h2>Energy Usage Overview</h2>
        <div className="energy-summary">
          <div className="card-column">
            <div className="summary-card">
              <h3>Total Consumption</h3>
              <p>{total} kWh</p>
            </div>
            <div className="summary-card">
              <h3>Average Daily Consumption</h3>
              <p>{average.toFixed(2)} kWh</p>
            </div>
          </div>

          <div className="card-column">
            <div className="summary-card">
              <h3>Tokens Earned</h3>
              <p>{tokens} Tokens</p>
            </div>
          </div>
        </div>

        <div className="overview-container">
          {/* Stacked Bar Chart */}
          <div className="chart-container">
            {energyUsage.length > 0 ? (
              <Bar
                data={formatBarChartData()}
                options={{
                  responsive: true,
                  plugins: {
                    legend: { display: true },
                  },
                  scales: {
                    x: { stacked: true },
                    y: { stacked: true },
                  },
                }}
              />
            ) : (
              <p>No energy data available.</p>
            )}
          </div>

          {/* Energy Consumption, Production, and Sales Explanation */}
          <div className="description-container">
            <h3>How to Read the Chart:</h3>
            <p><strong>Energy Consumption (kWh)</strong>: This represents the total energy consumed by your home or business from the grid. It is depicted by the light blue bars. A higher consumption indicates more energy usage.</p>
            <p><strong>Energy Production (kWh)</strong>: This shows the amount of energy you have generated, typically from solar panels or other renewable sources. The orange bars represent the total energy produced. The more you generate, the less you need to consume from the grid.</p>
            <p><strong>Energy Sales (kWh)</strong>: This is the surplus energy that you have sold back to the grid or to other users. The purple bars represent this excess energy, which can earn you tokens or provide savings. It is a positive way to contribute to the grid while reducing your own energy costs.</p>
            <p><strong>Goal:</strong> The aim is to reduce energy consumption from the grid, increase energy production through renewable sources, and maximize energy sales to contribute back to the community or earn benefits.</p>
          </div>
        </div>

        {/* Energy Efficiency Insights */}
        <div className="recommendations-container">
          <h2>Energy Efficiency Insights</h2>
          {recommendations.length > 0 ? (
            <ul className="recommendations-list">
              {recommendations.map((rec, index) => (
                <li key={index} className="recommendation-card">
                  {rec.recommendation} - Potential Savings: {rec.potential_savings} kWh
                </li>
              ))}
            </ul>
          ) : (
            <p>No recommendations available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
