import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Result = ({ contract, account }) => {
  const [elections, setElections] = useState([]);
  const [electionName, setElectionName] = useState('');
  const [blockchainResult, setBlockchainResult] = useState([]);
  const [val, setVal] = useState('');

  useEffect(() => {
    getElections();
  }, [contract]);

  const results = async (event) => {
    event.preventDefault();
    setElectionName(val);

    const res = await contract.getResults(val);

    console.table(res);
    setBlockchainResult(res);
    setVal('');
  };

  const getElections = async () => {
    try {
      const getElection = await contract.allElections(account[0]);
      if (!getElection) {
        console.error('getElection error');
      }
      setElections(getElection);
    } catch (e) {
      console.error(e);
    }
  };

  const handleElectionChange = (event) => {
    setVal(event.target.value);
    console.log(event.target.value);
  };

  const anotherElection = () => {
    setElectionName('');
    setBlockchainResult([]);
  };

  const isButtonDisabled = elections.length === 0;

  return (
    <Button>
      <div className="display">Get all your results now</div>
      {!electionName ? (
        <form id="vote-form" onSubmit={results}>
          <fieldset>
            <legend>Choose an election:</legend>
            {elections.length > 0 ? (
              elections.map((ele, index) => (
                <label key={ele} htmlFor={ele}>
                  <div className="dis">
                    <input type="radio" id={ele} name="vote" value={ele} onClick={handleElectionChange} />
                    <div className="ele">{ele}</div>
                  </div>
                </label>
              ))
            ) : (
              <div className="noElection">
                There are no elections available for you yet. Try creating an election or asking someone to add you to the voter list. Remember only the election that is over can fetch results!
              </div>
            )}
          </fieldset>
          <button type="submit" disabled={isButtonDisabled}>Get Results Now</button>
        </form>
      ) : (
        <div className="final">
          <div id="tit">Your Election Name: {electionName}</div>
          {blockchainResult.length > 0 ? (
            <div className="results">
              <table>
                <thead>
                  <tr>
                    <th>Candidate Name</th>
                    <th>Votes</th>
                  </tr>
                </thead>
                <tbody>
                  {blockchainResult.map((item, index) => (
                    <tr key={index} className="resultItem">
                      <td className="candidateName">{item.name}</td>
                      <td className="voteCount">{item.votes.toString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div style={{ color: '#14af76',fontSize: '20px' }}>Either the election is not over or the election does not have any candidate to show!</div>
          )}
          <button className="submit" type="button" onClick={anotherElection}>Select Another Election</button>
        </div>
      )}
    </Button>
  );
};

export default Result;

const Button = styled.div`
  background-color: rgb(23, 20, 32);
  color: white;
  min-height: 70vh;
  margin-top: -8px;
  padding: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  tr:hover {background-color:#14af76 ;}
  table{
    border:5px solid rgb(73, 73, 73);
    border-radius: 10px;
    font-size: 25px;
  }
  th{
    background-color:#14af76 ;
    font-size: 28px;
  }
  td,th{
    padding: 15px;
    text-align: justify;
    border: #14af76;
  }
  .voteCount{
    text-align: center;
  }
  .dis {
    display: flex;
    gap: 15px;
  }
  .noElection {
    font-size: 17px;
    background-color: rgb(23, 20, 32);
    font-weight: 9000;
    color: #14af76;
    padding: 8px;
    border-radius: 10px;
    margin-top: 10px;
  }
  fieldset {
    font-size: 25px;
  }
 
  #tit {
    font-size: 40px;
  }
  .display {
    color: #25ce8f;
    font-size: 40px;
    padding: 5vh;
  }
  button {
    min-width: 30vw;
    min-height: 8vh;
    font-size: 20px;
    border-radius: 10px;
    color: white;
    background-color: #25ce8f;
    border: none;
    cursor: pointer;
    margin: 5vh;
    margin-top: 6vh;
  }
  label {
    color: #25ce8f;
  }
  .final {
    display: flex;
    flex-direction: column;
    gap: 5vh;
    justify-content: center;
    align-items: center;
  }
  .submit {
    max-width: 20vw;
  }
  #vote-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vh;
    border: 5px solid rgb(73, 73, 73);
    border-radius: 10px;
    padding: 3vh;
    max-width: 30vw;
  }
  .in {
    display: flex;
    flex-direction: row;
    gap: 15px;
  }
  input {
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .results {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .candidateName {
    font-weight: bold;
  }
 
`;
