import React, { useEffect, useState } from "react";
import { RiCheckDoubleFill } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { useLocation } from 'react-router-dom';  // Keep this from your branch
import Footer from "../footer/footer";  // Keep this from main branch
import { giveRecommendation} from "../../CarbonCalculator"; // Import the recommendation function
import "./Result.css";

function Result() {
  const location = useLocation();
  const { result } = location.state || {}; // Access the result from state
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    if (result) {
      // Call the giveRecommendation function and store the result in state
      const recs = giveRecommendation(result);
      setRecommendations(recs);
      console.log(recs);
    }
  }, [result]);

  return (
    <>
      <div className="resultt">
        <div className="resultcontainer">
          <div className="left">
            <div className="textt">
              <h1>Congratulations!</h1>
              <p>You have completed all the calculator sections.</p>
            </div>
            <div className="totall">
              <h1>Your current total</h1>
              <p>{result ? result  : "Not available"} tons</p> {/* Display the result */}
            </div>

            <div>
              <button type="button" className="view-graph-btn">View Graph</button>
            </div>
          </div>
<div className="right">
          {/* Display the Recommendations */}
          <div className="recommendations">
            {/* <h2>Recommendations to Reduce Your Carbon Footprint:</h2> */}
            <h2>
                <MdOutlineVerified
                  style={{
                    color: "white",
                    alignItems: "center",
                    fontSize: "80%",
                  }}
                />
               Recommendations to Reduce Your Carbon Footprint:
              </h2>

            <ul>
              {recommendations.length > 0 ? (
                recommendations.map((rec, index) => (
                  <li  key={index}>{rec}</li>
                ))
              ) : (
                <p>No recommendations available.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      </div>
      <Footer />  {/* Include the Footer component */}
    </>
  );
}

export default Result;
