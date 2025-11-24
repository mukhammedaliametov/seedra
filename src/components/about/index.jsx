import React from "react";
import about_img from '../../assets/about.png';

const About = () => {
  return (
    <div className="max-w-[1110px] mx-auto px-[16px] xl:px-[16px] py-[50px] flex flex-col-reverse md:flex-row items-center gap-[40px] justify-between">  
      <div>
        <h2 className="font-semibold text-[26px]/[34px] md:text-[36px]/[44px]">Seedra helps to grow fast and efficiant</h2>
        <br />
        <p>
          SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional
          instructions created by PhD Helga George
          <br /><br />
          Be sure of our quality - the freshest batches of this season. Non-GMO,
          Heirloom - our seeds were tested and have the best germination
          ratings. Your easy growing experience is our guarantee Spinach commom
          culinary uses: salads, soups, smoothies, lasagne, pizza, pies,
          risotto, and more
          <br /><br />
          Proudly sourced in the USA - our garden seeds are grown, harvested,
          and packaged in the USA. We support local farmers and are happy to
          produce this American-made product
        </p>
      </div>
      <img className="w-full mr-[-30px] md:mr-0 md:w-[466px]" src={about_img} alt="about_img" />
    </div>
  );
};

export default About;
