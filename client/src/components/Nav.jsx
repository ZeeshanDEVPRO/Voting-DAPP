import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Modal from './Modal'

const Nav = ({account}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Button>
      <ul className='nav-ul'>
        <li id='tit'> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo82OgFvfMrOOy4Oa8qwDDiPlpfbhmFgRmLQ&usqp=CAU'/><Link to="/" style={{ textDecoration: 'none',  color: '#25ce8f' }}> MyVote  </Link></li>
        <li><Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> </li>
        <li><Link to="/create" style={{ textDecoration: 'none' , color: 'white'}}>Create</Link></li>
        <li><Link to="/vote" style={{ textDecoration: 'none' , color: 'white'}}>Vote</Link></li>
        <li><Link to="/result" style={{ textDecoration: 'none' , color: 'white'}}>Result</Link></li>
        <li onClick={() => setOpenModal(!openModal)} className='account-link'> Account
          <Modal account={account} open={openModal} onClose={() => setOpenModal(!openModal)}/>
        </li>
      </ul>
     

      <hr/>
    </Button>
  )
}

export default Nav

const Button = styled.div`
background-color: rgb(23, 20, 32);
color: white;
max-width: 100vw;
#tit{
  font-size: 40px;
  font-weight: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
}
li{
  user-select:none;
}
hr{
  /* margin-top: -12px; */
  border: 1px solid rgb(38, 38, 48);
}

img{
  max-width: 40px;
  max-height: 40px;
  border-radius: 10px;
}
  .nav-ul{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    gap: 20px;
    border-bottom: 8px solid rgb(38, 38, 48);
    z-index:1;
}
li{
    padding: 10px;
    font-size: 25px;
    list-style-type: none;
    cursor: pointer;
    }
    .account-link{
      position:relative;
    }
 
`;