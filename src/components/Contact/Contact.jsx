import React from 'react';
import './Contact.css';
import {MdOutlineMail} from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { BsWhatsapp } from 'react-icons/bs';

const Contact = () => {
  return (
    <div>
               
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h6>cwanikarna@gmail.com</h6>
            <a href="https.cwanikarna@gmail.com" target='_blank' className='information'>Send a mail</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>React Learner</h5>
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJGLvddNgxNgHDqFJZmQdbVVxxWzTnXsGCHSrldxcDQclQdMbmwwSjjHdJqWSqlFXGkVV" target='_blank' className='information'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+977-9843887009</h5>
            <a href="https://wa.me/9843887009" target='_blank' className='information'>Ping me</a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <input type="text" name="subject" placeholder='Subject' required />
          <textarea name="message" rows="7" placeholder='Your Message' required>
          </textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>     
    </div>
  )
}

export default Contact