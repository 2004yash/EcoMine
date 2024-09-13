import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase'; // Assuming firebase is configured

const Marketplace = () => {
  const [credits, setCredits] = useState([]);
  const [userCredits, setUserCredits] = useState(0);
  const [buyer, setBuyer] = useState('');
  const auth = getAuth();

  useEffect(() => {
    // Fetch available credits
    const fetchCredits = async () => {
      const creditsCollection = collection(db, 'credits');
      const creditSnapshot = await getDocs(creditsCollection);
      const creditsList = creditSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCredits(creditsList);
    };

    // Fetch current user data
    const fetchUserCredits = async () => {
      const user = auth.currentUser;
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const userSnapshot = await getDocs(userRef);
        const userData = userSnapshot.data();
        setUserCredits(userData.credits || 0);
      }
    };

    fetchCredits();
    fetchUserCredits();
  }, []);

  const handleBuy = async (creditId) => {
    const credit = credits.find(c => c.id === creditId);
    const user = auth.currentUser;
    if (credit && user) {
      // Assume you have a function `updateUserCredits` for this:
      await updateDoc(doc(db, 'users', user.uid), {
        credits: userCredits + credit.amount
      });
      // Remove credit from marketplace
      setCredits(credits.filter(c => c.id !== creditId));
      alert(`You bought ${credit.amount} credits`);
    }
  };

  return (
    <div>
      <h1>Marketplace</h1>
      {credits.map(credit => (
        <div key={credit.id}>
          <h2>{credit.seller}</h2>
          <p>{credit.amount} credits for ${credit.price}</p>
          <button onClick={() => handleBuy(credit.id)}>Buy</button>
        </div>
      ))}
      <p>Your Credits: {userCredits}</p>
    </div>
  );
};

export default Marketplace;
