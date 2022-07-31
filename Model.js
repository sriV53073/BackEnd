const mongoose = require("mongoose");

const MailSchema = new mongoose.Schema({
  Subject: {
    type: String,
    required: true,
  },
  Body: {
    type: String,
    required: true,
  },
});

const Mail = mongoose.model("Mail", MailSchema);

module.exports = Mail;