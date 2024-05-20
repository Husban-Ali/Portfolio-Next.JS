import React from 'react';
import Image from 'next/image';

function Contact() {
  return (
    <section className="py-6 dark:bg-black" id="Contact">
      <h4 className="contact">Contact</h4>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-white">
        <div className="flex flex-col justify-between">
          <div className="space-y-2">
            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
            <div className="dark:text-gray-600">Vivamus in nisl metus? Phasellus.</div>
          </div>
          <div className="p-6 h-52 md:h-64 relative">
            <Image src="/contact.svg" alt="Contact illustration" layout="fill" objectFit="contain" />
          </div>
        </div>
        <form noValidate="" className="space-y-6">
          <div>
            <label htmlFor="name" className="text-sm">Full name</label>
            <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-100" />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">Email</label>
            <input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-100" />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">Message</label>
            <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-100"></textarea>
          </div>
          <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-600 dark:text-gray-50">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
