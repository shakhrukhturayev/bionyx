import { styles } from "../util/style";
import Button from "./button";
import Carousel from "./carousel";
import { useTranslation } from "react-i18next";
import '../i18n'

const Header = () => {
  const { t } = useTranslation();

  return (
    <div
      className={` ${styles.DisplayBetween} ${styles.PaddingX} flex flex-wrap w-full `}
    >
      <div className="w-full lg:w-1/2">
        <h1 className="text-[40px] font-bold sm:text-[60px] sm:pt-[250px] sm:leading-[70px] leading-[45px] text-[#145464]">
          { t('mainText') }
        </h1>
        <p className="mt-10 max-w-[540px] text-[16px]  sm:text-[20px] font-[400] text-[#145464]">
          {t('info')}
        </p>
        <a href="https://t.me/+998954502282" className="mt-10 mb-[95px]"><Button styles={"mt-10 mb-[95px]"} /></a>
      </div>
      <div className="w-full lg:w-1/2 h-full">
        <Carousel />
      </div>
    </div>
  );
};

export default Header;
