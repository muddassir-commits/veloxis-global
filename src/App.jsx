import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BackgroundDecor from './components/layout/BackgroundDecor';
import ScrollToTop from './components/layout/ScrollToTop';
import AnalyticsTracker from './components/seo/AnalyticsTracker';
import { routesConfig } from './app/routes';
import './styles/variables.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Blog = lazy(() => import('./pages/Blog'));

// New dynamic templates
import CMSController from './components/cms/CMSController';

// Loading fallback component
const PageLoader = () => (
  <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary, #00f0ff)' }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="app-container">
        <ScrollToTop />
        <BackgroundDecor />
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Static Foundation Routes */}
              <Route path={routesConfig.home.path} element={<Home />} />
              <Route path={routesConfig.about.path} element={<About />} />
              <Route path={routesConfig.services.path} element={<Services />} />
              <Route path={routesConfig.projects.path} element={<Projects />} />
              <Route path={routesConfig.projectDetail.path} element={<ProjectDetail />} />
              <Route path={routesConfig.blog.path} element={<Blog />} />
              <Route path={routesConfig.contact.path} element={<Contact />} />
              
              {/* 
                Fully Dynamic CMS Routing Architecture 
                Replaces all hardcoded markdown page routes. 
                React Router gracefully prioritizes the explicit static routes above before falling through to these.
              */}
              <Route path="/:collection/:slug" element={<CMSController />} />
              
              {/* 
                Root wildcard to catch legacy service URLs (e.g. /ai-automation-services).
                If the slug doesn't exist in the CMS, CMSController will safely render the SEO-safe NotFound template.
              */}
              <Route path="/:slug" element={<CMSController />} />

            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;



