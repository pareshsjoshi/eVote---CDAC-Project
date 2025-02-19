// import React, { useState } from 'react';
// import '../stylesheets/VotingPage.css';
// import { useParams } from 'react-router-dom';

// const VotingPage = () => {
//     const { id } = useParams();
//     const [candidates, setCandidates] = useState([
//         { id: 1, name: 'Vikhe Ptil' },
//         { id: 2, name: 'Nilesh Lanke' },
//         { id: 3, name: 'Sangram Jagtap' },
//         { id: 4, name: 'Rajesh Yadav' },
//         { id: 5, name: 'Ankita Deshmukh' },
//         { id: 6, name: 'Shruti Patil' },
//         { id: 7, name: 'Amit Sharma' },
//         { id: 8, name: 'Priya Patil' }
//     ]);
    
//     const [userVoted, setUserVoted] = useState(false);
//     const [selectedCandidate, setSelectedCandidate] = useState(null);

//     // Handle vote submission
//     const handleVote = (candidateId) => {
//         if (userVoted) {
//             alert("You have already voted!");
//             return;
//         }

//         setSelectedCandidate(candidateId);
//         setUserVoted(true);
//     };

//     return (
//         <div className="election-voting-system">
//             <div className="poll-container mt-5">
//                 <h1 className="text-center mb-4">Election Voting</h1>

//                 {/* Voting Options */}
//                 <div className="candidate-list mb-4">
//                     <h3>Select a Candidate to Vote {id}</h3>
//                     {candidates.map((candidate) => (
//                         <div key={candidate.id} className="candidate-item mb-3">
//                             <span className="candidate-id">{candidate.id}. </span>
//                             <span className="candidate-name">{candidate.name}</span>
//                             <button
//                                 className={`btn ${userVoted && selectedCandidate === candidate.id ? 'btn-successes' : 'btn-danger'}`}
//                                 onClick={() => handleVote(candidate.id)}
//                                 disabled={userVoted}  // Disable the buttons after voting
//                             >
//                                 Vote
//                             </button>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Show selected candidate details */}
//                 {userVoted && selectedCandidate && (
//                     <div className="vote-results mt-5">
//                         <h3>Vote Tally</h3>
//                         <p><strong>Candidate:</strong> {candidates.find(candidate => candidate.id === selectedCandidate).name}</p>
//                         <p><strong>Candidate ID:</strong> {selectedCandidate}</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default VotingPage;

// // {/* CSS Styles */}
// // <style>
// // {`
// //     .election-voting-system {
// //         background-color: #f4f4f4;
// //         padding: 20px;
// //         background-color:  #e8c264;
// //     }

// //     .container {
// //         max-width: 800px;
// //         background-color: white;
// //         padding: 40px;
// //         border-radius: 10px;
// //         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// //     }

// //     .candidate-list {
// //         background-color: #f8f9fa;
// //         padding: 20px;
// //         border-radius: 10px;
// //     }

// //     .candidate-item {
// //         margin-bottom: 10px;
// //         display: flex;
// //         align-items: center;
// //     }

// //     .candidate-id {
// //         font-weight: bold;
// //         margin-right: 10px;
// //     }

// //     .candidate-name {
// //         flex-grow: 1;
// //     }

// //     .btn-danger {
// //         background-color: #dc3545;
// //         border-color: #dc3545;
// //     }

// //     .btn-success {
// //         background-color: #28a745;
// //         border-color: #28a745;
// //     }

// //     .btn:disabled {
// //         opacity: 0.6;
// //     }

// //     .vote-results {
// //         background-color: #d4edda;
// //         padding: 15px;
// //         border-radius: 5px;
// //         color: #155724;
// //         margin-top: 20px;
// //     }
// // `}
// // </style>



// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const VotingPage = () => {
//   const { pollId } = useParams(); // Get pollId from URL
//   const [candidates, setCandidates] = useState([]);
//   const [votedCandidate, setVotedCandidate] = useState(null);

//   useEffect(() => {
//     // 🔴 Backend Call: Fetch all candidates for this pollId
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetch(`/admin/polls/${pollId}/candidates`); // Change this API call as needed
//         const data = await response.json();
//         setCandidates(data);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     fetchCandidates();
//   }, [pollId]);

//   const handleVote = async (candidateId, candidateName) => {
//     try {
//       // 🔴 Backend Call: Cast vote for the selected candidate
//       const response = await fetch(`/api/polls/${pollId}/vote`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ candidateId }),
//       });

//       if (response.ok) {
//         setVotedCandidate(candidateName); // Show confirmation panel
//       } else {
//         console.error("Voting failed");
//       }
//     } catch (error) {
//       console.error("Error submitting vote:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Voting Page</h2>
//       <h3>Poll ID: {pollId}</h3>

//       <ul>
//         {candidates.map((candidate) => (
//           <li key={candidate.id}>
//             {candidate.name}
//             <button onClick={() => handleVote(candidate.id, candidate.name)}>
//               Vote
//             </button>
//           </li>
//         ))}
//       </ul>

//       {votedCandidate && (
//         <div>
//           <p>You have successfully voted for {votedCandidate}!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VotingPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { fetchCandidatesByPoll } from "../services/CandidateServices"; // ✅ Fetch candidates
// import { createVote } from "../services/VotesService"; // ✅ Cast vote

// const VotingPage = () => {
//   const { pollId } = useParams(); // Get pollId from URL
//   const [candidates, setCandidates] = useState([]);
//   const [votedCandidate, setVotedCandidate] = useState(null);

//   useEffect(() => {
//     // 🔄 Fetch candidates for this poll
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetchCandidatesByPoll(pollId);
//         setCandidates(response.data);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     fetchCandidates();
//   }, [pollId]);

//   const handleVote = async (candidateId, candidateName) => {
//     try {
//       const voteDto = { candidateId, pollId }; // Prepare vote payload
//       const response = await createVote(voteDto); // Call vote API

//       if (response.status === 201) {
//         setVotedCandidate(candidateName);
//       } else {
//         console.error("Voting failed");
//       }
//     } catch (error) {
//       console.error("Error submitting vote:", error);
//     }
//   };

//   return (
//     <div className="voting-container">
//       <h2 className="title">Voting Page</h2>
//       <h3 className="subtitle">Poll ID: {pollId}</h3>

//       <div className="candidate-list">
//         {candidates.length === 0 ? (
//           <p>No candidates available for this poll.</p>
//         ) : (
//           candidates.map((candidate) => (
//             <div key={candidate.candidateId} className="candidate-card">
//               <h3>{candidate.name}</h3>
//               <p>{candidate.agenda}</p>
//               <button className="vote-btn" onClick={() => handleVote(candidate.candidateId, candidate.name)}>
//                 Vote
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {votedCandidate && (
//         <div className="confirmation">
//           <p>You have successfully voted for <strong>{votedCandidate}</strong>!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VotingPage;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { fetchCandidatesByPoll } from "../services/CandidateServices"; // ✅ Fetch candidates
// import { createVote } from "../services/VotesService"; // ✅ Cast vote

// const VotingPage = () => {
//   const { pollId } = useParams(); // Get pollId from URL
//   const [candidates, setCandidates] = useState([]);
//   const [votedCandidate, setVotedCandidate] = useState(null);

//   useEffect(() => {
//     // 🔄 Fetch candidates for this poll
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetchCandidatesByPoll(pollId);
//         setCandidates(response.data);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     fetchCandidates();
//   }, [pollId]);
//   const handleVote = async (candidateId, candidateName) => {
//     const parsedPollId = parseInt(pollId, 10); // Convert pollId to integer
  
//     if (isNaN(parsedPollId)) {
//       console.error("Invalid Poll ID:", pollId);
//       return; // Stop execution if pollId is not a valid number
//     }
  
//     try {
//       const voteDto = { candidateId, pollId: parsedPollId }; // Ensure pollId is sent as an integer
//       const response = await createVote(voteDto);
  
//       if (response.status === 201) {
//         setVotedCandidate(candidateName);
//       } else {
//         console.error("Voting failed");
//       }
//     } catch (error) {
//       console.error("Error submitting vote:", error);
//     }
//   };
  

//   return (
//     <div>
//       <h2>Voting Page</h2>
//       <h3>Poll ID: {pollId}</h3>

//       <div>
//         {candidates.length === 0 ? (
//           <p>No candidates available for this poll.</p>
//         ) : (
//           candidates.map((candidate) => (
//             <div key={candidate.candidateId}>
//               <h3>{candidate.name}</h3>
//               <p>{candidate.agenda}</p>
//               <button onClick={() => handleVote(candidate.candidateId, candidate.name)} disabled={!!votedCandidate}>
//                 Vote
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {votedCandidate && (
//         <div>
//           <p>You have successfully voted for <strong>{votedCandidate}</strong>!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VotingPage;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { fetchCandidatesByPoll } from "../services/CandidateServices"; // Fetch candidates
// import { createVote } from "../services/VotesService"; // Cast vote

// const VotingPage = () => {
//   const { pollId } = useParams(); // Extract pollId from URL
// console.log("Extracted pollId from URL:", pollId);
//   const parsedPollId = parseInt(pollId, 10); // Ensure it's a number
//   const [candidates, setCandidates] = useState([]);
//   const [votedCandidate, setVotedCandidate] = useState(null);

//   useEffect(() => {
//     if (isNaN(parsedPollId)) {
//       console.error("Invalid Poll ID from URL:", pollId);
//       return;
//     }

//     // Fetch candidates for this poll
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetchCandidatesByPoll(parsedPollId);
//         setCandidates(response.data);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     fetchCandidates();
//   }, [parsedPollId]);

//   const handleVote = async (candidateId, candidateName) => {
//     if (isNaN(parsedPollId)) {
//       console.error("Invalid Poll ID:", parsedPollId);
//       return;
//     }

//     try {
//       const voteDto = { candidateId, pollId: parsedPollId }; // Send pollId as integer
//       const response = await createVote(voteDto);

//       if (response.status === 201) {
//         setVotedCandidate(candidateName);
//       } else {
//         console.error("Voting failed");
//       }
//     } catch (error) {
//       console.error("Error submitting vote:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Voting Page</h2>
//       <h3>Poll ID: {parsedPollId}</h3>

//       <div>
//         {candidates.length === 0 ? (
//           <p>No candidates available for this poll.</p>
//         ) : (
//           candidates.map((candidate) => (
//             <div key={candidate.candidateId}>
//               <h3>{candidate.name}</h3>
//               <p>{candidate.agenda}</p>
//               <button onClick={() => handleVote(candidate.candidateId, candidate.name)} disabled={!!votedCandidate}>
//                 Vote
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {votedCandidate && (
//         <div>
//           <p>You have successfully voted for <strong>{votedCandidate}</strong>!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VotingPage;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { fetchCandidatesByPoll } from "../services/CandidateServices"; 
// import { createVote } from "../services/VotesService"; 

// const VotingPage = () => {
//   const { pollId } = useParams(); // Extract pollId from the URL
//   console.log("Extracted pollId from URL:", pollId); // Debugging

//   const [candidates, setCandidates] = useState([]);
//   const [votedCandidate, setVotedCandidate] = useState(null);

//   useEffect(() => {
//     if (!pollId) {
//       console.error("Poll ID is missing from URL.");
//       return;
//     }

//     //  Fetch candidates for this poll
//     const fetchCandidates = async () => {
//       try {
//         const response = await fetchCandidatesByPoll(pollId);
//         setCandidates(response.data);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     fetchCandidates();
//   }, [pollId]);

//   const handleVote = async (candidateId, candidateName) => {
//     const parsedPollId = parseInt(pollId, 10); // Convert pollId to integer

//     if (isNaN(parsedPollId)) {
//       console.error("Invalid Poll ID from URL:", pollId);
//       return; // Stop execution if pollId is not a valid number
//     }

//     try {
//       const voteDto = { candidateId, pollId: parsedPollId };
//       const response = await createVote(voteDto);

//       if (response.status === 201) {
//         setVotedCandidate(candidateName);
//       } else {
//         console.error("Voting failed");
//       }
//     } catch (error) {
//       console.error("Error submitting vote:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Voting Page</h2>
//       <h3>Poll ID from URL: {pollId}</h3>

//       <div>
//         {candidates.length === 0 ? (
//           <p>No candidates available for this poll.</p>
//         ) : (
//           candidates.map((candidate) => (
//             <div key={candidate.candidateId}>
//               <h3>{candidate.name}</h3>
//               <p>{candidate.agenda}</p>
//               <button onClick={() => handleVote(candidate.candidateId, candidate.name)} disabled={!!votedCandidate}>
//                 Vote
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {votedCandidate && (
//         <div>
//           <p>You have successfully voted for <strong>{votedCandidate}</strong>!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VotingPage;


// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { fetchCandidatesByPoll } from "../services/CandidateServices"; 
// import { createVote } from "../services/VotesService"; 

// const VotingPage = () => {
//   const { pollId } = useParams(); // Extract pollId from the URL
//   console.log("Extracted pollId from URL:", pollId); // Debugging

//   const [candidates, setCandidates] = useState([]);
//   const [votedCandidate, setVotedCandidate] = useState(null);

//   useEffect(() => {
//     if (!pollId) {
//       console.error("Poll ID is missing from URL.");
//       return;
//     }

//     // Fetch candidates for this poll
//     const fetchCandidates = async () => {
//       try {
//         console.log(`Fetching candidates for pollId: ${pollId}`);
//         const response = await fetchCandidatesByPoll(pollId);
//         console.log("Candidates received:", response.data);
//         setCandidates(response.data);
//       } catch (error) {
//         console.error("Error fetching candidates:", error);
//       }
//     };

//     fetchCandidates();
//   }, [pollId]);

//   const handleVote = async (candidateId, candidateName) => {
//     const parsedPollId = parseInt(pollId, 10); // Convert pollId to integer

//     if (isNaN(parsedPollId)) {
//       console.error("Invalid Poll ID from URL:", pollId);
//       return; // Stop execution if pollId is not a valid number
//     }

//     try {
//       const voteDto = { candidateId, pollId: parsedPollId };
//       console.log("Submitting vote:", voteDto);

//       const response = await createVote(voteDto);

//       if (response.status === 201) {
//         console.log("Vote submitted successfully!");
//         setVotedCandidate(candidateName);
//       } else {
//         console.error("Voting failed with status:", response.status);
//       }
//     } catch (error) {
//       console.error("Error submitting vote:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Voting Page</h2>
//       <h3>Poll ID from URL: {pollId}</h3>

//       <div>
//         {candidates.length === 0 ? (
//           <p>No candidates available for this poll.</p>
//         ) : (
//           candidates.map((candidate) => (
//             <div key={candidate.candidateId}>
//               <h3>{candidate.name}</h3>
//               <p>{candidate.agenda}</p>
//               <button onClick={() => handleVote(candidate.candidateId, candidate.name)} disabled={!!votedCandidate}>
//                 Vote
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {votedCandidate && (
//         <div>
//           <p>You have successfully voted for <strong>{votedCandidate}</strong>!</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VotingPage;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCandidatesByPoll } from "../services/CandidateServices"; 
import { createVote } from "../services/VotesService"; 

const VotingPage = () => {
  const { pollId } = useParams(); // Extract pollId from the URL
  console.log("Extracted pollId from URL:", pollId); // Debugging

  const [candidates, setCandidates] = useState([]);
  const [votedCandidate, setVotedCandidate] = useState(null);

  useEffect(() => {
    if (!pollId) {
      console.error("Poll ID is missing from URL.");
      return;
    }

    // Fetch candidates for this poll
    const fetchCandidates = async () => {
      try {
        console.log(`Fetching candidates for pollId: ${pollId}`);
        const response = await fetchCandidatesByPoll(pollId);
        console.log("Candidates received:", response.data);
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, [pollId]);

  const handleVote = async (candidateId, candidateName) => {
    const parsedPollId = parseInt(pollId, 10); // Convert pollId to integer

    if (isNaN(parsedPollId)) {
      console.error("Invalid Poll ID from URL:", pollId);
      return; // Stop execution if pollId is not a valid number
    }
    try {
      const voteDto = { candidateId, pollId: parsedPollId };
      console.log("Sending vote data:", voteDto);

      console.log("Submitting vote:", voteDto);

      const response = await createVote(voteDto);

      if (response.status === 201) {
        console.log("Vote submitted successfully!");
        setVotedCandidate(candidateName);
      } else {
        console.error("Voting failed with status:", response.status);
      }
    } catch (error) {
      console.error("Error submitting vote:", error);
    }
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Voting Page</h2>
      <h4 className="text-center">Poll ID: {pollId}</h4>

      <div className="row">
        {candidates.length === 0 ? (
          <p className="text-center">No candidates available for this poll.</p>
        ) : (
          candidates.map((candidate) => (
            <div className="col-md-4 mb-4" key={candidate.candidateId}>
              <div className="card shadow-sm p-3 d-flex flex-column h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-center">{candidate.name}</h5>
                  <p className="card-text flex-grow-1">{candidate.agenda}</p>
                  <button 
                    className="btn btn-primary mt-auto" 
                    onClick={() => handleVote(candidate.candidateId, candidate.name)}
                    disabled={!!votedCandidate}
                  >
                    {votedCandidate ? "Vote Submitted" : "Vote"}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {votedCandidate && (
        <div className="alert alert-success text-center mt-3">
          You have successfully voted for <strong>{votedCandidate}</strong>!
        </div>
      )}
    </div>
  );
};

export default VotingPage;


