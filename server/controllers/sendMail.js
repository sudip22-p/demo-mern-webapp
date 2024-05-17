import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
const sendMail = async (req, res) => {
    const data = req.body.emailData;
    
    // Create data object with required fields
    const emailData = {
        to: data.to,
        subject: data.subject,
        text: data.text
    };
    try {
        // Create a transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USERNAME, // Your email address
                pass: process.env.EMAIL_PASSWORD // Your password
            }
        });

        // Set up email data
        let mailOptions = {
            from: process.env.EMAIL_USERNAME, 
            to: emailData.to,
            subject: emailData.subject, 
            text: emailData.text 
        };

        // Send email
        let info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        res.status(200).send('success');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('error');
    }
};

export default sendMail;
