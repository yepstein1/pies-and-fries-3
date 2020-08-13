
exports.handler =async event => {
 
    // using Twilio SendGrid's v3 Node.js Library
    // https://github.com/sendgrid/sendgrid-nodejs
    const sgMail = require('@sendgrid/mail');
  
    sgMail.setApiKey(process.env.REACT_APP_SENDGRID);


    const msg = {
      to: 'pizzaduringcovid@gmail.com',
      from: 'pizzaduringcovid@gmail.com',
      subject: 'Sending with Twilio SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    (async () => {
        try {
          await sgMail.send(msg);
        }   catch (error) {
          console.error(error);
      
          if (error.response) {
            console.error(error.response.body)
          } 
        }
      })();


     
    
   
  }
  

