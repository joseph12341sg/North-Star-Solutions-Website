import React, { useState, useEffect } from 'react';
import { Navigation, Footer, FloatingCTA } from './components/shared';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudy1 from './pages/CaseStudy1';
import CaseStudy2 from './pages/CaseStudy2';
import CaseStudy3 from './pages/CaseStudy3';
import CaseStudy4 from './pages/CaseStudy4';
import TeamPage from './pages/TeamPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [pageTransition, setPageTransition] = useState(true);

  const navigate = (page) => {
    setPageTransition(false);
    setTimeout(() => {
      setCurrentPage(page);
      setPageTransition(true);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 200);
  };

  useEffect(() => {
    // Handle browser back/forward if desired
    const handlePopState = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };
    window.addEventListener('popstate', handlePopState);

    // Set initial page from hash
    const initialHash = window.location.hash.replace('#', '');
    if (initialHash) setCurrentPage(initialHash);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    // Update hash when page changes
    window.location.hash = currentPage;
  }, [currentPage]);

  const renderPage = () => {
    const props = { onNavigate: navigate };
    switch (currentPage) {
      case 'home': return <HomePage {...props} />;
      case 'about': return <AboutPage {...props} />;
      case 'services': return <ServicesPage {...props} />;
      case 'case-studies': return <CaseStudiesPage {...props} />;
      case 'case-study-1': return <CaseStudy1 {...props} />;
      case 'case-study-2': return <CaseStudy2 {...props} />;
      case 'case-study-3': return <CaseStudy3 {...props} />;
      case 'case-study-4': return <CaseStudy4 {...props} />;
      case 'team': return <TeamPage {...props} />;
      case 'careers': return <CareersPage {...props} />;
      case 'contact': return <ContactPage {...props} />;
      default: return <HomePage {...props} />;
    }
  };

  return (
    <div className="min-h-screen bg-ns-bg">
      <Navigation currentPage={currentPage} onNavigate={navigate} />
      <main
        className="pt-16 md:pt-20"
        style={{
          opacity: pageTransition ? 1 : 0,
          transform: pageTransition ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        {renderPage()}
      </main>
      <Footer onNavigate={navigate} />
      <FloatingCTA onNavigate={navigate} />
    </div>
  );
}

export default App;
