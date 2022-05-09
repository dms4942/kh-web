import React from 'react'
import { ContactContainer } from '../style/contactStyle'
import main from '/Users/jeong-eunji/Desktop/dev/kh-web/src/img/main.jpg'

const Contact = () => {
    return (
        <ContactContainer>
            <p>contact</p>
            <div style={{width:"80%",display:"flex",flexDirection:"row", justifyContent:"space-between",marginTop:"100px"}}>
                <div>

                    <p>Phone number</p>
                    <p>+1-917-683-1919               (US)</p>
                    <p>+82-010-2669-1206              (KR)</p>

                    <p>e-mail</p>
                    <p>khsolution95@gmail.com</p>
                </div>
                <div>
                    <img src={main} style={{ width: "400px" }} /></div>
            </div>
        </ContactContainer>
    )
}
export default Contact