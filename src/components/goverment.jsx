
import { ftti, gerb, sst, ssv, who } from "../assets";

const Goverment = () => {
  return (
    <div className=" slider">
      <div className="slider-track">
       
        <div className="slide w-[235px] h-[250px]">
          <img src={gerb} alt="no pic" className="object-cover -mt-10" />
        </div>
        <div className="slide w-[155px] h-[200px]">
          <img src={sst} alt="no pic" className="object-cover" />
        </div>
        <div className="slide w-[140px] h-[200px] mx-10">
          <img src={ftti} alt="no pic" className="object-cover" />
        </div>
        <div className="slide w-[670px] h-[200px]">
          <img src={ssv} alt="no pic" className="object-cover" />
        </div>
        <div className="slide w-[250px] h-[200px]">
          <img src={who} alt="no pic" className="object-cover" />
        </div>
            {/* Copyed Slides */}
            <div className="slide w-[235px] h-[250px]">
          <img src={gerb} alt="no pic" className="object-cover -mt-10" />
        </div>
        <div className="slide w-[155px] h-[200px]">
          <img src={sst} alt="no pic" className="object-cover" />
        </div>
        <div className="slide w-[140px] h-[200px] mx-10">
          <img src={ftti} alt="no pic" className="object-cover" />
        </div>
        <div className="slide w-[670px] h-[200px]">
          <img src={ssv} alt="no pic" className="object-cover" />
        </div>
        <div className="slide w-[250px] h-[200px]">
          <img src={who} alt="no pic" className="object-cover" />
        </div>    
      </div>
     
    </div>
  );
};

export default Goverment;
