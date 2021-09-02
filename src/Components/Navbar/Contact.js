import React from 'react';
import "./Contact.css";
import { VscLocation,VscCallIncoming,VscComment } from "react-icons/vsc";

function Contact() {
    return (
    <div className="contact">
        <div className="content">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, necessitatibus. Totam, harum tempore minima hic quibusdam alias consequatur sunt ipsa ab sed unde, nisi dolore quis mollitia iusto amet earum velit
             necessitatibus vitae cumque nesciunt itaque aliquam veniam! Consectetur recusandae dolorum vero totam quo debitis.</p>
        </div>
        <div className="container">
            <div className="contactInfo">
            <div className="contact-box">
                    <div className="icon"><VscLocation/></div>
                    <div className="text">
                        <h3>Address</h3>
                        <p>evide 00000 <br/> angadil<br/> nattil</p>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="icon"><VscCallIncoming/></div>
                    <div className="text">
                        <h3>Phone</h3>
                        <p>000-0000-000</p>
                    </div>
                </div>
                <div className="contact-box">
                    <div className="icon"><VscComment/></div>
                    <div className="text">
                        <h3>Email</h3>
                        <p>aBc@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contactForm">
                <form action="">
                    <h2>Send Message</h2>
                    <div className="inputBox">
                        <input type="text" name="" required="requierd" />
                        <span>Full Name</span>
                    </div>
                    <div className="inputBox">
                        <input type="text" name="" required="requierd" />
                        <span>Email</span>
                    </div>
                    <div className="inputBox">
                        <textarea required="required"></textarea>
                        <span>Type your message here...</span>
                    </div>
                    <div className="inputBox">
                        <input type="submit" name="" value="send" />
                    </div>
                </form>
            </div>
        </div>
    </div>
       
    )
}

export default Contact
