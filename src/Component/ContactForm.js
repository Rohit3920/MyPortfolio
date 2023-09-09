// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// export const ContactForm = () => {
//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();
//         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current,
//             'YOUR_PUBLIC_KEY')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//     };

//     return (
//         <form ref={form} onSubmit={sendEmail}>
//             <label>Name</label>
//             <input type="text" name="user_name" />
//             <label>Email</label>
//             <input type="email" name="user_email" />
//             <label>Message</label>
//             <textarea name="message" />
//             <input type="submit" value="Send" />
//         </form>
//     );
// };


// import React from 'react'

// const ContactForm = () => {
//     return (
//         <div>
//             <form>
//                 <div className="mb-3">
//                     <label for="exampleInputEmail1" className="form-label">Email address</label>
//                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//                 </div>
//                 <div className="mb-3">
//                     <label for="exampleInputPassword1" className="form-label">Password</label>
//                     <input type="password" className="form-control" id="exampleInputPassword1"/>
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default ContactForm


import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        // You can add email sending logic here using a backend service or API.
        // This is just a placeholder.
        console.log('Form data:', formData);
        // Clear the form fields after submission
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <div id='contactForm' className='w-75 m-auto border py-5 bg-info'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name :</label>
                    <input
                        className="m-2 p-2"
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email : </label>
                    <input
                        className="m-2 p-2"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    {/* <label htmlFor="message">Message</label> */}
                    <textarea
                        className="m-2 p-2"
                        id="message"
                        name="message"
                        placeholder='message'
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button className='btn btn-danger' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;

