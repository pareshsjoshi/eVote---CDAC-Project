import React from "react";
import { Nav } from "react-bootstrap";
import { Link, Route, Routes } from "react-router-dom";
import VotingPage from "./VotingPage";

function Polls() {
  const polls = [
    {
      title: "Poll 1: Favorite Color",
      description: "Vote for your favorite color from the options provided.",
    },
    {
      title: "Poll 2: Best Programming Language",
      description: "Choose your favorite programming language. This poll includes popular programming languages like Python, JavaScript, Java, C++, and more.",
    },
    {
      title: "Poll 3: Favorite Fruit",
      description: "Let us know your favorite fruit from the list. We have apples, oranges, bananas, and more fruits for you to choose from.",
    },
  ];

  return (
    <div className="container my-4">
      <div className="row">
        {polls.map((poll, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card d-flex flex-column" style={{ height: '100%' }}>
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{poll.title}</h5>
                <p className="card-text flex-grow-1">{poll.description}</p>
                <Nav className="me-auto">
                  <Nav.Link className="btn btn-primary mt-auto" as={Link} to="/polls/poll-id">View Poll</Nav.Link>
                </Nav>
                <Routes>
                  <Route path={"/poll-id"} element={<VotingPage />} ></Route>
                </Routes>
                {/* <a href="/poll/poll-id" className="btn btn-primary mt-auto">
                  View Poll
                </a> */}
              </div>
            </div>
          </div>
        ))}
        {/* <PollRouter /> */}
      </div>
    </div>
  );
}

export default Polls;
