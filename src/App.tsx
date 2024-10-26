import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Careers from './pages/Careers';
import SignUp from './pages/SignUp';
import SignUpModal from './components/SignUpModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header openModal={openModal} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home openModal={openModal} />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </main>
        <Footer openModal={openModal} />
        <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </Router>
  );
};

export default App;