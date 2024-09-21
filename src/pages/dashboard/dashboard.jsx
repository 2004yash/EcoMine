import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import './dashboard.css';
import { fetchAndSumCarbonEmissionHistory } from '../../CarbonCalculator';
import { useNavigate, useLocation } from 'react-router-dom';
import ExpenseChart from '../../components/Graph/ExpenseChart';
import Footer from '../../components/footer/footer'; // Ensure the path is correct

const Dashboard = () => {
  const [uniqueCompanyName, setUniqueCompanyName] = useState('');
  const [uniqueEmail, setUniqueEmail] = useState('');
  const [totalCarbonEmission, setTotalCarbonEmission] = useState(0);
  const [totalMoneySaved, setTotalMoneySaved] = useState(0);
  const [totalCarbonCreditsEarned, setTotalCarbonCreditsEarned] = useState(0);
  const [loading, setLoading] = useState(true);
  const [uid, setUid] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const fallbackUid = location.state?.uid;

  useEffect(() => {
    const auth = getAuth();
    const fetchUniqueData = async (userUid) => {
      try {
        const docRef = doc(db, 'users', userUid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setUniqueCompanyName(userData.companyName || '');
          setUniqueEmail(userData.email || '');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    onAuthStateChanged(auth, (user) => {
      const currentUid = user ? user.uid : fallbackUid;
      if (currentUid) {
        setUid(currentUid);
        fetchUniqueData(currentUid);
      }
    });

    const fetchData = async () => {
      try {
        const { totalCarbonEmission, totalMoneySaved, totalCarbonCreditsEarned } =
          await fetchAndSumCarbonEmissionHistory();
        setTotalCarbonEmission(totalCarbonEmission || 0);
        setTotalMoneySaved(totalMoneySaved || 0);
        setTotalCarbonCreditsEarned(totalCarbonCreditsEarned || 0);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [fallbackUid]);

  return (
    <div className="IamYash">
      <header className="unique-dashboard-header">
        <h1>Carbon Footprint Dashboard</h1>
      </header>
      <div className="unique-input-container">
        <div className="unique-input-box company-name">Company Name: {uniqueCompanyName}</div>
        <div className="unique-input-box email">Email ID: {uniqueEmail}</div>
      </div>
      <div className="unique-dashboard-container">
        <div className="unique-box unique-box1">
          <div className="unique-h1">Monthly Carbon Emission</div>
          <p>{totalCarbonEmission} tons of CO<sub>2</sub></p>
        </div>
        <div className="unique-box unique-box2">
          <div className="unique-h2">Money Saved</div>
          <p>${totalMoneySaved} saved</p>
        </div>
        <div className="unique-box unique-box3">
          <div className="unique-h3">Reduce Carbon Footprint</div>
          <div className="unique-b3">Click here</div>
        </div>
        <div className="unique-box unique-box4">
          <div className="unique-h4">Marketplace</div>
          <p>{totalCarbonCreditsEarned} carbon credits</p>
        </div>
        <div className="unique-box unique-box5">
          <div className="unique-h5">Graph of Carbon Emission</div>
          <ExpenseChart />
        </div>
        <div className="unique-box unique-box6">
          <div className="unique-h6">Mentor Connect</div>
          <div className="unique-b6">Connect</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
