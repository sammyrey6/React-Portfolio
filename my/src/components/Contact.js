import React from 'react';

const Contact = () => {
  const address = '11509 Potter St., Norwalk, California 90650';
  const phoneNumber = '(562)-739-6527';
  const email = 'samuelrey.carag@gmail.com';

  return (
    <section className="contact">
      <h2>Contact Information</h2>
      <p>Address: {address}</p>
      <p>Phone Number: {phoneNumber}</p>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
    </section>
  );
};

export default Contact;
