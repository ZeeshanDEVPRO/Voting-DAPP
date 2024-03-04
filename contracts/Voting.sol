//SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Voting {
    address public owner;

    struct Candidate {
        string name;
        uint256 votes;
    }

    struct Election {
        string name;
        uint256 startTime;
        uint256 endTime;
        mapping(address => bool) voted;
        Candidate[] candidates;
    }
    string[] public electionNames;
    mapping(string => Election) public elections; // Stores all elections

    mapping(string => address) public myElections; //ownership of elections
    mapping(string => mapping(address => bool)) voters;

    constructor() {
        owner = payable(msg.sender);
    }

    // Create a new election
    function createElection(string memory name,uint256 startTime,uint256 endTime,address creater) public {
        require(startTime < endTime, "Start time must be before end time");

        Election storage newElection = elections[name];
        newElection.name = name;
        newElection.startTime = startTime;
        newElection.endTime = endTime;
        electionNames.push(name);

        myElections[name] = creater;
    }

    // Add a candidate to an election
    function addCandidate(string memory electionName,string memory candidateName,address currentAccount) public {
        require(block.timestamp < elections[electionName].startTime,"Adding candidates after election start is not allowed");
        require(myElections[electionName] == currentAccount,"only election creater can add candidate");

        elections[electionName].candidates.push(Candidate(candidateName, 0));
    }

    function addVoter(string memory electionName,address currentAccount,address acnt) public {
        require(block.timestamp < elections[electionName].startTime,"Adding voter after election start is not allowed");
        require(myElections[electionName] == currentAccount,"only election creater can add voter");

        voters[electionName][acnt] = true;
    }

    // Get all candidate names for an election (returns empty array if no candidates)
    function allCandidates(string memory electionName) public view returns (string[] memory){
        Candidate[] storage candidates = elections[electionName].candidates;
        string[] memory names = new string[](candidates.length);
        for (uint256 i = 0; i < candidates.length; i++) {
            names[i] = candidates[i].name;
        }
        return names;
    }

    // Get all election names
    function allElections(address currentAccount) public view returns (string[] memory){
        string[] memory names = new string[](electionNames.length);
        uint256 j = 0; // Index for the returned names array

        for (uint256 i = 0; i < electionNames.length; i++) {
            // Check if the user is registered for this election
            if (currentAccount==myElections[electionNames[i]] || voters[electionNames[i]][currentAccount] == true) {
                names[j] = electionNames[i];
                j++;
            }
        }

        // Return an empty array if no elections found
        if (j == 0) {
            return new string[](0);
        } 
        else {
            // Resize the returned array to the actual number of elections (optional)
            string[] memory filteredNames = new string[](j);
            for (uint256 k = 0; k < j; k++) {
                filteredNames[k] = names[k];
            }
            return filteredNames;
        }
    }

    // Cast a vote for a candidate in an election
    function castVote(string memory electionName,uint256 candidateIndex,address currentAccount) public {
        require(block.timestamp >= elections[electionName].startTime && block.timestamp <= elections[electionName].endTime,"Voting outside election period");
        require(!elections[electionName].voted[msg.sender],"Already voted in this election");
        require(voters[electionName][currentAccount] == true,"You are not in the voter list");
        elections[electionName].voted[msg.sender] = true;
        elections[electionName].candidates[candidateIndex].votes++;
    }

    // Get results of an election (returns candidate names and vote counts)
    function getResults(string memory electionName) public view returns (Candidate[] memory){
        require(block.timestamp > elections[electionName].endTime,"Election is still ongoing");

        if (elections[electionName].candidates.length == 0) {
            return new Candidate[](0);
        }

        Candidate[] memory results = new Candidate[](elections[electionName].candidates.length);
        for (uint256 i = 0;i < elections[electionName].candidates.length;i++) {
            results[i].name = elections[electionName].candidates[i].name;
            results[i].votes = elections[electionName].candidates[i].votes;
        }
        return results;
    }

    function cancelElection(string memory electionName, address currentAccount) public{
        require(block.timestamp < elections[electionName].startTime || block.timestamp > elections[electionName].endTime,"Cannot cancel in between the election start and end time");
        require(myElections[electionName] == currentAccount,"only creater can cancel election");

        delete elections[electionName];

        for (uint256 j = 0; j < electionNames.length; j++) {
            if (keccak256(abi.encodePacked(electionNames[j]))==keccak256(abi.encodePacked(electionName))) {
                electionNames[j] = electionNames[electionNames.length - 1];
                electionNames.pop();
                break;
            }
        }
    }
}
