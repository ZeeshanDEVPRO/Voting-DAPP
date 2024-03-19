import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateElection = ({ contract, account }) => {

  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [electionName, setElectionName] = useState('');
  const [elections, setElections] = useState([]);
  const [candidateName, setCandidateName] = useState('');
  const [voterAddress, setVoterAddress] = useState('');
  const [error, setError] = useState(null);
  const [val, setVal] = useState('');
  const [loading, setLoading] = useState(false);
  const [candidateLoading, setCandidateLoading] = useState(false);
  const [voterLoading, setVoterLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [msgCandidate, setMsgCandidate] = useState('');
  const [msgVoter, setMsgVoter] = useState('');
  const [msgCancel, setMsgCancel] = useState('');

  useEffect(() => {
    getElections();
  }, [contract])

  const addVoterr = async () => {
    setElectionName(val);
    event.preventDefault();
    try {
      setVoterLoading(true);
      if(electionName==="" || voterAddress==="" ) {
        console.log(electionName, voterAddress)
        toast.error('Please enter all fields!', {
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
        setVoterLoading(false);
        return;
      }
      const addRes = await contract.addVoter(electionName, account[0], voterAddress);

      if (!addRes) {
        setError('Error adding candidate!');
        setElectionName('');
        setVoterLoading(false);
      }
      else {
        console.warn("added voter:", voterAddress);
        setElectionName('');
        setVoterAddress('');
        setVoterLoading(false);
        toast.success('Voter added successfully!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        })
      
      }
    }
    catch (e) {
      setVoterLoading(false);
      console.error(e);
      toast.error('Error adding voter!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      })
    }
  }

  const add = async () => {
    event.preventDefault();
    setElectionName(val);
    try {
      setCandidateLoading(true);
      if(electionName==="" || candidateName==="" || !account) {
        toast.error('Please enter all fields!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          hideProgressBar: true,
        });
        setCandidateLoading(false);
        return
      }
      const addRes = await contract.addCandidate(electionName, candidateName, account[0]);
      if (!addRes) {
        setError('Error adding candidate!');
        setElectionName('');
        setCandidateLoading(false);
        toast.error('Error adding candidate!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          hideProgressBar: true,
        })
      }
      else {
        console.warn("added candidate", candidateName);
        toast.success('Candidate Added', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          hideProgressBar: true,
        })
        setElectionName('');
        setCandidateName('');
        setCandidateLoading(false);
      }

    }
    catch (e) {
      // add();
      setCandidateLoading(false);
      toast.error('Error adding candidate!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        hideProgressBar: true,
      })
      console.error(e);
    }
  }

  const cancel = async () => {
    event.preventDefault();
    setElectionName(val);
    try {
      setCancelLoading(true);
      if(electionName==="" || !account) {
        toast.error('Please enter all fields!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          hideProgressBar: true,
        });
        setCancelLoading(false);
        return
      }
      const cancelRes = await contract.cancelElection(electionName, account[0]);

      if (cancelRes) {
        console.log("cancelled:", electionName);
        setElectionName('');
        getElections();
        setCancelLoading(false);
        window.location.reload();
      }
      else {
        console.error("cancellation failed");
        setCancelLoading(false);
      }
    }
    catch (e) {
      console.error(e);
      setCancelLoading(false);
      toast.error('Error cancelling election!', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
        hideProgressBar: true,
      })
    }
  }

  const getElections = async () => {
    try {
      const getElection = await contract.allElections(account[0]);
      if (!getElection) {
        console.error("getElection error");
      }
      setElections(getElection);
    }
    catch (e) {
      console.error(e);
    }
  }


  const handleElectionChange = (event) => {
    setVal(event.target.value);
    console.log(event.target.value);
  }

  const create = async () => {
    event.preventDefault();
    try {
      setLoading(true);
      const start = (new Date(startTime).getTime()) / 1000;
      const end = (new Date(endTime).getTime()) / 1000;
      if(!electionName || !start || !end) {
        toast.error('Please enter all fields!', {
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
        setLoading(false);
        return
      }
      console.log(start, end, electionName);
      if(start>end || start===end || Date.now()>=start*1000 || Date.now()>=end*1000 ) {
        console.warn(Date.now(),start,end)
        toast.error('start time must be before end time, and must be in future!', {
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
        setLoading(false);
        return
      }
      const createRes = await contract.createElection(electionName, start, end, account[0]);
      if (createRes) {
        console.log("created your election");
        setElectionName('');
        setStartTime('');
        setEndTime('');
        setLoading(false);
        
        toast.success('Election created!', {
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
       
      } else {
        console.error("create error");
        setLoading(false);
      }
      getElections();
    } catch (error) {
      // create();
      setLoading(false);
      console.error(error);
    }
  };

  const isButtonDisabled = elections.length === 0;

  return (
    <Button>
      <div className="tit">Create Election </div>
      <div className="message">{message}</div>
      <form>

        <label htmlFor="electionName">Election Name:</label>
        <input type="text" id="electionName" onFocus={() => setMessage('')} required placeholder="Election Name" value={electionName} onChange={(e) => setElectionName(e.target.value)} />

        <label htmlFor="startTime">Start Time:</label>
        <input type="datetime-local" onFocus={() => setMessage('')} id="startTime" required placeholder="Start Time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />

        <label htmlFor="endTime">End Time:</label>
        <input type="datetime-local" onFocus={() => setMessage('')} id="endTime" required placeholder="End Time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />

        {error && <div className="error">{error}</div>}
        {loading === false ? (
          <button onClick={create}>Create Election</button>
        ) : (
          <button disabled>Creating...</button>
        )}

      </form>

      <div className="tit">Add Candidate</div>
      <div className="message">{msgCandidate}</div>
      <form className='candidate-form'>

        <fieldset style={{ border: '1px solid rgb(229, 229, 233)', borderRadius: '10px' }}>
          <legend>Choose an election : </legend>
          {elections.length > 0 ? (
            <ul key="elections-list">
              {elections.map((ele, index) => (
                <li key={index}>
                  <label key={ele} htmlFor={ele}>
                    <input
                      type="radio"
                      id={ele}
                      name="vote"
                      value={ele}
                      onClick={(ele) => handleElectionChange(ele)}
                    />
                    <div className="ele">{ele}</div>
                  </label>
                </li>
              ))}
            </ul>
          ) : (
            <div className="noElections" style={{ "backgroundColor": " rgb(23, 20, 32)", "fontWeight": "9000", "color": "#14af76", "padding": "8px", "borderRadius": "10px" }}>There are no elections available for you yet. Try creating an election or someone to add you in the voter list. Remember only the creator can add candidates!</div>
          )}

        </fieldset>

        <label htmlFor="candidateName">Candidate Name :</label>
        <input onFocus={() => setMsgCandidate('')} type="text" id="candidateName" placeholder="Candidate Name" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} />

        {error && <div className="error">{error}</div>}
        {candidateLoading === false ? (

          <button onClick={add} disabled={isButtonDisabled}>Add Candidate Now</button>
        ) : (
          <button disabled>Adding...</button>
        )}

      </form>

      <div className="tit">Add Voter</div>
      <div className="message">{msgVoter}</div>
      <form id='voter-form'>


        <fieldset>
          <legend>Choose an election :</legend>
          {elections.length > 0 ? (
            elections.map((ele, index) => (
              <label key={ele} htmlFor={ele}>
                <input type="radio" id={ele} name="vote" value={ele} onClick={handleElectionChange} />
                <div className="ele">{ele}</div>
              </label>
            ))
          ) : (
            <div className="noElections" style={{ backgroundColor: " rgb(23, 20, 32)", fontWeight: "9000", color: "#14af76", padding: "8px", borderRadius: "10px" }}>
              There are no elections available for you yet. Try creating an election or asking someone to add you to the voter list. Remember only the creator can add voters!
            </div>
          )}
        </fieldset>



        <label htmlFor="voterName">Voter Metamask Address :</label>
        <input onFocus={() => setMsgVoter('')} type="text" id="voterName" placeholder="Voter Metamask Address" value={voterAddress} onChange={(e) => setVoterAddress(e.target.value)} />

        {error && <div className="error">{error}</div>}

        {!voterLoading ?
          (<button onClick={addVoterr} disabled={isButtonDisabled}>Add Voter Now</button>)
          : (<button disabled>Adding...</button>)}

      </form>


      <div className="tit">Cancel Election</div>
      <div className="message">{msgCancel}</div>
      <form id='cancel-form'>

        <fieldset>
          <legend>Choose an election : </legend>
          {elections.length > 0 ? (
            elections.map((ele, index) => (
              <label key={ele} htmlFor={ele}>

                <input type="radio" id={ele} name="vote" value={ele} onClick={handleElectionChange} />
                <div className="ele">{ele}</div>

              </label>
            ))
          ) :
            (<div className="noElections" style={{ backgroundColor: " rgb(23, 20, 32)", fontWeight: "9000", color: "#14af76", padding: "8px", borderRadius: "10px" }}>
              There are no elections available for you yet. Try creating an election or asking someone to add you to the voter list. Remember only the creator can cancel the election!
            </div>)}
        </fieldset>
        {!cancelLoading ? (
          <button onClick={cancel} disabled={isButtonDisabled}>Cancel </button>) :
          (<button disabled>Cancelling...</button>)}
      </form>
      <ToastContainer />
    </Button>
  );
};

export default CreateElection;

const Button = styled.div`
background-color: rgb(23, 20, 32);
color: white;
margin-top: -8px;
padding-bottom: 5vh;
min-height:50vh;
display: flex;
flex-direction: column;
gap: 10vh;
align-items: center;
#voter-form{
  max-width:30vw;
}
.candidate-form{
  max-width:30vw;
}
#cancel-form{
  max-width:30vw;
}
li{
  list-style-type: none;
}
input[type=radio] {
  cursor: pointer;
  margin-right:20px;
}
.noElections{
  font-size:17px;
}
hr{
  margin-top: -12px;
  border: 1px solid rgb(229, 229, 233);
}
label{
  font-size: 25px;
  color: #25ce8f;
  display: flex;
}
fieldset{
  font-size: 25px;
}
.tit{
  color: #25ce8f;
  font-size: 40px;
  font-weight: 600;
  padding-top: 10vh;
}
.message{
  color: white;
  font-size: 30px;
  font-weight: 600;
}
form{
  display: flex;
  flex-direction: column;
  gap: 3vh;
  border: 5px solid rgb(73, 73, 73);
  padding: 5vh;
  border-radius: 10px;
}
input[type=text],input[type=datetime-local]{
  min-width: 23vw;
  max-height:3vh;
  border: none;
  border-radius: 10px;
  font-size: 20px;
  padding: 11px;
}
button{
  background-color: #25ce8f;
  border: none;
  border-radius: 10px;
  font-size: 25px;
  padding: 7px;
  cursor: pointer;
  color: white;
}
`;