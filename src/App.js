import React from 'react';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Welcome to my website</h1>
      <Navigation />
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

function Content() {
  return (
    <div>
      <h2>About Me</h2>
      <p>I'm a web developer based in San Francisco.</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Copyright © 2023</p>
    </footer>
  );
}

export default App;
