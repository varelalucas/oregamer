export default function (req, res) {
  try {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,
      host: 'smtp.gmail.com',
      auth: {
        user: 'discord.luccas@gmail.com',
        pass: 'ctkifucgamvkqbjg'
      },
      secure: true
    })

    const mailData = {
      from: 'french.dev100@gmail.com',
      to: 'varelalucas4712@gmail.com',
      subject: `Solicitação de contato | ${req.body.name}`,
      html: `<b>Nova solicitação de contato!</b><br><p><b>Email: ${req.body.email}</b></p><p><b>Nome: ${req.body.name}</b><p>Mensagem: ${req.body.message}</p></p>`
    }

    transporter.sendMail(mailData, function (err, info) {
      if (err) console.log(err)
      else console.log('O E-mail foi enviado com sucesso')
    })

    return {
      error: false,
      message: 'E-mail enviado com sucesso'
    }
  } catch (err) {
    console.log(err)
  }
}
