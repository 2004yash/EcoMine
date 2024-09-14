import React, { useState } from 'react';
import './Marketplace.css';

// Function to record the transaction on the blockchain
const recordTransactionOnBlockchain = (seller, buyer, credits) => {
  console.log(`Transaction: ${seller} sold ${credits} credits to ${buyer}.`);
};

// Initial list of credits available for sale
const initialCredits = [
  { id: 1, seller: 'Green Corp', amount: 10, price: 100 },
  { id: 2, seller: 'Eco Solutions', amount: 15, price: 150 },
  { id: 3, seller: 'Carbon Clean', amount: 20, price: 200 },
];

const Marketplace = () => {
  const [credits, setCredits] = useState(initialCredits); // State to manage available credits
  const [buyer, setBuyer] = useState(''); // State to store buyer's name

  // Function to handle the purchase of credits
  const handleBuy = (creditId) => {
    const credit = credits.find(c => c.id === creditId); // Find the selected credit
    if (credit && buyer) {
      recordTransactionOnBlockchain(credit.seller, buyer, credit.amount); // Log the transaction
      setCredits(credits.filter(c => c.id !== creditId)); // Remove the purchased credits from the list
      alert(`You bought ${credit.amount} credits from ${credit.seller}`); // Success alert
    } else {
      alert('Please enter your name to buy credits.'); // Error if buyer name is not provided
    }
  };

  return (
    <div className="marketplace">
      <h1>Carbon Credit Marketplace</h1>

      {/* Input for buyer to enter their name */}
      <input
        type="text"
        placeholder="Enter your name"
        value={buyer}
        onChange={(e) => setBuyer(e.target.value)}
        className="buyer-input"
      />

      {/* List of credits available for purchase */}
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
