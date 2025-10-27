import { useState } from "react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ fullName: "", email: "", company: "", message: "" });
  };

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20 bg-[#0067B1]">
      <div className="max-w-4xl mx-auto">
        {/* Heading stays on top for all screens */}
        <div className="mb-12 text-start md:text-left">
          <h2 className="text-4xl md:text-5xl text-white mb-6 font-semibold">
            Get in touch
          </h2>
          <div className="w-12 h-1 bg-white  md:mx-0"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form - appears first on mobile */}
          <div className="order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full name"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-xl placeholder:text-white  focus:outline-none  pb-2 transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-xl placeholder:text-white focus:outline-none  pb-2 transition-colors"
                  required
                />
              </div>

              {/* Company */}
              <div>
                <input
                  type="text"
                  id="company"
                  placeholder="Company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-xl placeholder:text-white focus:outline-none  pb-2 transition-colors"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="message"
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-white text-white placeholder:text-xl placeholder:text-white focus:outline-none  pb-2 transition-colors resize-none"
                  rows={4}
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="px-8 py-2 w-full md:w-[141px] border border-white text-white hover:bg-white hover:text-black cursor-pointer font-medium rounded-full transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info - below form on mobile */}
          <div className="flex flex-col justify-start order-2 md:order-1 space-y-8">
            <div>
              <p className="text-2xl font-normal text-white mb-3">
                For general enquiries
              </p>
            </div>

            <div>
              <p className="text-xl text-white font-semibold mb-2">Address :</p>
              <p className="text-xl font-normal text-white">
                110, 16th Road, Chemour, Mumbai - 400071
              </p>
            </div>

            <div>
              <p className="text-xl text-white font-semibold mb-2">Phone :</p>
              <p className="text-xl font-normal hover:underline cursor-pointer text-white">
                +91 22.25208822
              </p>
            </div>

            <div>
              <p className="text-xl text-white font-semibold mb-2">Email :</p>
              <p className="text-xl hover:underline cursor-pointer font-normal text-white">
                info@supremegroup.co.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
