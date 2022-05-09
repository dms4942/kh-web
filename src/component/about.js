import { Grid } from '@material-ui/core'
import React from 'react'
import { AboutContainer } from '../style/aboutStyle'
import icon01 from '../img/icon01.png'

const About = () => {
    const title = [{
        title: 'Record Export',
        children: [{ icon: icon01, title: 'Records Export', content: 'We export albums and beats created in Korea to American music agencies and producers.' },
        { icon: icon01, title: 'Record Publish', content: 'We assist you on how to release albums to both online and offline markets in the US.' },
        { icon: icon01, title: 'Management', content: '계약(발매) 이후 미국 agency (프로듀서)와 지속적인 소통을 도와드립니다.' }]
    }, {
        title: 'Line-Production', children: [{ icon: '', title: '', content: '' },
        { icon: '', title: '', content: '' },
        { icon: '', title: '', content: '' }]
    }, {
        title: 'Blogging& website', children: [{ icon: '', title: '', content: '' },
        { icon: '', title: '', content: '' },
        { icon: '', title: '', content: '' }]
    }, {
        title: 'Translation Service', children: [{ icon: '', title: '', content: '' },
        { icon: '', title: '', content: '' },
        { icon: '', title: '', content: '' }]
    }]

    return (
        <AboutContainer>
            <div style={{ width: '90%' }}>

                <p>about us</p>
                <p>‘KH Solution’ is a ‘One Stop Shop’ comprehensive solution firm that is active in
                    various fields</p>
                <p>such as music export, TV production local coordination, and
                    blogging targeting the US market.</p>
            </div>
            <div style={{ flexDirection: "row", marginTop:"30px" }}>
                {title.map((item) => { return (<span style={{ padding: "10px" }}>{item.title}</span>) })}
                <div style={{display: "flex", flexDirection: "row",justifyContent:"center",marginTop:"20px" }}>

                    {title[0].children.map((child) => {
                        return (
                            <div style={{width:"20%"}}>
                                <img src={child.icon} style={{width:"150px"}}/>
                                <p>{child.title}</p>
                                <p>{child.content}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </AboutContainer>
    )
}

export default About
