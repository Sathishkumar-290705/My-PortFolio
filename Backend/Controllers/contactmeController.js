const {transporter} = require("../Config/email");



const contactData = async (req,res) =>{

    try{

        
        const {name , email , contactNumber , subject , message } = req.body;
        
        if(!name || !email || !contactNumber || !subject || !message){
            return res.status(400).json({message : "all fields are required "});
        }
        
        const mailOptions = {
            from : email , 
            to : process.env.EMAIL_USER,
            subject: `Port folio contact ${subject}`,
            html : `<h3>New Contact Message</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>`,
        }
        
        await transporter.sendMail(mailOptions)
        
        res.status(200).json({
            success : true , 
            message : "Email send successfully "
        })
        
    }catch(error){
        console.error("Email error",error);
        
        res.status(500).json({
            success : false , 
            message : "Internal server error "
        })
    }
}

module.exports = {contactData}