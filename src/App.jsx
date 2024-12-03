import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import WhyUs from './pages/WhyUs';
import OurWork from './pages/OurWork';
import AuthModal from './components/auth/AuthModal';
import './index.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-black">
          <AuthModal />
          <Routes>
            <Route element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="why-us" element={<WhyUs />} />
              <Route path="our-work" element={<OurWork />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;