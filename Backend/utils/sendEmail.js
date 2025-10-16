const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'priyal30patel@gmail.com', 
      pass: 'vrvk jhhk yxbp pooa', 
    },
  });

  const mailOptions = {
    from: 'priyal30patel@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };