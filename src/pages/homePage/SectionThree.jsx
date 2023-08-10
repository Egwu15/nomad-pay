import React from "react";
import { MaskRight } from "iconsax-react";

function SectionThree() {
  const tiles = [
    {
      title: "Get Started in Minutes",
      subtitle:
        "Creating your account is quick and easy. Simply sign up with your details and you're ready to go. No complicated forms or long waiting periods.",
    },
    {
      title: "Flexible Transfer Options",
      subtitle:
        "Pick your currencies, transfer speed, and payment method to personalize your money transfer. Our platform provides various transfer options that cater to your preferences.",
    },
    {
      title: "Fast and Secure Transfers",
      subtitle:
        "Your money is transferred swiftly and securely with our advanced security measures and encryption protocols. With real-time updates, you can track your transfer every step of the way.",
    },
  ];

  return (
    <div className="bg-custom-blue text-white  py-20 px-20">
      <h3 className="w-full lg:w-4/6 font-bold text-3xl">
        Sending money has never been easier, NomadPay allows you to do this in a
        few clicks
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2 pt-20">
        {tiles.map((title, index) => (
          <div key={index}>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <MaskRight size="28" color="#6936F5" />
            </div>

            <h5 className="text-xl font-bold py-6">{title.title}</h5>
            <p>{title.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SectionThree;
