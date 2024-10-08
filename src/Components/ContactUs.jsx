import React from 'react'
import './ContactUs.css'
import Swal from 'sweetalert2';
const ContactUs = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1f8b981a-7158-4e7e-81db-6c2008b1c0b4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "You Message sent Successfully!",
        icon: "success"
      });
    }
  };


  return (
 <section className='contact'>
  <form onSubmit={onSubmit}>
  <h2>Cᴏɴᴛᴀᴄᴛ Mᴇ</h2>
  <div className="input-box">
    <label>Full Name</label>
    <input type="text" className="field" name='name' placeholder='Enter your name' required />
  </div>
  <div className="input-box">
    <label>Email</label>
    <input type="email" className="field" name='email' placeholder='Enter your email' required />
  </div>
  <div className="input-box">
    <label>Message</label>
    <textarea name="message" id="" className="field mess"  placeholder='Enter your message' required></textarea>
  </div>
  <button type='submit'>Send Message</button>
  </form>
 </section>
  )
}

export default ContactUs
