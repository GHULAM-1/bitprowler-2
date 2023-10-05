export async function POST() {
    
        // Use at least Nodemailer v4.1.0
    const nodemailer = require('nodemailer');

    // Generate SMTP service account from ethereal.email
    
      

        console.log('Credentials obtained, sending message...');

        //Create a SMTP transporter object
        const transporter = nodemailer.createTransport({
            host: 'smtp-relay.brevo.com',
            port: 587,
            auth: {
                user: 'ilyasghulam35@gmail.com',
                pass: 'EcT0GfHjCUqKNSW4'
            }
        });

        // const transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: 'ilyasghulam35@gmail.com',
        //         pass: 'lahore@0307', // Use your Gmail account password here
        //     },
        // });

        // Message object
        let message = {
            from: 'ghulam@bitprowler.com',
            to: 'ilyasghulam35@gmail.com ',
            subject: 'sex machines',
            text: '',
            html: '<p>acha bois ye wo functionaliy ha jis kay baray main baat kr raha tha ... jaisay user form submit kr day ga waisay hi aik email hum sab ko or aik client ko chala jae ga ... main tum sabkay university , bitprowler or personal email pay mail ki ha ye ... is ka reply karna agr sab ka reply aa gaya to form functionality sex chal rahi ha ... or achi baat ye kay free tier pe 200 email per day ha ....REPLY ZAROOR KARNA HAR ACCOUNT SAY </p>'
        };

        transporter.sendMail(message, (err:any, info:any) => {
            if (err) {
                console.log('Error occurred. ' + err.message);
                return process.exit(1);
            }

            
        });
    

    return Response.json({
        success:true
    })
  }