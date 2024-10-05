import React from 'react'

const Certificates=[
    {
        id: 1,
        title: 'JavaScript Mastery',
        issuer: 'Coursera',
        image: '/images/AiChallenge.jpg', // Replace with actual image URL
      },
      {
        id: 2,
        title: 'React Basics',
        issuer: 'Udemy',
        image: '/images/natural.jpg',
      },
      {
        id: 3,
        title: 'Frontend Development',
        issuer: 'FreeCodeCamp',
        image: '/images/genAi.jpg',
      },
      {
        id: 4,
        title: 'Frontend Development',
        issuer: 'FreeCodeCamp',
        image: '/images/goverment.jpg',
      },
      {
        id: 5,
        title: 'Responsive Design',
        issuer: 'Codecademy',
        image: '/images/Microsoft.jpg',
      },
      {
        id: 6,
        title: 'Responsive Design',
        issuer: 'Codecademy',
        image: '/images/ibm.jpg',
      },
      {
        id: 7,
        title: 'Responsive Design',
        issuer: 'Codecademy',
        image: '/images/newton.jpg',
      },
      {
        id: 8,
        title: 'Responsive Design',
        issuer: 'Codecademy',
        image: '/images/web.jpg',
      },
      {
        id: 9,
        title: 'Responsive Design',
        issuer: 'Codecademy',
        image: '/images/sap.jpg',
      }
    ];
    const CertificateCollection = () => {
        return (
          <div className="container mx-auto py-12">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Mʏ Cᴇʀᴛɪғɪᴄᴀᴛᴇs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Certificates.map((certificate) => (
                <div
                  key={certificate.id}
                  className="bg-slate-700 text-white rounded-lg shadow-md p-3 hover:shadow-lg transition-shadow"
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-[45vh] object-cover rounded-md mb-1"
                  />
                  {/* <h3 className="text-xl font-semibold">{certificate.title}</h3>
                  <p className=" text-white -mb-12">{certificate.issuer}</p> */}
                </div>
              ))}
            </div>
          </div>
        );
      };
 

export default CertificateCollection
