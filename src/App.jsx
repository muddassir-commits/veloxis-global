import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundDecor from './components/layout/BackgroundDecor';
import ScrollToTop from './components/layout/ScrollToTop';
import './styles/variables.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const AIAutomation = lazy(() => import('./pages/services/AIAutomation'));
const N8nWorkflows = lazy(() => import('./pages/services/N8nWorkflows'));
const AILeadGeneration = lazy(() => import('./pages/services/AILeadGeneration'));
const AIWebsites = lazy(() => import('./pages/services/AIWebsites'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

// Loading fallback component
const PageLoader = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary, #00f0ff)' }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <BackgroundDecor />
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/ai-automation-services" element={<AIAutomation />} />
              <Route path="/n8n-workflow-automation" element={<N8nWorkflows />} />
              <Route path="/ai-lead-generation-services" element={<AILeadGeneration />} />
              <Route path="/ai-website-development" element={<AIWebsites />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
