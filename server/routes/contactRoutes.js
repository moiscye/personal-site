const contactEmail = require("../services/emailTemplates/contactEmail");
// const Email = mongoose.model("emails");
const keys = require("../config/dev");
const sgMail = require("@sendgrid/mail");
module.exports = app => {
  app.get("/contact", (req, res) => {
    res.send("Thanks for Contacting");
  });

  app.post("/contact", async (req, res) => {
    const { name, surname, email } = req.body;
    console.log(req.body);

    sgMail.setApiKey(keys.sendGridKey);
    const msg = {
      to: "moiscye@gmail.com",
      from: email,
      subject: name + " " + surname,
      text: "message field",
      html: contactEmail(req.body)
    };
    sgMail.send(msg);
    res.send("success");
  });
};
