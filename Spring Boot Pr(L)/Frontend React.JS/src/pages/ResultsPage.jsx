// import React, { useEffect, useState } from "react";
// import { fetchAllPolls } from "../services/pollService";
// import axios from "axios";
// import { API_BASE_URL } from "../constants/ApiConstants";

// const ResultsPage = () => {
//   const [polls, setPolls] = useState([]);
//   const [results, setResults] = useState({});

//   useEffect(() => {
//     fetchAllPolls()
//       .then((response) => {
//         console.log("Polls Data:", response.data);  // Debugging line
//         setPolls(response.data);
//       })
//       .catch((error) => console.error("Error fetching polls:", error));
//   }, []);
  

//   const fetchResults = (pollId) => {
//     if (!pollId) {
//       console.error("Error: Poll ID is undefined!");
//       return;
//     }
//     axios
//       .get(`${API_BASE_URL}/votes/leader/${pollId}`)
//       .then((response) => {
//         setResults((prevResults) => ({ ...prevResults, [pollId]: response.data }));
//       })
//       .catch((error) => console.error("Error fetching results:", error));
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">Election Results</h2>
//       <div className="row">
//         {polls.map((poll) => (
//           <div key={poll.id || poll.pollId} className="col-md-4 mb-4">
//             <div className="card shadow-sm border-primary">
//               <div className="card-body">
//                 <h5 className="card-title">{poll.title}</h5>
//                 <p className="card-text">{poll.description}</p>
//                 <button
//                   className="btn btn-outline-primary"
//                   onClick={() => fetchResults(poll.id || poll.pollId)}
//                 >
//                   View Results
//                 </button>
//                 {results[poll.id || poll.pollId] && (
//                   <p className="mt-3"><strong>Leader is:</strong> {results[poll.id]}</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResultsPage;

import React, { useEffect, useState } from "react";
import { fetchAllPolls } from "../services/pollService";
import axios from "axios";
import { API_BASE_URL } from "../constants/ApiConstants";

const ResultsPage = () => {
  const [polls, setPolls] = useState([]);
  const [results, setResults] = useState({});

  useEffect(() => {
    fetchAllPolls()
      .then((response) => {
        console.log("Polls Data:", response.data); // Debugging line
        setPolls(response.data);
      })
      .catch((error) => console.error("Error fetching polls:", error));
  }, []);

  const fetchResults = (pollId) => {
    if (!pollId) {
      console.error("Error: Poll ID is undefined!");
      return;
    }
    axios
      .get(`${API_BASE_URL}/votes/leader/${pollId}`)
      .then((response) => {
        console.log(`Leader for poll ${pollId}:`, response.data); // Debugging line
        setResults((prevResults) => ({
          ...prevResults,
          [pollId]: response.data, // Store result using pollId correctly
        }));
      })
      .catch((error) => console.error("Error fetching results:", error));
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Election Results</h2>
      <div className="row">
        {polls.map((poll) => (
          <div key={poll.id || poll.pollId} className="col-md-4 mb-4">
            <div className="card shadow-sm border-primary">
              <div className="card-body">
                <h5 className="card-title">{poll.title}</h5>
                <p className="card-text">{poll.description}</p>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => fetchResults(poll.id || poll.pollId)}
                >
                  View Results
                </button>
                {results[poll.id || poll.pollId] && (
                  <p className="mt-3">
                    <strong>Leader is:</strong> {results[poll.id || poll.pollId]}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
