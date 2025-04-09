import "./styles.css";
import { React, useState } from "react";
export default function App() {
  const [flag, setFlag] = useState(0);
  const handleShowOffer = () => {
    setFlag(1);
  };
  const backToShowOffer = () => {
    setFlag(0);
  };
  const handleAccept = () => {
    setFlag(2);
  };
  return (
    <div className="App">
      <div
        sx={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
          flexDirection: "center",
        }}
      >
        {!flag ? (
          <button onClick={handleShowOffer}> Show Offer </button>
        ) : flag === 1 ? (
          <div className="backDrop" onClick={backToShowOffer}>
            <div className="centreContent" onClick={(e) => e.stopPropagation()}>
              <button onClick={backToShowOffer}>Close</button>
              <br />
              <br />
              <br />
              <div>Click the Button Below to accept our amazing offer</div>
              <br />
              <br />
              <button onClick={handleAccept}>Accept Offer</button>
            </div>
          </div>
        ) : flag === 2 ? (
          <div>Offer Accepted</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
