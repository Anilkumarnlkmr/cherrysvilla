import React from "react";
import Cherrys from '../public/Images/Cherrys.svg'
import ImageGallery from './Images.jsx';
import ContactUs from './ContactUs.jsx';
import { FaMountain, FaKey, FaConciergeBell, FaMapMarkedAlt, FaGamepad, FaGlassCheers, FaTv, FaChild, FaUmbrellaBeach, FaBinoculars, FaHorse, FaParking, FaUtensils, FaBuilding, FaTree, FaHiking, FaFire, FaLock } from 'react-icons/fa';

const amenities = [
  { icon: <FaMountain />, label: 'Valley View' },
  { icon: <FaKey />, label: '24 Hour Security' },
  { icon: <FaConciergeBell />, label: 'Room Service' },
  { icon: <FaMapMarkedAlt />, label: 'Travel Desk' },
  { icon: <FaGamepad />, label: 'Gaming Zone' },
  { icon: <FaTv />, label: 'LCD TV' },
  { icon: <FaChild />, label: 'Kids Play Area' },
  { icon: <FaUmbrellaBeach />, label: 'Smoking Zone Umbrella' },
  { icon: <FaBinoculars />, label: 'Sight Seeing Arrangements' },
  { icon: <FaHorse />, label: 'Activity Center' },
  { icon: <FaKey />, label: 'Valet Parking' },
  { icon: <FaUtensils />, label: 'Restaurant' },
  { icon: <FaBuilding />, label: 'Conference Room' },
  { icon: <FaTree />, label: 'Lawn' },
  { icon: <FaHiking />, label: 'Trekking' },
  { icon: <FaFire />, label: 'Camp Fire' },
  { icon: <FaLock />, label: 'In-Room Safe' },
];

const App = () => {
  return (
    <main className="font-sans bg-white text-gray-800">
      <header className="bg-green-800 text-white p-6 shadow-lg flex">
      <img src={Cherrys} alt="Cherry's Villa" className="w-40 object-cover rounded-lg mb-4  " />
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold">Cherry’s Villa</h1>
          <p className="mt-2 text-lg">Experience serenity in the heart of nature</p>
          <nav className="mt-4 space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#gallery" className="hover:underline">Gallery</a>
            <a href="#amenities" className="hover:underline">Amenities</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>

      <section id="about" className="p-10 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">
            Cherry’s Villa is a peaceful homestay surrounded by lush greenery. We offer cozy rooms,
            homemade food, and a truly local experience nestled in the hills.
          </p>
        </div>
      </section>
      <ImageGallery />

      {/* <section id="gallery" className="p-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <img
                key={i}
                src={`https://source.unsplash.com/600x400/?villa,nature,${i}`}
                alt={`Scenic view of Cherry’s Villa - ${i}`}
                loading="lazy"
                className="rounded-lg shadow-lg hover:scale-105 transition duration-300"
              />
            ))}
          </div>
        </div>
      </section> */}
      <section className="bg-white py-16 px-6 md:px-20" id="amenities">
      <h2 className="text-3xl font-semibold text-center text-[#7B2C22] mb-10 uppercase tracking-wide">
        Villa Amenities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
        {amenities.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="text-green-600 text-3xl">{item.icon}</div>
            <span className="text-gray-900 font-semibold text-lg">{item.label}</span>
          </div>
        ))}
      </div>
    </section>

      {/* <section id="booking" className="p-10 bg-gray-50">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Booking Form</h2>
          <form className="bg-white p-6 rounded-lg shadow-md space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" required />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded" required />
            <input type="date" className="w-full p-3 border rounded" required />
            <input type="number" placeholder="Guests" className="w-full p-3 border rounded" required />
            <textarea placeholder="Special Requests" className="w-full p-3 border rounded" rows="4"></textarea>
            <button type="submit" className="w-full bg-green-800 text-white py-3 rounded hover:bg-green-900">
              Book Now
            </button>
          </form>
        </div>
      </section> */}

      {/* <section id="contact" className="p-10 bg-white">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-6">Contact Us</h2>
          <form className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md">
            <input type="text" placeholder="Your Name" className="w-full p-3 border rounded" required />
            <input type="email" placeholder="Your Email" className="w-full p-3 border rounded" required />
            <textarea placeholder="Your Message" className="w-full p-3 border rounded" rows="4" required></textarea>
            <button type="submit" className="w-full bg-green-800 text-white py-3 rounded hover:bg-green-900">
              Send Message
            </button>
          </form>
        </div>
      </section> */}

<ContactUs />
      <footer className="bg-green-900 text-white text-center py-4 mt-10">
        <p>&copy; 2025 Cherry’s Villa. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default App;