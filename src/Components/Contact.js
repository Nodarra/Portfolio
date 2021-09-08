import React from 'react'

function Contact() {
    return (
        <div className="contact">
            <div className="heading">CONTACT </div>
            <div className="inner">
                <div className="name">CONTACT ME</div>
                <form>
                    <input name="email" type="email" placeholder="E-mail"></input>
                    <input name="name" type="text" placeholder="Name"></input>
                    <input name="text" type="text" placeholder="..."></input>
                    <button className="btn3"> SEND MESSAGE</button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact
