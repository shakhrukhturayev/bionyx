import { styles } from "../util/style";
import { useTranslation } from "react-i18next";
import "../i18n";

const Testimonals = () => {
  const { t } = useTranslation();
  return (
    <div id="advice" className={`${styles.container} `}>
      <section className="bg-white dark:bg-lightBlue">
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 py-10 w-full uppercase sm:text-4xl text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center  text-center items-center">
            {t("mutaxasis")}
          </h2>
        </div>
        <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-lightGreen md:p-12 lg:border-r dark:bg-slate-50 dark:border-lightGreen">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-darkGreen">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-darkGreen">
                {t("laziz1")}
              </h3>
              <p className="my-4">
               {t('laziz2')}
              </p>              
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/843/843293.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-darkGreen text-left">
                <div>{t('laziz3')}</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {t('laziz4')}{" "}
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-lightGreen md:p-12 dark:bg-slate-50 dark:border-lightGreen">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-darkGreen">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-darkGreen">
                {t('ortiq1')}
              </h3>
              <p className="my-4">
                {t('ortiq2')}
              </p>
             
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/843/843293.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-darkGreen text-left">
                <div>{t('ortiq3')}</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {t('ortiq4')}
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-lightGreen lg:border-b-0 md:p-12 lg:border-r dark:bg-slate-50 dark:border-lightGreen">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-darkGreen">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-darkGreen">
                {t('guzal1')}
              </h3>
              <p className="my-4">
               {t('guzal2')}
              </p>
              
              
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src="https://img.freepik.com/premium-vector/portrait-beautiful-doctor-woman-avatar-social-media-bright-vector-illustration_590570-4.jpg"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-darkGreen text-left">
                <div>{t('guzal3')}</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {t('guzal4')}
                </div>
              </div>
            </figcaption>
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-lightGreen md:p-12 dark:bg-slate-50 dark:border-gray-700">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-darkGreen">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-darkGreen">
                {t('shavkat1')}
              </h3>
              <p className="my-4">
                {t('shavkat2')}
              </p>
             
            </blockquote>
            <figcaption className="flex justify-center items-center space-x-3">
              <img
                className="w-12 h-12 rounded-full"
                src="https://cdn-icons-png.flaticon.com/512/843/843293.png"
                alt="profile picture"
              />
              <div className="space-y-0.5 font-medium dark:text-darkGreen text-left">
                <div>{t('shavkat3')}</div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  {t('shavkat4')}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Testimonals;
