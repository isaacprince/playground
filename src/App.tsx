import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import PageAnimations from './components/PageAnimations';
import HomePage from './pages/HomePage';
import CravingsCaseStudy from './pages/caseStudies/CravingsCaseStudy';
import IndaoCaseStudy from './pages/caseStudies/IndaoCaseStudy';
import NdsCaseStudy from './pages/caseStudies/NdsCaseStudy';
import OnademaCaseStudy from './pages/caseStudies/OnademaCaseStudy';
import EditorialCaseStudy from './pages/caseStudies/EditorialCaseStudy';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL || ''}>
      <PageAnimations />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/cravings" element={<CravingsCaseStudy />} />
        <Route path="/case-studies/indao" element={<IndaoCaseStudy />} />
        <Route path="/case-studies/nds" element={<NdsCaseStudy />} />
        <Route path="/case-studies/onadema" element={<OnademaCaseStudy />} />
        <Route path="/case-studies/editorial" element={<EditorialCaseStudy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
