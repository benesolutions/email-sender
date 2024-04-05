# email-sender

PoC for send email using NodeJS

## Setup

- Install node packages with command `npm i`
- Set the SMTP server, port, sender and receiver email in [config.json](/config.json)

  ```json
  {
    "SMTPServer": "mailrelay.domain.go.th",
    "SMTPPort": 587,
    "SenderEmail": "sender@email.com",
    "SenderPassword": "senderpassword",
    "EnableSSL": false,
    "ReceiverEmail": "receiver@email.com"
  }
  ```

## Send email

Run script to send email with command `node index.js`.
