import React, { useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Firebase setup

const SellCredits = () => {
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const auth = getAuth();

  const handleSell = async () => {
    const user = auth.currentUser;
    if (user) {
      const seller = user.displayName || 'Unknown';
      const creditData = {
        seller,
        amount,
        price,
        userId: user.uid
      };

      // Add new credit for sale in Firebase
      await addDoc(collection(db, 'credits'), creditData);
      alert('Credits listed for sale.');
    }
  };

  return (
    <div>
      <h2>Sell Your Credits</h2>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSell}>Sell</button>
    </div>
  );
};

export default SellCredits;
