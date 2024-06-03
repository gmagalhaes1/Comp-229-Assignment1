import React from 'react'
import './contact.css'
import Client1 from "../../assets/client1.png"
import LinkedIn from "../../assets/likedin.png"

const Contact = () => {
  return (
    
    <section id="contactPage">
        <div id='clients'>
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">Previous experiences
            </p>
            <div className="clientImg">
                <img src={Client1} alt="Client1" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Send me a message</span>
            <form className='contactForm'>
                <input type="text" className="name" placeholder='Your Name'/>
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea name="message" className="msg" rows="10" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                   

                    <a href="https://www.linkedin.com/in/gessia-conrado-792513229/" target="_blank" rel="noopener noreferrer">
                    <img src={LinkedIn} alt="LinkedIn Profile" className="link" />
                    </a>

                </div>


            </form>

        </div>

    </section>

  )
}

export default Contact