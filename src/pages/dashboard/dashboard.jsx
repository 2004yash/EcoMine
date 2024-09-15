import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Import your Firebase configuration
import './dashboard.css';
import { getSummedValues,fetchAndSumCarbonEmissionHistory } from '../../CarbonCalculator';
// import dashboard from './dashboard.module.css';

const Dashboard = () => {
  const [uniqueCompanyName, setUniqueCompanyName] = useState('');
  const [uniqueEmail, setUniqueEmail] = useState('');
  const [totalCarbonEmission, setTotalCarbonEmission] = useState(0);
  const [totalMoneySaved, setTotalMoneySaved] = useState(0);
  const [totalCarbonCreditsEarned, setTotalCarbonCreditsEarned] = useState(0);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const fetchUniqueData = async (uid) => {
      try {
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUniqueCompanyName(userData.companyName || '');
          setUniqueEmail(userData.email || '');
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUniqueData(user.uid);
      } else {
        console.log('No user is logged in');
      }
    });
    const fetchData = async () => {
      try {
        // Fetch values using the provided function
        const { totalCarbonEmission, totalMoneySaved, totalCarbonCreditsEarned } =
        await fetchAndSumCarbonEmissionHistory();
        console.log("Carbon Emission:", totalCarbonEmission);
  console.log("Money Saved:", totalMoneySaved);
  console.log("Carbon Credits Earned:", totalCarbonCreditsEarned);
        // Check if result is valid before destructuring
        if (totalCarbonCreditsEarned!=null && totalCarbonEmission!=null && totalMoneySaved!=null) {
          // Set the fetched values into state variables
          setTotalCarbonEmission(totalCarbonEmission || 0);
          setTotalMoneySaved(totalMoneySaved || 0);
          setTotalCarbonCreditsEarned(totalCarbonCreditsEarned || 0);
        } else {
          throw new Error("Data fetch returned undefined");
        }
  
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);

  return (
    <div>
      <header className="unique-dashboard-header">
        <h1>Carbon Footprint Dashboard</h1>
      </header>
      <div className="unique-input-container">
        <div className="unique-input-box">Company Name: {uniqueCompanyName}</div>
        <div className="unique-input-box">Email ID: {uniqueEmail}</div>
      </div>
      <div className="unique-dashboard-container">
        <div className="unique-box unique-box1">
          <div className="unique-h1"><h1>Monthly Carbon Emission</h1></div>
          <p>Your monthly <br />carbon emission is</p>
          <div className="unique-bo">
            <div className="unique-b1"><h>{totalCarbonEmission} tons</h></div>
            <span>CO<sub>2</sub></span>
          </div>
        </div>
        <div className="unique-box unique-box2">
          <div className="unique-h2"><h1>Money Saved</h1></div>
          <p>Cost Savings Resulting <br />from Reduced Carbon <br />Emissions</p>
          <div className="unique-bo2">
            <div className="unique-b2"><h>{totalMoneySaved}</h></div>
            <span className="unique-s1">$</span>
            <span className="unique-s2">$</span>
          </div>
        </div>
        <div className="unique-box unique-box3">
          <div className="unique-h3"><h1>Reduce Carbon Footprint</h1></div>
          <span>Detailed Strategies<br />for Cutting your<br />Carbon Emissions<br />and Enhancing Eco-<br />Friendly Practices </span>
          <div className="unique-bo3">
            <div className="unique-b3"><h>Click here</h></div>
            <div className="unique-img"><img src={`${process.env.PUBLIC_URL}/shoes.png`} alt="shoe" /></div>
          </div>
        </div>
        <div className="unique-box unique-box4">
          <div className="unique-h4"><h1>Carbon Credits</h1></div>
          <span>Guidance and <br />Support from <br />Leading<br /> Mentors</span>
          <div className="unique-bo4">
            <div className="unique-b4"><h>{totalCarbonCreditsEarned}</h></div>
            <div className="unique-img"><img src={`${process.env.PUBLIC_URL}/cc.png`} alt="cc" /></div>
          </div>
        </div>
        <div className="unique-box unique-box5">
          <div className="unique-h5"><h1>Graph of Carbon Emission</h1></div>
          <div className="unique-img-graph">
            <img src={`${process.env.PUBLIC_URL}/graph.png`} alt="graph" />
          </div>
        </div>
        <div className="unique-box unique-box6">
          <div className="unique-h6"><h1>Mentor Connect</h1></div>
          <span>Guidance and <br />Support from <br />Leading <br />Mentors</span>
          <div className="unique-bo6">
            <div className="unique-b6"><h>Connect</h></div>
            <div className="unique-img"><img src={`${process.env.PUBLIC_URL}/connect.jpg`} alt="connect" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
