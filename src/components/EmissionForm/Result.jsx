import React, { useEffect, useState } from "react";
import { MdOutlineVerified } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import Footer from "../footer/footer";
import { giveRecommendation } from "../../CarbonCalculator";
import "./Result.css";

function Result() {
  const location = useLocation();
  const { result } = location.state || {}; 
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (result) {
      const recs = giveRecommendation(result);
      setRecommendations(recs);
      console.log(recs);
    }
  }, [result]);

  return (
    <>
      <div className="result-container">
        {/* Left Section: Results and Graph */}
        <div className="left-section">
          <div className="congratulations-text">
            <h1>Congratulations!</h1>
            <p>You have completed all the calculator sections.</p>
          </div>

          <div className="total-emission-box">
            <h1>Your Current Total</h1>
            <p>{result ? `${result} tons` : "Not available"}</p>
          </div>

          <button type="button" className="view-graph-btn">
            View Graph
          </button>
        </div>

        {/* Right Section: Recommendations */}
        <div className="right-section">
          <div className="recommendations">
            <h2>
              <MdOutlineVerified
                style={{ color: "white", alignItems: "center", fontSize: "80%" }}
              />
              Recommendations to Reduce Your Carbon Footprint:
            </h2>

            <ul>
              {recommendations.length > 0 ? (
                recommendations.map((rec, index) => (
                  <li key={index}>{rec}</li>
                ))
              ) : (
                <p>No recommendations available.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Result;
