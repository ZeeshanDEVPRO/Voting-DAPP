import React from 'react'
import styled from 'styled-components'

const Modal = ({ account, open, onClose }) => {
    if (!open) return null;
    return (
        <Button>
            <div className='overlay' onClick={onClose}>
                <div className="modalContainer" onClick={(e) => e.stopPropagation()}>
                    <div className="close" onClick={onClose}>X</div>
                    <div className="content">
                        <p style={{ color: '#25ce8f',fontWeight: 'bold' }}>Connected:</p>{account[0]}
                    </div>
                </div>
            </div>
        </Button>
    )
}

export default Modal

const Button = styled.div`
    .overlay{
        background-color: #fff;
        color:black;
        width:250px;
        
        border-radius:10px;
        box-shadow: 0 0 10px 1px #eee;
    }
    .close{
        position: absolute;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }
    .overlay{
        word-wrap:wrap;
        position: absolute;
        top:100%;
        left:0;
        backdrop-filter: blur(5px);
    }
    .content{
        margin:20px;
        padding-top:10px;
        word-wrap: break-word;
        padding:50px 0;
        padding-bottom: 30px;
        font-size:20px;
    }
`;