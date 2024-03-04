import { ethers } from 'ethers';
import styled from 'styled-components'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { contractAddress, contractABI } from './constants'
import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import CreateElection from './components/CreateElection';
import Vote from './components/Vote';
import Result from './components/Result';
import "./App.css"
import Footer from './components/Footer';

const App = () => {
  const [contarctIns, setContractIns] = useState(null);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const blockchainData = async () => {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          console.error("install metamask");
          return;
        }
        const account = await ethereum.request({ method: "eth_requestAccounts" });
        window.ethereum.on("accountsChanged", () =>history.go());
        setAccount(account);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        setContractIns(contract);
      }
      catch (e) {
        console.error(e);
      }
    }
    blockchainData();
  }, [account])

  return (
    <>
      <BrowserRouter>
        <Nav account={account}/>
        <Routes>
          <Route path="/" element={<Home account={account}/>} />
          <Route path="/create" element={<CreateElection contract={contarctIns} account={account}/>} />
          <Route path="/result" element={<Result contract={contarctIns} account={account}/>} />
          <Route path="/vote" element={<Vote contract={contarctIns} account={account}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App