import React from 'react'
import SectionHead from '../Component/SectionHead'
import SocialMedia from '../Component/SocialMedia'
import ContactForm from '../Component/ContactForm'
import DirectContact from '../Component/DirectContact'

const Contact = () => {
    return (
        <div id='ContactContent'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <SectionHead name='Contact Us' />
                    </div>
                    <div className="col-12 my-5">
                        <ContactForm />
                    </div>

                    <div className="col-12 my-5">
                        <DirectContact />
                    </div>

                    <div className="col-12 my-5">
                        <SocialMedia />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
