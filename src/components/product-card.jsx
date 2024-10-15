import { useState } from "react";
import { ProductCardItems } from "../util/constants";
import { Close } from "../assets";
import { MdAddShoppingCart } from "react-icons/md";

const ProductCard = ({ id, name, image, idx, title, text,link }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal holati
  const [isFadingOut, setIsFadingOut] = useState(false); // Fade out holati

  const openModal = () => {
    setIsModalOpen(true); // Modalni ochish
  };

  const closeModal = () => {
    setIsFadingOut(true); // Fade outni boshlash

    setTimeout(() => {
      setIsModalOpen(false); // Fade out tugagandan keyin modalni yopish
      setIsFadingOut(false); // Fade out holatini reset qilish
    }, 500); // Fade out davomiyligi (0.5s)
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Agar modalning tashqi foniga bosilsa, modal yopiladi
    }
  };

  return (
    <>
      <div className="w-[320px] h-[30%] m-8 card-shadow hover:scale-110 duration-700 ease-in-out box-radius">
        <h1>
          <img
            className="rounded-t-lg object-cover bg-[#fff] h-auto w-full "
            src={image}
            alt={name}
          />
        </h1>
        <div className="p-5 ">
          <h1>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-darkGreen">
              {name}
            </h5>
          </h1>
          <p className="mb-3 font-[500] text-gray-900 dark:text-darkGreen">
            {title}
          </p>
         <div className="flex items-center justify-between">
         <button
         onClick={openModal} // Tugmani bosganingizda modal ochiladi
         className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-darkGreen hover:text-white  rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-white dark:hover:bg-lightBlue dark:focus:bg-lightGreen duration-1000 ease-in-out"
       >
         Ko'proq ma'lumot
         <svg
           className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
           aria-hidden="true"
           xmlns="http://www.w3.org/2000/svg"
           fill="none"
           viewBox="0 0 14 10"
         >
           <path
             stroke="currentColor"
             strokeLinecap="round"
             strokeLinejoin="round"
             strokeWidth="2"
             d="M1 5h12m0 0L9 1m4 4L9 9"
           />
         </svg>
       </button>
       <a href={`${link}`} className="border border-darkGreen hover:border-lightGreen duration-500 ease-in-out rounded-[8px] p-1"><MdAddShoppingCart className="text-[25px] text-darkGreen hover:text-lightGreen duration-500 ease-in-out" /></a>
         </div>
          
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
            isFadingOut ? "fade-out" : "fade-in"
          }`} // fade-in va fade-out animatsiyasi
          onClick={handleBackdropClick} // Modal foniga bosilganda modal yopiladi
        >
          <div className="bg-white rounded-lg sm:w-[800px] w-[500px] max-h-[80vh] overflow-y-auto p-5 relative transition-opacity duration-500 ease-in-out">
            <button
              onClick={closeModal} // Modalni yopish uchun tugma
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-900"
            >
              <img
                src={Close}
                className="w-[25px] duration-1000 ease-in-out"
                alt="close"
              />
            </button>
            {/* O'zingizning katta kontentingiz bu yerga keladi */}
            <div className="mt-4 flex justify-center items-center flex-col">
              <h1 className="text-4xl font-bold text-darkGreen flex justify-center items-center m-10">
                {name}
              </h1>
              <p className="font-raleway font-semibold text-darkGreen mb-10 text-xl">
                {title}
              </p>
              <img
                src={image}
                className="max-w-sm max-h-[30%]"
                alt={name}
              />
              <p className="text-[16px] sm:text-[18px] text-darkGreen mt-5 leading-[30px]" dangerouslySetInnerHTML={{ __html: text}}>
              </p>
              <p className="text-lightBlue">
                Ko'proq ma'lumotlar dori qadog'idagi yo'riqnomada batafsil
                yoritib berilgan!...
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
