// import React, { useEffect, useState } from "react";
// import { Nav } from "react-bootstrap";
// import { Link, Route, Routes } from "react-router-dom";
// import VotingPage from "./VotingPage";
// import { fetchNonClosedPolls } from "../services/PollService";

// function Polls() {
 
//   const [polls, setPolls] = useState([]);
  
//   const getNonClosedPolls = async () => {
//     try {
//       const response = await fetchNonClosedPolls();
//       console.log(response.data);
//       setPolls(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getNonClosedPolls();
//   }, []);

//   return (
//     <div className="container my-4">
//       <div className="row">
//         {polls.map((poll) => (
//           <div className="col-md-4 mb-4" key={poll.pollId}>
//             <div className="card d-flex flex-column" style={{ height: '100%' }}>
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{poll.title}</h5>
//                 <p className="card-text flex-grow-1">{poll.description}</p>
//                 <Nav className="me-auto">
//                   <Nav.Link className="btn btn-primary mt-auto" as={Link} to={`/polls/${poll.pollId}`}>View Poll</Nav.Link>
//                 </Nav>
//                 {/* <a href="/poll/poll-id" className="btn btn-primary mt-auto">
//                   View Poll
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         ))}
//         {/* <PollRouter /> */}
//       </div>
//     </div>
//   );
// }

// export default Polls;

// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import { fetchNonClosedPolls } from "../services/PollService";
// import { fetchCandidatesByPoll } from "../services/CandidateServices";

// function Polls() {
//   const [polls, setPolls] = useState([]);
//   const [candidates, setCandidates] = useState([]);

//   // Fetch available polls
//   const getNonClosedPolls = async () => {
//     try {
//       const response = await fetchNonClosedPolls();
//       console.log("Polls Data:", response.data);
//       setPolls(response.data);
//     } catch (error) {
//       console.log("Error fetching polls:", error);
//     }
//   };

//   // Fetch candidates when clicking "View Poll"
//   const handleViewPoll = async (pollId) => {
//     try {
//       console.log(`Fetching candidates for pollId: ${pollId}`);
//       const response = await fetchCandidatesByPoll(pollId);
//       console.log("Candidates:", response.data);
//       setCandidates(response.data);
//       alert(`Candidates fetched successfully for pollId: ${pollId}`);
//     } catch (error) {
//       console.error("Error fetching candidates:", error);
//       alert("Failed to fetch candidates.");
//     }
//   };

//   useEffect(() => {
//     getNonClosedPolls();
//   }, []);

//   return (
//     <div className="container my-4">
//       <div className="row">
//         {polls.map((poll) => (
//           <div className="col-md-4 mb-4" key={poll.pollId}>
//             <div className="card d-flex flex-column" style={{ height: "100%" }}>
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{poll.title}</h5>
//                 <p className="card-text flex-grow-1">{poll.description}</p>
               
//                 <Button className="btn btn-primary mt-auto" onClick={() => handleViewPoll(poll.pollId)}>
//                   View Poll
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Polls;


// import React, { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";
// import { fetchNonClosedPolls } from "../services/PollService";
// import { fetchCandidatesByPoll } from "../services/CandidateServices";

// function Polls() {
//   const [polls, setPolls] = useState([]);
//   const [candidates, setCandidates] = useState([]);

//   // Fetch available polls
//   const getNonClosedPolls = async () => {
//     try {
//       const response = await fetchNonClosedPolls();
//       console.log("Polls Data:", response.data);
//       setPolls(response.data);
//     } catch (error) {
//       console.log("Error fetching polls:", error);
//     }
//   };

//   // Fetch candidates when clicking "View Poll"
//   const handleViewPoll = async (pollId) => {
//     try {
//       console.log(pollId);
//       console.log(`Fetching candidates for pollId: ${pollId}`);
//       const response = await fetchCandidatesByPoll(pollId);
//       console.log("Candidates:", response.data);
//       setCandidates(response.data);
//       alert(`Candidates fetched successfully for pollId: ${pollId}`);
//     } catch (error) {
//       console.error("Error fetching candidates:", error);
//       alert("Failed to fetch candidates.");
//     }
//   };

//   useEffect(() => {
//     getNonClosedPolls();
//   }, []);

//   return (
//     <div className="container my-4">
//       <div className="row">
//         {polls.map((poll) => (
//           <div className="col-md-4 mb-4" key={poll.pollId}>
//             <div className="card d-flex flex-column" style={{ height: "100%" }}>
//               <div className="card-body d-flex flex-column">
//                 <h5 className="card-title">{poll.title}</h5>
//                 <p className="card-text flex-grow-1">{poll.description}</p>
//                 <Button className="btn btn-primary mt-auto" onClick={() => handleViewPoll(poll.pollId)}>
//                   View Poll
//                 </Button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Polls;

import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import { fetchNonClosedPolls } from "../services/PollService";
import { fetchCandidatesByPoll } from "../services/CandidateServices";

function Polls() {
  const [polls, setPolls] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate(); // ✅ Initialize navigate

  // Fetch available polls
  const getNonClosedPolls = async () => {
    try {
      const response = await fetchNonClosedPolls();
      console.log("Polls Data:", response.data);
      setPolls(response.data);
    } catch (error) {
      console.log("Error fetching polls:", error);
    }
  };

  // Fetch candidates when clicking "View Poll" and navigate to Voting Page
  const handleViewPoll = async (pollId) => {
    try {
      console.log(`Fetching candidates for pollId: ${pollId}`);
      const response = await fetchCandidatesByPoll(pollId);
      console.log("Candidates:", response.data);
      setCandidates(response.data);
      alert(`Candidates fetched successfully for pollId: ${pollId}`);

      //  Navigate to Voting Page with pollId
      navigate(`/voting/${pollId}`);
    } catch (error) {
      console.error("Error fetching candidates:", error);
      alert("Failed to fetch candidates.");
    }
  };

  useEffect(() => {
    getNonClosedPolls();
  }, []);

  return (
    <div className="container my-4">
      <div className="row">
        {polls.map((poll) => (
          <div className="col-md-4 mb-4" key={poll.pollId}>
            <div className="card d-flex flex-column" style={{ height: "100%" }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{poll.title}</h5>
                <p className="card-text flex-grow-1">{poll.description}</p>
                <Button className="btn btn-primary mt-auto" onClick={() => handleViewPoll(poll.pollId)}>
                  View Poll
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Polls;

