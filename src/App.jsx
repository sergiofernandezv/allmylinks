import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>My Test Project Demo</h1>
        <div className="links">
          <LinkButton text="X - Twitter" url="https://instagram.com"/>
          <LinkButton text="Instagram" url="https://instagram.com"/>
          <LinkButton text="Tik tok" url="https://instagram.com"/>
          <LinkButton text="Telegram" url="https://instagram.com"/>
        </div>
        <div className="social-media">
          <a href="https://facebook.com">
            <img src="/assets/x.jpg" alt="Facebook" />
          </a>
          <a href="https://instagram.com">
            <img src="/assets/instagram.jpg" alt="Instagram" />
          </a>
          <a href="https://instagram.com">
            <img src="/assets/telegram.jpg" alt="Instagram" />
          </a>
          <a href="https://instagram.com">
            <img src="/assets/tiktok.jpg" alt="Instagram" />
          </a>
          <a href="https://instagram.com">
            <img src="/assets/fondo.jpg" alt="Instagram" />
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