import Button from "./button";
import { styles } from "../util/style";
import { apteka } from "../assets";

const Delivery = () => {
  return (
    <div
      className={`${styles.container} ${styles.PaddingX} ${styles.DisplayBetween} flex-wrap mt-10 mb-20`}
    >
      <div className="flex-1 max-w-[800px]">
        <h1 className="text-[40px] font-bold sm:text-[60px] pt-2 sm:leading-[70px] leading-[40px] text-[#145464]">
          Dorilarimizni  <a href="https://arzonapteka.uz/ru/search?medicine=79800&region=22397&view=list&filter=all" className="hover:underline duration-500 ease-in-out"><span className="text-[#f63f46]">Arzon</span> <span className="text-[#149f4f]"> Apteka</span></a> dasturidan yoki Shahar dorixonalaridan topishinggiz mumkin!
        </h1>
        <p className="text-2xl pt-10 text-darkGreen sm:leading-[50px] pb-10">
          1-3 ish kunida mahsulotlar o'z egasiga yetkazilishi kafolatlanadi.
          <br />
          Mahsulotlar o'z egalariga ishonchli tarzda yetkazib beriladi!
        </p>

        <a href="https://arzonapteka.uz/ru/search?medicine=79800&region=22397&view=list&filter=all"><Button styles={"mt-20 mb-[95px]"} /></a>
      </div>
     
      
<div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
<div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
<div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
<div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
<div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
    <img src={apteka} className=" w-[272px] h-[572px]" alt=""/>
    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" className="hidden dark:block w-[272px] h-[572px]" alt=""/>
</div>
</div>

    </div>
  );
};

export default Delivery;
