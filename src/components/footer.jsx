import { FaLocationDot, FaPhone, FaRegMessage,FaTelegram, FaInstagram } from "react-icons/fa6";
import { FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { styles } from "../util/style";
import { NavLinks } from "../util/navbar";
import { useTranslation } from "react-i18next";
import '../i18n'

const Footer = () => {
  const { t } = useTranslation();
  const links = NavLinks().slice(0, -1);

  const footer = t('footerContent', { returnObjects: true });

  return (
    <div
      className={`${styles.container} ${styles.PaddingX} ${styles.DisplayStart} bg-lightBlue text-white min-w-[65%]  flex-wrap py-[120px] relative`}
    >
      <div className="mr-[180px]">
        <h1 className="font-bold text-2xl block mb-4 px-5 sm:mt-5 mt-0 sm:text-start text-center sm:mr-0 ">{footer.address}</h1>
        <p className="flex  leading-10 max-w-[500px]">
          <span className="py-3 px-5 sm:ml-0 ml-5">
            <FaLocationDot />
          </span>{" "}
          {footer.fulladress}
        </p>
        <p className="flex  leading-10 max-w-[500px]">
          <span className="py-3 px-5 sm:ml-0 ml-5">
            <FaPhone />
          </span>{" "}
          +998 95 450 22 82{" "}
        </p>
        <p className="flex  leading-10 max-w-[500px]">
          <span className="py-3 px-5 sm:ml-0 ml-5">
            <FaRegMessage />
          </span>{" "}
          bionyxcorp@gmail.com
        </p>
        <div className="icons flex items-center px-5 sm:ml-0 ml-5">
      <a href="https://t.me/+998954502282" className="text-[28px] mr-2"><FaTelegram /></a>
      <a href="https://www.instagram.com/p/C9fPCGpMiE1/?igsh=amU2Nmk2NHFrdXd2" className="text-[28px] mr-2"><FaInstagram/></a>
      <a href="https://www.youtube.com/@pharmedunion" className="text-[28px]"><FaYoutube/></a>
      </div>
      </div>

      <div className="mr-[180px] hidden sm:block">
        <h1 className="font-bold text-2xl block mb-10">{footer.link}</h1>
        <ul>
          {links.map((nav, id) => (
            <li key={nav.id} className="py-[2px] flex items-center">
              <FaExternalLinkAlt />{" "}
              <a href={`#${nav.id}`} className="px-2">
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sm:mt-0 mt-5">
      <iframe
  className="rounded-[10px]"
  referrerPolicy="no-referrer-when-downgrade"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.4401063964925!2d69.16509577728078!3d41.26442789817854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae89c0f7499dfd%3A0xa2cf0b40aabc2329!2zNzU3OCtQNEYsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1728539496125!5m2!1sru!2s"
  width="350"
  height="230"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
/>
      </div>

      <div className={`${styles.container} ${styles.PaddingX} ${styles.DisplayBetween} absolute left-0 bottom-0 py-8 footer mt-3`} >

        <p className="text-[12px]">© Bionyx.corp All Right Reserved. <br /> Developed by <span  className="underline">Uniset web group</span> </p>
      
        </div>
    </div>
  );
};

export default Footer;
