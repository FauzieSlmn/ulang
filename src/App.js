import React, { useState } from 'react';
import styled from 'styled-components';
import Popup from './Popup';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffe4e1; /* Light pink background */
  font-family: 'Arial, sans-serif';
  text-align: center; /* Center the text */
  padding: 20px; /* Add some padding for smaller screens */

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.2em;
  color: #fff;
  background-color: #ff69b4; /* Hot pink button */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #ff1493; /* Deeper pink on hover */
  }
`;

const messages = [
  "Semoga hari ulang tahunmu dipenuhi dengan kebahagiaan, cinta, dan tawa. aku sangat beruntung memiliki kamu dalam hidupku.",
  "semoga sehat selalu, bahagia selalu, dan yang penting juga selalu sama aku hihi",
  "apapun yang terjadi, semoga di umur ini kamu menemukan apa yang terhenti di hidup kamu",
  "kalo kamu menemukan ada mimpi yang terhenti di hidup kamu, jangan takut, kali ini ada aku!",
  "terus menjadi seorang yang tangguh, kuat!",
  "tapi kali ini tangguh dan kuatnya bisa dibagi ke aku!",
  "maaf karna ga bisa merayakan ini sama kamu, tapi aku pesenin kamu bolu biar kamu bisa tetep merayakan disana",
  "karna lahirnya kamu, itu ga ternilai buat aku, jadi apapun itu, tetap rayakan yaa!"
];

const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setMessageIndex(0); // Reset message index when closing popup
  };

  const nextMessage = () => {
    if (messageIndex < messages.length - 1) {
      setMessageIndex(messageIndex + 1);
    } else {
      setIsPopupOpen(false); // Close popup after last message
    }
  };

  return (
    <AppContainer>
      <h1>Selamat Ulang Tahun, Sayang!</h1>
      <Button onClick={handleButtonClick}>Klik untuk pesan spesial</Button>
      {isPopupOpen && (
        <Popup
          message={messages[messageIndex]}
          closePopup={closePopup}
          nextMessage={nextMessage}
          isLastMessage={messageIndex === messages.length - 1}
        />
      )}
    </AppContainer>
  );
};

export default App;
