import React, { useState } from 'react';
import './Marketplace.css';

const recordTransactionOnBlockchain = (seller, buyer, credits) => {
  console.log(`Transaction: ${seller} sold ${credits} credits to ${buyer}.`);
};

const initialCredits = [
  { id: 1, seller: 'Green Corp', amount: 10, price: 100 },
  { id: 2, seller: 'Eco Solutions', amount: 15, price: 150 },
  { id: 3, seller: 'Carbon Clean', amount: 20, price: 200 },
];

const Marketplace = () => {
  const [credits, setCredits] = useState(initialCredits);
  const [buyer, setBuyer] = useState('');

  const handleBuy = (creditId) => {
    const credit = credits.find(c => c.id === creditId);
    if (credit && buyer) {
      recordTransactionOnBlockchain(credit.seller, buyer, credit.amount);
      setCredits(credits.filter(c => c.id !== creditId));
      alert(`You bought ${credit.amount} credits from ${credit.seller}`);
    } else {
      alert('Please enter your name to buy credits.');
    }
  };

  return (
    <div className="marketplace">
      <h1>Carbon Credit Marketplace</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={buyer}
        onChange={(e) => setBuyer(e.target.value)}
        className="buyer-input"
      />
      <div className="credits-list">
        {credits.map(credit => (
          <div key={credit.id} className="credit-card">
            <h2>{credit.seller}</h2>
            <p>Amount: {credit.amount} credits</p>
            <p>Price: ${credit.price}</p>
            <button onClick={() => handleBuy(credit.id)}>Buy Credits</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
