import React from 'react';
import About from '../component/about';
import Contact from '../component/contact';
import Do from '../component/do';
import Footer from '../component/footer';
import Header from '../component/header';
import Title from '../component/title';
import { Size } from '../style/globalStyle';

const Main = () => {
  return (
    <div style={{ padding: 0 }}>
      <Header />
      <Title />
      <About />
      <Do />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
};
export default Main;
