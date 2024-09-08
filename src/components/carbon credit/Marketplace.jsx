import React, { useState, useEffect } from 'react';
import './Marketplace.module.css';

// Simulated blockchain function for recording transactions
const recordTransactionOnBlockchain = (seller, buyer, credits) => {
  // For the sake of this example, we'll just log the transaction.
  console.log(`Transaction: ${seller} sold ${credits} credits to ${buyer}.`);
  // In a real-world scenario, this function would interact with a blockchain smart contract.
};

// Initial list of carbon credits
const initialCredits = [
  { id: 1, seller: 'Company A', amount: 10, price: 100 },
  { id: 2, seller: 'Company B', amount: 15, price: 150 },
  { id: 3, seller: 'Company C', amount: 20, price: 200 },
];

const Marketplace = () => {
  const [credits, setCredits] = useState(initialCredits);
  const [buyer, setBuyer] = useState('');

  useEffect(() => {
    // Fetch credits from an API or database in a real-world app
  }, []);

  const handleBuy = (creditId) => {
    const credit = credits.find(c => c.id === creditId);
    if (credit && buyer) {
      // Record the transaction on the blockchain
      recordTransactionOnBlockchain(credit.seller, buyer, credit.amount);

      // Remove the credit from the marketplace (as it's been bought)
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
