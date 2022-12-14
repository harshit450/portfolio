import React from 'react'
import "../stylesheets/contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {

    React.useEffect(() => {
        Aos.init({duration:2000});
    }, [])

    return (<>
        <article className="contact" id="contact" data-aos="flip-left"> 
        <div>
            <p className="p1">04. What's Next?</p>
            <h1>Get In Touch</h1>
            <p className="p2">
            Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!.</p>
            <a href="mailto:harshitsingh4500@gmail.com"><button>Say Hello</button></a>
        </div>
        </article>
        <section className="mobileOnly">
          <a href="https://github.com/harshit450/harshit450"><i class="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/harshitsingh4500"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://twitter.com/itsmelucifer__?s=08"><i class="fab fa-twitter"></i></a>
          <a href="https://www.instagram.com/_itsme_lucifer?r=nametag"><i class="fab fa-instagram"></i></a>
        </section>
        <div className="footer">
            <p>Theme and Design by Britaany | Modified and Devloped by Me</p>
        </div>
   </> )
}

export default Contact;
