const mongoose = require("mongoose");

const certificatesSchema = new mongoose.Schema({
  certId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  fromDate: {
    type: Date,
    required: true,
  },
  toDate: {
    type: Date,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Certificate = mongoose.model("Certificate", certificatesSchema);

module.exports = Certificate;
