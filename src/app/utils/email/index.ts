import nodemailer from "nodemailer";
import dotenv from "dotenv";
// import Response from './../helpers/Response';
// import { ServerResponse } from 'http';

dotenv.config();

const sendEmail = (mailOptions: {
  email: string;
  subject: string;
  message: string;
}) => {
  const transporter = nodemailer.createTransport({
    host: process.env.TRANSPORTER_SERVICE,
    port: 465,
    auth: {
      user: process.env.SERVICE_USERNAME,
      pass: process.env.SERVICE_PASSWORD,
    },
    secure: true,
    logger: false,
    debug: true,
  });
  const Options = {
    from: `Rinda-Xross <${process.env.SERVICE_USERNAME}>`,
    to: mailOptions.email,
    subject: mailOptions.subject,
    html: mailOptions.message,
  };
  return transporter.sendMail(Options, (error) => {
    if (error) {
      // return Response.error(res:ServerResponse,402,{
      //   message:"email failed to be sent",
      //   error:error.message
      // })
      console.log(error.message);
    }
  });
};

export default sendEmail;
