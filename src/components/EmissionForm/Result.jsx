import { RiCheckDoubleFill } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import "./Result.css";

function Result() {
  const location = useLocation();
  const { result } = location.state || {}; // Access the result from state

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
              <p>{result ? result : "Not available"}</p> {/* Display the result */}
            </div>

            <div>
              <button type="button" className="view-graph-btn">View Graph</button>
            </div>
          </div>
          <div className="right">
            <div className="headcontainerr">
              <h1>
                <MdOutlineVerified
                  style={{
                    color: "black",
                    alignItems: "center",
                    fontSize: "75%",
                  }}
                />
                PREMIUM
              </h1>
            </div>
            <div className="contentcontainerr">
              <div className="Accessto">
                <h2>Access to</h2>
              </div>
              <div className="list">
                <ul>
                  <li>
                    <span>
                      <RiCheckDoubleFill
                        style={{
                          color: "#FFC700",
                          alignItems: "center",
                          fontSize: "94%",
                        }}
                      />
                      Mentor Connect
                    </span>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Repellat, quos!
                    </p>
                  </li>
                  <li>
                    <span>
                      <RiCheckDoubleFill
                        style={{
                          color: "#FFC700",
                          alignItems: "center",
                          fontSize: "94%",
                        }}
                      />
                      Mentor Connect
                    </span>{" "}
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, sequi?
                    </p>
                  </li>
                  <li>
                    <span>
                      <RiCheckDoubleFill
                        style={{
                          color: "#FFC700",
                          alignItems: "center",
                          fontSize: "94%",
                        }}
                      />
                      Mentor Connect
                    </span>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, sequi?
                    </p>
                  </li>
                  <li>
                    <span>
                      <RiCheckDoubleFill
                        style={{
                          color: "#FFC700",
                          alignItems: "center",
                          fontSize: "94%",
                        }}
                      />
                      Mentor Connect
                    </span>
                    <br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam, sequi?
                    </p>
                  </li>
                </ul>
                <button type="button" className="buybtnn">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Result;
