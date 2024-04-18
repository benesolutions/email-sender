var config = require("./config.json");
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: config.SMTPServer,
  port: config.SMTPPort,
  secure: config.EnableSSL,
  auth: {
    user: config.SenderEmail,
    pass: config.SenderPassword,
  },
  tls: {
    rejectUnauthorized: false,
  },
  connectionTimeout: 5000,
});

var mailOptions = {
  from: config.SenderEmail,
  to: config.ReceiverEmail,
  subject: "Test sending Email using Node.js",
  html: "<h1>Welcome</h1><p>That was easy!</p>",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
