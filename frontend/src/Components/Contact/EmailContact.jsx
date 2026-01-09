import React from 'react'

const EmailContact = () => {
  return<div className="mt-24 text-center">
        <p className="text-slate-400 text-lg mb-3">
          Prefer direct communication?
        </p>

        <h3 className="text-4xl md:text-5xl font-extrabold">
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-white
              underline underline-offset-8
              decoration-indigo-400
              hover:text-indigo-400
              transition
            "
          >
            sathishkumar290705@gmail.com
          </a>
        </h3>
      </div>
}

export default EmailContact