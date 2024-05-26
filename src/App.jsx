import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Sergio Fernández</h1>
        <div className="links">
          <LinkButton text="X - Twitter" url="https://x.com/Sergiofernzv?mx=2"/>
          <LinkButton text="Instagram" url="https://www.instagram.com/sergiofernandezv/?hl=es"/>
          <LinkButton text="TikTok" url="https://www.tiktok.com/@sergiofernzv?is_from_webapp=1&sender_device=pc"/>
          <LinkButton text="Telegram" url="https://t.me/sergiofernandezvoficial"/>
          <LinkButton text="El mejor contenido 🔞" url="https://onlyfans.com/sergiofernandezv"/>
        </div>
        <div className="social-media">
          <a href="https://x.com/Sergiofernzv?mx=2">
            <img src="assets/x.jpg" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com/sergiofernandezv/?hl=es">
            <img src="assets/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://t.me/sergiofernandezvoficial">
            <img src="assets/telegram.jpg" alt="Telegram" />
          </a>
          <a href="https://www.tiktok.com/@sergiofernzv?is_from_webapp=1&sender_device=pc">
            <img src="assets/tiktok.jpg" alt="TikTok" />
          </a>
          <a href="https://onlyfans.com/sergiofernandezv">
            <img src="assets/only.png" alt="Only" />
          </a>
        </div>
      </div>
    </div>
  );
}

function LinkButton({ text, url }) {
  return (
    <a href={url} className="link-button" target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  );
}

export default App;