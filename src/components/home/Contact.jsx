import React from "react";
import bannerContact from "../../assets/bannerContact.jpg";
const Contact = () => {
  return (
    <section className="py-20" id="Contact">
      <div className="container px-4 md:px-6 flex flex-col gap-5 md:flex-row justify-between items-center">
        <div className="">
          <h2 className="heading2">Drop Us A Line</h2>
          <p className="pt-3 pb-16 text-lg">
            Feel free to connect with us through our online channels for
            updates, news, and more.
          </p>
          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <div>
              <label htmlFor="fullName" className="text-lg font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="block p-3 border w-full rounded-full border-slate-200 mt-2"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-lg font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="block p-3 border w-full rounded-full border-slate-200 mt-2"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="py-4 grid gap-5 grid-cols-1 sm:grid-cols-2">
            <div>
              <label htmlFor="phone" className="text-lg font-medium">
                Phone Numbers
              </label>
              <input
                type="number"
                id="phone"
                className="block p-3 border w-full rounded-full border-slate-200 mt-2"
                placeholder="ex 012345678"
              />
            </div>
            <div>
              <label htmlFor="subject" className="text-lg font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 border w-full rounded-full border-slate-200 mt-2"
                placeholder="Enter Keyword"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="text-lg font-medium">
              Your Message
            </label>
            <textarea
              type="text"
              id="message"
              className="block h-[200px] p-3 border w-full rounded-md border-slate-200 mt-2"
              placeholder="Message"
            />
          </div>
        </div>
        <div>
          <img src={bannerContact} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
