import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Vote = ({ contract, account }) => {
  const [candidates, setCandidates] = useState([]);
  const [elections, setElections] = useState([]);
  const [electionName, setElectionName] = useState('');
  const [candidateOption, setCandidateoption] = useState('');
  const [selectedElection, setSelectedElection] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(false);
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgVoter, setMsgVoter] = useState('');

  useEffect(() => {
    // getElections();
    getCandidates();
  }, [contract]);
  const handleElectionChange = (event) => {
    setVal(event.target.value);
    console.log(event.target.value);
    setSelectedElection(true);
  }

  const handleCandidateChange = (event) => {
    const selectedCandidateIndex = event.target.value;
    setCandidateoption(selectedCandidateIndex);
    console.warn(candidates[selectedCandidateIndex]);
    console.warn(selectedCandidateIndex);
    console.warn(event.target.value);
    setSelectedCandidate(true);
  };

  const vote = async () => {
    event.preventDefault();
    try {
      setLoading(true);
      const voteRes = await contract.castVote(electionName, candidateOption, account[0]);
      await voteRes;
      if (!voteRes) {
        console.error("vote error");
        console.warn("vote error chicken");
        setLoading(false);
      }
      else {
        console.log("voted");
        console.warn("candidate", candidateOption);
        setLoading(false);
        setCandidateoption('');
        setElectionName('');
        setMsgVoter("Voting Successful");
        setTimeout(() => {
          setMsgVoter('');
        }, 5000);
      }
    }
    catch (e) {
      console.error(e);
      setLoading(false);
    }
  }

  const getElections = async () => {
    try {
      const getElection = await contract.allElections(account[0]);
      if (!getElection) {
        console.error("getElection error");
      }
      setElections(getElection);
      // console.log(getElection);
    }
    catch (e) {
      console.error(e);
    }
  }
  getElections();


  const getCandidates = async () => {
    setElectionName(val);
    event.preventDefault();
    try {
      if (!val) {
        toast.error('Please !', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        return;
      }
      let getCandidatesRes = await contract.allCandidates(val);
      getCandidatesRes = await getCandidatesRes;
      if (!getCandidatesRes) {
        console.error("getCandidates error");
      }
      setCandidates(getCandidatesRes);
      console.log(getCandidatesRes);
      setSelectedElection(true);
      // setElectionName('');
    }
    catch (e) {
      console.error(e);
      toast.error('Please select an election!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  }

  const anotherElection = () => {
    setElectionName('');
    setVal('');
  }
  const isButtonDisabled = elections.length === 0;
  const noVoteDisabled = candidates.length === 0;

  return (
    <Button>
      <div className="display">Vote now for a change</div>
      <div className="display" style={{ fontSize: "30px", color: "white" }}>{msgVoter}</div>
      {!electionName ?
        (
          <form className="vote-form">

            <fieldset>
              <legend>Choose an election : </legend>
              {elections.length > 0 ? (
                elections.map((ele, index) => (
                  <label key={ele} htmlFor={ele}>
                    <div className="dis">
                      <input type="radio" id={ele} name="vote" value={ele} onClick={handleElectionChange} />
                      <div className="ele">{ele}</div>
                    </div>
                  </label>
                ))
              ) :
                (<div className='noElection' style={{ backgroundColor: " rgb(23, 20, 32)", fontWeight: "900", color: "#14af76", padding: "8px", borderRadius: "10px" }}>
                  There are no elections available for you yet. Try creating an election or asking someone to add you to the voter list. Remember only the account added in the voter list by the creator can vote!
                </div>)}
            </fieldset>
            <button type="submit" onClick={getCandidates} disabled={isButtonDisabled}>Show all Candidates</button>
          </form>
        )
        :
        (
          <form className="vote-form">

            <fieldset>
              <legend>Choose a candidate : </legend>
              {candidates.length > 0 ? (
                candidates.map((candidate, index) => (
                  <label key={candidate} htmlFor={candidate}>
                    <div className="in">
                      <input type="radio" id={candidate} name="vote" value={index} onChange={handleCandidateChange} />
                      {candidate}
                    </div>
                  </label>
                ))) : (<div className='noElection' style={{ backgroundColor: " rgb(23, 20, 32)", fontWeight: "900", color: "#14af76", padding: "8px", borderRadius: "10px" }}>
                  There are no candidates available for you yet. Try creating another election or asking someone to add you to the voter list. Remember only the elections with atleast one candidate can be voted upon!</div>)
              }
            </fieldset>
            {!loading ? (
              <button type="submit" onClick={vote} disabled={noVoteDisabled}>Cast Vote</button>)
              :
              (<button disabled>Adding vote...</button>)}
            <button type="submit" onClick={anotherElection}>Select Another Election</button>

          </form>
        )
      }
      <ToastContainer />
    </Button>
  )
}

export default Vote

const Button = styled.div`
background-color: rgb(23, 20, 32);
color: white;
min-height: 70vh;
margin-top: -8px;
padding: 5vh;
display: flex;
flex-direction: column;
align-items: center;
fieldset{
  font-size: 25px;
}
.vote-form{
  max-width:30vw;
}
.in,.dis{
  display: flex;
  flex-direction: row;
  gap: 15px;
}
input{
  display: flex;
  flex-direction: column;
  cursor: pointer;
}
.noElection{
  font-size: 17px;
}
.display{
  color: #25ce8f;
  font-size: 40px;
  padding: 5vh;
}
.vote-form{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
  border: 5px solid rgb(73, 73, 73);
  border-radius: 10px;
  padding: 3vh;
}
#tit{
  font-size: 40px;
}
label{
  color: #25ce8f;
}
button{
  min-width:30vw;
  min-height:8vh;
  font-size: 20px;
  border-radius: 10px;
  color: white;
  background-color: #25ce8f;
  border:none;
  cursor: pointer;
}
`;