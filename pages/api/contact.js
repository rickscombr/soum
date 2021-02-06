const nodemailer = require("nodemailer");

export default async (req, res) => {

    const { name, email, phone, hobby } = req.body;

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false, // true for 465, false for 587
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

    const mailOption = {
        from: `${process.env.EMAIL_USER}`,
        to: `${process.env.EMAIL_USER}`,
        subject: `Pré-cadastro SOU+`,
        text: `
            Nome: ${name} 
            E-Mail: ${email}
            Telefone: ${phone}
            Hobby: ${hobby}
        `,
    };

    transporter.sendMail(mailOption, (err, data) => {
        if (err) {
            console.log(err);
            res.send("error" + JSON.stringify(err));
        } else {
            console.log("E-Mail enviado com Sucesso");
            res.send("success: " & `${process.env.EMAIL_USER}` & " OK");
        }
    });
}