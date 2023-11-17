import React from 'react'
import './ContactForm.css'

const ContactForm = () => {
  return (
    <>
    <div className="container">
        <form>
            <h3>Contact</h3>
            <input type="text" className="name" placeholder="Your Name" required/>
            <input type="email" className="email" placeholder="Your Email" required/>
            <input type="text" className="phone" placeholder="Your Cell Number" required/>
            <textarea className="message" rows="4" placeholder='Whats on your mind'></textarea>
            <button type="submit">Submit</button>
        </form>
    </div>
    </>
  )
}

export default ContactForm