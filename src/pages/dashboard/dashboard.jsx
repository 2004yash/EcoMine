import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Import your Firebase configuration
import './dashboard.css';

const Dashboard = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const auth = getAuth();
    const fetchData = async (uid) => {
      try {
        // Assuming you have a "users" collection in Firestore
        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setCompanyName(userData.companyName || '');
          setEmail(userData.email || '');
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Get the current user and fetch data if they are logged in
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchData(user.uid);
      } else {
        // Handle unauthenticated user
        console.log('No user is logged in');
      }
    });
  }, []);

  return (
    <div>
      <header className="dashboard-header">
        <h1>Carbon Footprint Dashboard</h1>
      </header>
      <div className="input-container">
        <div className="input-box">Company Name: {companyName}</div>
        <div className="input-box">Email ID: {email}</div>
      </div>
      <div className="dashboard-container">
        <div className="box box1">

          <div className='h1'><h1>Monthly Carbon Emission</h1></div>
          <p1>Your monthly <br />carbon emission is</p1>
          <div className='bo'>
            <div className='b1'><h>xyz tons</h></div>
            <span>CO<sub>2</sub> </span>

          </div>
        </div>
        <div className="box box2">
          <div className='h2'><h1>Money Saved</h1></div>
          <p1>Cost Savings Resulting <br />from Reduced Carbon <br />Emissions</p1>
          <div className='bo2'>
            <div className='b2'><h>xyz</h></div>
            <span className='s1'>$</span>
            <span className='s2'>$</span>
          </div>
        </div>
        <div className="box box3">
          <div className='h3'><h1>Reduce Carbon Footprint</h1></div>
          <span>Detailed Strategies<br />for Cutting your<br />Carbon Emissions<br />and Enhancing Eco-<br />Friendly Practices </span>

          <div className='bo3'> <div className='b3'><h>Click here</h></div>
            <div className='imgg'  > <img src={`${process.env.PUBLIC_URL}/shoes.png`} alt="shoe" /></div>
          </div>
        </div>

        <div className="box box4">
          <div className='h4'><h1>Carbon Credits</h1></div>
          <span>Guidance and <br />Support from <br />Leading<br /> Mentors</span>
          <div className='bo3'> <div className='b3'><h>Click here</h></div>
            <div className='imgg'  > <img src={`${process.env.PUBLIC_URL}/cc.png`} alt="cc" /></div>
          </div>

        </div>

        <div className="box box5">
          <div className='h5'><h1>Graph of Carbon Emission</h1></div>
          <div className='imggg'>
            <img src={`${process.env.PUBLIC_URL}/graph.png`} alt="graph" />
          </div>
        </div>
        <div className="box box6">
          <div className='h6'><h1>Mentor Connect</h1></div>
          <span>Guidance and <br />Support from <br />Leading <br />Mentors</span>
          <div className='bo6'> <div className='b6'><h>Connect</h></div>
            <div className='imgg'  > <img src={`${process.env.PUBLIC_URL}/connect.jpg`} alt="connect" /></div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;