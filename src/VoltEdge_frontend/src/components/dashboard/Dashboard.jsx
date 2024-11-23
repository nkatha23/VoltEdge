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

import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Actor, HttpAgent } from '@dfinity/agent'; 
import { idlFactory } from './declarations/VoltEdge_backend/VoltEdge_backend'; // Import your backend IDL

const canisterId = "<CANISTER_ID>";
const agent = new HttpAgent({ host: "https://ic0.app" });
const backendActor = Actor.createActor(idlFactory, { agent, canisterId });

function Dashboard() {
  const [energyUsage, setEnergyUsage] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch energy data and recommendations
  useEffect(() => {
    fetchEnergyUsage();
    fetchRecommendations();
  }, []);

  const fetchEnergyUsage = async () => {
    setLoading(true);
    try {
      const data = await backendActor.analyze_user_energy(); // Fetch data from backend
      setEnergyUsage(data);
    } catch (error) {
      console.error("Error fetching energy usage:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecommendations = async () => {
    setLoading(true);
    try {
      const data = await backendActor.get_recommendations(); // Fetch recommendations from backend
      setRecommendations(data);
    } catch (error) {
      console.error("Error fetching recommendations:", error);
    } finally {
      setLoading(false);
    }
  };

  // Format chart data for visualization
  const formatChartData = () => {
    const timestamps = energyUsage.map((usage) =>
      new Date(usage.timestamp / 1e6).toLocaleDateString()
    );
    const consumption = energyUsage.map((usage) => usage.consumption_kwh);

    return {
      labels: timestamps,
      datasets: [
        {
          label: "Energy Consumption (kWh)",
          data: consumption,
          borderColor: "rgba(75, 192, 192, 1)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderWidth: 2,
        },
      ],
    };
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>VoltEdge Dashboard</h1>
      {loading && <p>Loading...</p>}

      {/* Energy Usage Overview Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Energy Usage Overview</h2>
        {energyUsage.length > 0 ? (
          <Line
            data={formatChartData()}
            options={{
              responsive: true,
              plugins: {
                legend: { display: true },
              },
            }}
          />
        ) : (
          <p>No energy usage data available.</p>
        )}
      </div>

      {/* Energy Efficiency Insights Section */}
      <div style={{ marginBottom: "20px" }}>
        <h2>Energy Efficiency Insights</h2>
        {recommendations.length > 0 ? (
          <ul>
            {recommendations.map((rec, index) => (
              <li key={index}>
                {rec.recommendation} - Potential Savings: {rec.potential_savings} kWh
              </li>
            ))}
          </ul>
        ) : (
          <p>No recommendations available.</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
