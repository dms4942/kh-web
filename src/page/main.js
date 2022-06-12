import React, { useState } from 'react';
import About from '../component/about';
import Contact from '../component/contact';
import Service from '../component/service';
import Footer from '../component/footer';
import Header from '../component/header';
import Title from '../component/title';

const Main = () => {
  const [select, setSelect] = useState('');

  return (
    <div style={{ padding: 0 }}>
      <Header select={select} setSelect={setSelect} />
      <Title />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};
export default Main;
