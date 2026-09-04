import React from 'react'

const EmailContact = ({ email }) => {
  return<div className="mt-12 flex flex-col gap-4 pl-12">
        <p className="w-full text-6xl font-black leading-snug text-[#1f1f1f]">
         Get in Touch 
        </p>

        <h3 className="text-6xl font-extrabold md:text-5xl">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className=" email_contact text-[#1f1f1f] underline decoration-gray underline-offset-8 transition hover:text-[#1f1f1f] hover:decoration-charCoal"
          >
            {email}
          </a>
        </h3>
      </div>
}

export default EmailContact