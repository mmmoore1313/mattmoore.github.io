import React from 'react'
import Layout from '../shared/layout'
import './style.scss'

const Contact = () => {
  return (
    <Layout>
      <div className='contact'>
        <h2>Contact Me</h2>
        
        <iframe
          title='fayettenam'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208978.2800253411!2d-79.09231615355961!3d35.074595513045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ab134f42924a23%3A0xa3ab9e7512763b9b!2sFayetteville%2C%20NC!5e0!3m2!1sen!2sus!4v1620637089594!5m2!1sen!2sus'
          frameBorder='0'
          allowFullScreen=''
          aria-hidden='false'
          tabIndex='0'
        ></iframe>
        
        <h4>email</h4>
        <p>email</p>
        
        <h4>LinkedIn</h4>
        <h4>Twitter</h4>
        <h4>GitHub</h4>
        
      </div>
    </Layout>
  )
}

export default Contact