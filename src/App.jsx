import React from 'react';
import HeroVideo from './components/HeroVideo';
import EmailCapture from './components/EmailCapture';
import ComingSoon from './components/ComingSoon';
import Benefits from './components/Benefits';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-stone-50 via-stone-50 to-stone-100 text-stone-800">
      <div className="mx-auto max-w-7xl">
        <HeroVideo />
        <EmailCapture />
        <ComingSoon />
        <Benefits />
        <footer className="px-6 md:px-10 pb-10 text-center text-stone-400 text-sm">
          © {new Date().getFullYear()} — Crafted with calm intention
        </footer>
      </div>
    </div>
  );
}

export default App;
