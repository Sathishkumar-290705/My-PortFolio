import React from 'react'

const EmailContact = () => {
  return<div className="mt-12 flex flex-col gap-4  pl-12">
        <p className="text-[#35332f] font-black text-6xl leading-snug w-full  ">
         Get in Touch 
        </p>

        <h3 className="text-6xl md:text-5xl font-extrabold">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-tan2
          
              underline underline-offset-8
              decoration-tan
              hover:decoration-tan2
              hover:text-tan2
              transition
            "
          >
            sathishkumar290705@gmail.com
          </a>
        </h3>
      </div>
}

export default EmailContact