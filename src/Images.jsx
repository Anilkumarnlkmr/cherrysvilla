import React from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import Img from '../public/';

// Plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Replace with your actual image paths
// const images = [
//   '/Images/Gallary/pic1_1.jpg','/Images/Gallary/pic1.jpg', '/Images/Gallary/pic1.jpg', '/Images/Gallary/pic2.jpg',
//   '/Images/Gallary/pic3.jpg', '/Images/Gallary/pic4.jpg', '/Images/Gallary/pic5.jpg',
//     '/Images/Gallary/pic6.jpg', '/Images/Gallary/pic7.jpg', '/Images/Gallary/pic8.jpg',
//     '/Images/Gallary/pic9.jpg', '/Images/Gallary/pic10.jpg', '/Images/Gallary/pic11.jpg',
//     '/Images/Gallary/pic12.jpg', '/Images/Gallary/pic13.jpg', '/Images/Gallary/pic14.jpg',
//     '/Images/Gallary/pic15.jpg', '/Images/Gallary/pic16.jpg', '/Images/Gallary/pic17.jpg',
//     '/Images/Gallary/pic18.jpg', '/Images/Gallary/pic19.jpg', '/Images/Gallary/pic20.jpg',
//     '/Images/Gallary/pic21.jpg', '/Images/Gallary/pic22.jpg', '/Images/Gallary/pic23.jpg',
//     '/Images/Gallary/pic24.jpg', '/Images/Gallary/pic25.jpg', '/Images/Gallary/pic26.jpg',
//     '/Images/Gallary/pic27.jpg', '/Images/Gallary/pic28.jpg', '/Images/Gallary/pic29.jpg',
//     '/Images/Gallary/pic30.jpg', '/Images/Gallary/pic31.jpg', '/Images/Gallary/pic32.jpg',
//     '/Images/Gallary/pic33.jpg', '/Images/Gallary/pic34.jpg', '/Images/Gallary/pic35.jpg',
// ];

const images = [
  '/Images/gallery/pic1_1.jpg',
  '/Images/gallery/pic1.jpg',
  '/Images/gallery/pic1.jpg',
  '/Images/gallery/pic2.jpg',
  '/Images/gallery/pic3.jpg',
  '/Images/gallery/pic4.jpg',
  '/Images/gallery/pic5.jpg',
  '/Images/gallery/pic6.jpg',
  '/Images/gallery/pic7.jpg',
  '/Images/gallery/pic8.jpg',
  '/Images/gallery/pic9.jpg',
  '/Images/gallery/pic10.jpg',
  '/Images/gallery/pic11.jpg',
  '/Images/gallery/pic12.jpg',
  '/Images/gallery/pic13.jpg',
  '/Images/gallery/pic14.jpg',
  '/Images/gallery/pic15.jpg',
  '/Images/gallery/pic16.jpg',
  '/Images/gallery/pic17.jpg',
  '/Images/gallery/pic18.jpg',
  '/Images/gallery/pic19.jpg',
  '/Images/gallery/pic20.jpg',
  '/Images/gallery/pic21.jpg',
  '/Images/gallery/pic22.jpg',
  '/Images/gallery/pic23.jpg',
  '/Images/gallery/pic24.jpg',
  '/Images/gallery/pic25.jpg',
  '/Images/gallery/pic26.jpg',
  '/Images/gallery/pic27.jpg',
  '/Images/gallery/pic28.jpg',
  '/Images/gallery/pic29.jpg',
  '/Images/gallery/pic30.jpg',
  '/Images/gallery/pic31.jpg',
  '/Images/gallery/pic32.jpg',
  '/Images/gallery/pic33.jpg',
  '/Images/gallery/pic34.jpg',
  '/Images/gallery/pic35.jpg',
];


const Images = () => {
  return (
    <section className="bg-[#f8f5f2] py-12 px-4 sm:px-6 lg:px-16" id="gallery">
      <h2 className="text-3xl font-bold text-center text-[#6d2e2e] mb-8">Explore Cherry's Villa</h2>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
      >
        {images.map((src, index) => (
          <a href={src} key={index} className="overflow-hidden rounded-xl shadow-md">
            <img
              alt={`Gallery image ${index + 1}`}
              src={src}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </a>
        ))}
      </LightGallery>
    </section>
  );
};

export default Images;
