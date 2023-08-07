import React from "react";
import bodyImage1 from "../../assets/bodyImages/bodyImage1.png";
import bodyImage2 from "../../assets/bodyImages/bodyImage2.png";
import bodyImage3 from "../../assets/bodyImages/bodyImage3.png";
import bodyImage4 from "../../assets/bodyImages/bodyImage4.png";
import ImageRightSection from "../../components/sectionTwo/ImageRightSection";
import ImageLeftSection from "../../components/sectionTwo/ImageLeftSection";

function SectionTwo() {
  return (
    <div className="pb-20">
      <ImageRightSection
        image={bodyImage1}
        title="Receive and make International transactions in seconds"
        description="Transfer money internationally in record time with our platform. Say goodbye to long wait times and delays."
      />

      <ImageLeftSection
        image={bodyImage2}
        title="Affordable transfer rates"
        description="Our platform offers the lowest fees in the market for international money transfers. Say goodbye to high transfer fees and start saving today."
      />
      <ImageRightSection
        image={bodyImage3}
        title="Transfer Money Anywhere, in Any Currency"
        description="Send money in any currency, to anyone, anywhere with ease. Our platform supports multiple currencies, so you can send funds to your loved ones without any hassle or restrictions."
      />

      <ImageLeftSection
        image={bodyImage4}
        title="Spend and shop anywhere with your Debit Card"
        description="Our platform allows you to shop on various platforms and make online payments easily."
      />
    </div>
  );
}

export default SectionTwo;
