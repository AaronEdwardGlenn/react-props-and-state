import React from 'react';
import Madlib from '../containers/Madlib';
import Header from '../components/HeaderFooter/Header';
import Footer from '../components/HeaderFooter/Footer';

export default function App() {
  return (
    <>
      <Header />
      <Madlib />
      <Footer />
    </>
  );
}
