import React from "react";

function Footer() {
  return (
    <div className="bg-custom-blue text-white p-16 md:p-28 flex flex-col md:flex-row">
      <div className="w-full md:w-2/6">
        <p className="font-bold text-2xl">NomadPay</p>
        <p className="pt-5">© 2023 NomadPay. All Rights Reserved</p>
      </div>
      <div className="w-full md:w-5/6 flex justify-end ">
        <div className="grid-rows-3 gap-5 flex pt-10 md:pt-0 ">
          <div>
            <h5 className="font-bold pb-3">Product</h5>
            <p className="text-gray-500 text-sm pb-2">Money Transfer</p>
            <p className="text-gray-500 text-sm pb-2">Currency Exchange</p>
            <p className="text-gray-500 text-sm pb-2">Virtual Cards</p>
          </div>
          <div>
            <h5 className="font-bold pb-3">Company</h5>
            <p className="text-gray-500 text-sm pb-2">About</p>
            <p className="text-gray-500 text-sm pb-2">Press</p>
            <p className="text-gray-500 text-sm pb-2">Career</p>
            <p className="text-gray-500 text-sm pb-2">Teams</p>
            <p className="text-gray-500 text-sm pb-2">Blog</p>
          </div>
          <div>
            <h5 className="font-bold pb-3">Resources</h5>
            <p className="text-gray-500 text-sm pb-2">FAQs</p>
            <p className="text-gray-500 text-sm pb-2">Contact Us</p>
            <p className="text-gray-500 text-sm pb-2">Privacy</p>
            <p className="text-gray-500 text-sm pb-2">Terms of Use</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
