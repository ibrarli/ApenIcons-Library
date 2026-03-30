import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer'; // Import your new Footer

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        {/* Navigation Bar */}
        <NavBar />

        {/* Page Content */}
        {/* flex-grow ensures the main content pushes the footer down */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;