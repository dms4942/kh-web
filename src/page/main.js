import React from 'react'
import About from '../component/about'
import Contact from '../component/contact'
import Header from '../component/header'
import Title from '../component/title'

const Main = () => {
    return (
        <div>
            <Header />
            <Title />
            <About/>
            <Contact/>
        </div>
    )
}
export default Main
