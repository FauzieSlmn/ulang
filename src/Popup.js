import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 500px;
  width: 90%;
  position: relative; /* To allow the hearts to be positioned relatively */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 1em;
  color: #fff;
  background-color: #ff69b4;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #ff1493;
  }
`;

const fly = keyframes`
  0% {
    transform: scale(0.5) translateY(0);
    opacity: 1;
  }
  100% {
    transform: scale(1) translateY(-100vh);
    opacity: 0;
  }
`;

const Heart = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 20px;
  height: 20px;
  background-color: #ff69b4;
  transform: rotate(45deg);
  animation: ${fly} 4s linear infinite;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #ff69b4;
    border-radius: 50%;
  }

  &:before {
    top: -10px;
    left: 0;
  }

  &:after {
    top: 0;
    left: -10px;
  }
`;

const Popup = ({ message, closePopup, nextMessage, isLastMessage }) => {
  useEffect(() => {
    if (isLastMessage) {
      const interval = setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isLastMessage]);

  return (
    <PopupOverlay>
      <PopupContent>
        <h2>hai cantik, selamat ulang tahun!</h2>
        <p>{message}</p>
        {isLastMessage ? (
          <>
            <Button onClick={closePopup}>Tutup</Button>
            
          </>
        ) : (
          <Button onClick={nextMessage}>Next</Button>
        )}
      </PopupContent>
    </PopupOverlay>
  );
};

export default Popup;
