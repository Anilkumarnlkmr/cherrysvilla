import React from 'react';
import { FaMapMarkerAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="bg-[#fdfaf6] py-16 px-6 md:px-16" id="contact">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#7B2C22] mb-10">Get in Touch with Us</h2>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Info Block */}
          <div className="space-y-6 text-left">
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-green-700 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-[#3a3a3a]">Our Address</h4>
                <p>
                  Handguli, Belur Sakleshpur Road,<br />
                 Handpost, Mudigere,<br /> Chikkamagaluru 577132  
                </p>
                <a
                  href="https://maps.app.goo.gl/LTCd5cBXdnab7evC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 underline mt-1 inline-block"
                >
                  View on Google Maps
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaWhatsapp className="text-green-600 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-[#3a3a3a]">WhatsApp</h4>
                <a href="https://wa.me/919449438553" target="_blank" rel="noopener noreferrer" className="block text-green-700">
                  +91 94494 38553
                </a>
                <a href="https://wa.me/918861024737" target="_blank" rel="noopener noreferrer" className="block text-green-700">
                  +91 88610 24737
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaInstagram className="text-pink-500 text-2xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg text-[#3a3a3a]">Instagram</h4>
                <a
                  href="https://www.instagram.com/cherrys_villa?igsh=MTdhbTJoYnlmdGMycA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600"
                >
                  @cherrys_villa
                </a>
              </div>
            </div>
          </div>

          {/* QR Code Block */}
          <div className="flex justify-center">
            <img
              src="/public/instaQr.jpg"
              alt="Instagram QR Code"
              className="rounded-xl w-60 shadow-lg border-4 border-[#7B2C22]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
