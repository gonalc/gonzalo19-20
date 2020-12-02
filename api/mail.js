const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.mirror.studio',
    port: 587,
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: 'gonzalo-dev@mirror.studio',
        pass: process.env.GON_EMAIL_PSW,
    }
});

transporter.verify(function (error, success) {
    if (error) console.log(error);
    if (success) console.log(success);
});

module.exports = (req, res) => {
    if (req.body.message && req.body.message.length > 0 && !req.body.message.includes("http")) { // Basic seccurity check

        // Defining mail options
        let mailOptions = {
            from: req.body.email,
            replyTo: req.body.email,
            to: 'gonzaloalcaide@mirror.studio',
            subject: 'Buenos días! Alguien se puso en contacto contigo a través de tu web!',
            text: `Hola,
                ${req.body.name} se ha puesto en contacto contigo.
                -------------------------------------------------------
                Su mensaje es este:
                ${req.body.message}
                -------------------------------------------------------
                Y tu teléfono es: ${req.body.phone}`
        };

        let clientMailOptions = {
            from: 'Gonzalo Alcaide <gonzaloalcaide@mirror.studio>',
            replyTo: 'gonzaloalcaide@mirror.studio',
            to: req.body.email,
            subject: 'Gracias por ponerte en contacto conmigo',
            text: `Hola, ${req.body.name}.
                He recibido tu mensaje, recibirás una respuesta lo antes posible. O no. 
                Muchas gracias por ponerte en contacto conmigo.
                Gonzalo Alcaide`,
            html: '<!DOCTYPE html><html lang="en"><head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Gracias por contactar con nosotras | MoveLab</title> <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"> <style>html{height: 100%}body{font-family: "Lato", Verdana, Geneva, Tahoma, sans-serif}td{padding: 0}img{margin-bottom: -5px}@media screen and (min-width: 1000px){.container{padding: 0 30%}}</style></head><body style="height: 100%; margin: 0; box-sizing: border-box;"> <table class="container" style="background-color: #ACE4F1; width: 100%; height: 100%" cellspacing=0 cellpadding=0> <tr> <td> <table style="margin: auto; padding: 10px; width: 100%; height: 100%;" cellspacing=0 cellpadding=0> <tr> <td style="padding-top: 20px;"> <img style="width: 100%; height: auto; margin-bottom: -5px;" src="https://mirror.studio/img/mail/header.png" alt=""></td></tr><tr style="background-color: #FFFFFF; border-radius: 10px;"> <td style="text-align: center; color: #707070; box-sizing: border-box; padding: 20px;"> <p style="font-size: 24pt; margin: 40px 0;">¡Gracias, ' + req.body.name + '!</p><p style="font-size: 14pt; margin: 40px 0;">Te agradecemos que te hayas puesto en contacto con nosotros. Nuestro equipo está revisando tu solicitud, te responderemos lo antes posible.</p><p style="font-size: 14pt;">Mientras tanto puedes ver nuestros proyectos, seguro que alguno te llama la atención 😁.</p><a href="https://mirror.studio/proyectos" target="_blank"> <img style="width: 100%; height: auto; margin: 60px 0;" src="https://mirror.studio/img/mail/projects.png" alt=""> </a> <p style="font-size: 14pt;">Síguenos en nuestras redes sociales, nos gusta compartir diseños y tips de programación 😃.</p><table style="margin: auto;" cellspacing=0 cellpadding=0> <tr> <td> <a href="https://www.instagram.com/_mirrorstudio_" target="_blank"> <img style="width: 40px; height: auto; margin: 5px;" src="https://mirror.studio/img/mail/social-instagram.png" alt="Instagram"> </a> </td><td> <a href="https://www.linkedin.com/company/mirror-studio-digital" target="_blank"> <img style="width: 40px; height: auto; margin: 5px;" src="https://mirror.studio/img/mail/social-linkedin.png" alt="Linkedin"> </a> </td></tr></table style="margin: auto;"> </td></tr><tr></tr></table> </td></tr></table></body></html>'
        };

        transporter.sendMail(mailOptions, function (error) {
            if (error) {
                console.log(error);
                res.status(500).send(error.message);
            } else {
                console.log("Email enviao");
                res.status(200).json(req.body);
            }
        });

        transporter.sendMail(clientMailOptions, function (error) {
            if (error) {
                console.log(error);
                res.status(500).send(error.message);
            } else {
                console.log("Email cliente enviao");
                res.status(200).json(req.body);
            }
        });
    }

};