import React from "react";

const Contact = () => {
  return (
    <div className="contact_container">
      <h2>Want to work with me?</h2>
      <p className="contact_container__desc">
        I am well versed in client-side technologies, HTML, CSS, JavaScript and
        React. I am also familiar with some server-side frameworks like Laravel
        and Grails. I have built many user interfaces that no UI will be too
        hard for me to build. I strongly believe that all websites should be
        responsive and accessible to all. I also write technical articles on
        Frontend development.
      </p>
      <p>If you want to contact me follow link below</p>

      <div className="contact_block">
        <a href="https://github.com/Shorecut" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" />
        </a>
        <a href="#" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" />
        </a>
        <a href="#" target="_blank">
          <img src="https://cdn-icons-png.flaticon.com/128/1384/1384088.png" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
