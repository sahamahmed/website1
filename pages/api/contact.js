import nodemailer from "nodemailer";


export default async function ContactAPI(req, res) {
  const { name, email, message } = req.body;


  const data = {
    name,
    email,
    message,
  };

  // Use environment variable for password
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "feedbackcompany606@gmail.com",
      pass: 'zkui nyhp qdkr eqcc',
    },
  });

  try {
    const mail = await transporter.sendMail({
      from: "feedbackcompany606@gmail.com",
      to: "feedbackcompany606@gmail.com",
      replyTo: email,
      subject: `Contact form submission from ${name}`,
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    console.log("Message sent: ", mail.messageId);
  
    return res.status(200).json({ message: "Your message has been sent successfully." });
  } catch (error) {
    console.log(error);
    let errorMessage = "An error occurred while sending your message. Please try again later.";
    if (error.code === "400") {
      errorMessage = "Invalid email address provided.";
    }

    return res.status(500).json({ message: errorMessage });
  }
}