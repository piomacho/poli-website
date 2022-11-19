import React from 'react';
import { initializeApp } from "firebase/app";
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
  const firebaseConfig = {
    apiKey: "AIzaSyDs1KAcZGOGRfZA4UgR1EZcFLg324Y1pIM",
    authDomain: "poli-website-5c5a7.firebaseapp.com",
    projectId: "poli-website-5c5a7",
    storageBucket: "poli-website-5c5a7.appspot.com",
    messagingSenderId: "288346354357",
    appId: "1:288346354357:web:4598e0c2178f177c60c4fc"
  };

  const app = initializeApp(firebaseConfig);
return (
    <Layout>
        <Metadata 
           description="Poli Social politics"
           keywords="politics"
           lang="en"
           title="Poli Social Politics"
        />
   
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
