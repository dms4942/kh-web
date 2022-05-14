import React, { useState } from 'react';
import About from '../component/about';
import Contact from '../component/contact';
import Do from '../component/do';
import Footer from '../component/footer';
import Header from '../component/header';
import Title from '../component/title';

const Main = () => {
  const focusList = ['about', 'do', 'contact'];
  const [select, setSelect] = useState('');

  return (
    <div style={{ padding: 0 }}>
      <Header select={select} setSelect={setSelect} />
      <Title />
      <About />
      <Do />
      <Contact />
      <Footer />
    </div>
  );
};
export default Main;
