import React from "react";
import { styles } from "../util/style";
import { boss } from "../assets";
import { useTranslation } from "react-i18next";
import '../i18n'
import parse from 'html-react-parser';


const About = () => {
  const { t } = useTranslation();
  const about = t('aboutcontent', { returnObjects: true });

  return (
    <div id="about" className={`${styles.container} ${styles.PaddingX}`}>
      <div className={`${styles.DisplayBetween} flex-1 flex-wrap`}>
        <div className="flex-1">
          <h1 className="text-[40px] font-bold sm:text-[60px] pt-2 sm:leading-[70px] leading-[40px] text-[#145464] sm:mb-20 mb-6">
            {about.name}
          </h1>
          <p className="max-w-[90%] sm:text-[18px] text-[16px] sm:leading-[30px] leading-[20px] font-[500] text-darkGreen sm:mb-0 mb-5">
            {/* first part text */}
            {parse(about.content)}
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 bottom-0 gradient-text boss">
            <p className="text-white p-5 text-center">
             {parse(about.content3)}
            </p>
          </div>
          <img
            src={boss}
            alt="boss"
            className="max-w-[550px] flex-1 card-shadow"
          />
        </div>
        {/* second part text*/}
      </div>
      <p className="py-10 sm:text-[18px] text-[16px] sm:leading-[30px] leading-[20px] font-[500] text-darkGreen">
        {parse(about.content2)}
      </p>
    </div>
  );
};

export default About;
