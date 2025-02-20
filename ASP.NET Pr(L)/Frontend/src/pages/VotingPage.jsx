import React, { useState } from 'react';
import '../stylesheets/VotingPage.css';
import { useParams } from 'react-router-dom';

const VotingPage = () => {
    const { id } = useParams();
    const [candidates, setCandidates] = useState([
        { id: 1, name: 'Vikhe Ptil' },
        { id: 2, name: 'Nilesh Lanke' },
        { id: 3, name: 'Sangram Jagtap' },
        { id: 4, name: 'Rajesh Yadav' },
        { id: 5, name: 'Ankita Deshmukh' },
        { id: 6, name: 'Shruti Patil' },
        { id: 7, name: 'Amit Sharma' },
        { id: 8, name: 'Priya Patil' }
    ]);
    
    const [userVoted, setUserVoted] = useState(false);
    const [selectedCandidate, setSelectedCandidate] = useState(null);

    // Handle vote submission
    const handleVote = (candidateId) => {
        if (userVoted) {
            alert("You have already voted!");
            return;
        }

        setSelectedCandidate(candidateId);
        setUserVoted(true);
    };

    return (
        <div className="election-voting-system">
            <div className="poll-container mt-5">
                <h1 className="text-center mb-4">Election Voting</h1>

                {/* Voting Options */}
                <div className="candidate-list mb-4">
                    <h3>Select a Candidate to Vote {id}</h3>
                    {candidates.map((candidate) => (
                        <div key={candidate.id} className="candidate-item mb-3">
                            <span className="candidate-id">{candidate.id}. </span>
                            <span className="candidate-name">{candidate.name}</span>
                            <button
                                className={`btn ${userVoted && selectedCandidate === candidate.id ? 'btn-successes' : 'btn-danger'}`}
                                onClick={() => handleVote(candidate.id)}
                                disabled={userVoted}  // Disable the buttons after voting
                            >
                                Vote
                            </button>
                        </div>
                    ))}
                </div>

                {/* Show selected candidate details */}
                {userVoted && selectedCandidate && (
                    <div className="vote-results mt-5">
                        <h3>Vote Tally</h3>
                        <p><strong>Candidate:</strong> {candidates.find(candidate => candidate.id === selectedCandidate).name}</p>
                        <p><strong>Candidate ID:</strong> {selectedCandidate}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default VotingPage;

// {/* CSS Styles */}
// <style>
// {`
//     .election-voting-system {
//         background-color: #f4f4f4;
//         padding: 20px;
//         background-color:  #e8c264;
//     }

//     .container {
//         max-width: 800px;
//         background-color: white;
//         padding: 40px;
//         border-radius: 10px;
//         box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     }

//     .candidate-list {
//         background-color: #f8f9fa;
//         padding: 20px;
//         border-radius: 10px;
//     }

//     .candidate-item {
//         margin-bottom: 10px;
//         display: flex;
//         align-items: center;
//     }

//     .candidate-id {
//         font-weight: bold;
//         margin-right: 10px;
//     }

//     .candidate-name {
//         flex-grow: 1;
//     }

//     .btn-danger {
//         background-color: #dc3545;
//         border-color: #dc3545;
//     }

//     .btn-success {
//         background-color: #28a745;
//         border-color: #28a745;
//     }

//     .btn:disabled {
//         opacity: 0.6;
//     }

//     .vote-results {
//         background-color: #d4edda;
//         padding: 15px;
//         border-radius: 5px;
//         color: #155724;
//         margin-top: 20px;
//     }
// `}
// </style>