import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <Router>
      {/* 
        Added 'dark:bg-slate-950' and 'dark:text-slate-100'
        Added 'transition-colors duration-300' for a smooth fade effect 
      */}
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
        <NavBar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;