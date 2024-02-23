const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Certificate = require("../schema/certificates");
router.get("/", (req, res) => {
  res.send("hello this is hari from server");
});

// Create a new certificate
router.post("/certificates", async (req, res) => {
  const { name, fromDate, toDate, email } = req.body;
  if (!name || !fromDate || !toDate || !email) {
    return res.status(422).json({ error: "Please fill all the details" });
  }
  try {
    const certificate = new Certificate({ name, fromDate, toDate, email });
    await certificate.save();
    res.status(201).json({ message: "Certificate created successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Get all certificates
router.get("/certificates", async (req, res) => {
  try {
    const allCertificates = await Certificate.find();
    res.json(allCertificates);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a certificate
router.delete("/certificates/:id", async (req, res) => {
  try {
    const certificateId = req.params.id;

    // Check if the certificate exists
    const certificate = await Certificate.findById(certificateId);
    if (!certificate) {
      return res.status(404).json({ error: "Certificate not found" });
    }

    // Delete the certificate
    await certificate.remove();

    res.status(200).json({ message: "Certificate deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
