import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import logo from './logo.svg';
import { Footer } from '../src/components/footer/footer';
import { Layout } from '../src/components/layout';
import { MainContent } from '../src/components/main-content/main-content';
import { Metadata } from '../src/components/seo/Seo';
import './App.css';
import { Terms } from 'components/terms/terms';
import { PrivacyPolicy } from 'components/terms/policy';
import { Wrapper } from 'components/ScrollWrapper';


function App() {

return (
    <Layout>
        <Metadata />
   
        <Wrapper>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="terms" element={<Terms/>} />
          <Route path="privacy-policy" element={<PrivacyPolicy/>} />
        </Routes>
    </Wrapper>
        <Footer />
    </Layout>
  );
}

export default App;
