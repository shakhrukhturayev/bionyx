import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      welcome: "Welcome to our website!",
      home: "Bosh sahifa",
      product: "Maxsulotlar",
      advice: "Maslahat",
      about: "Biz haqimizda",
      lang: "Ру",
      langlink: "/ru",
      mainText: `Bionyx.corp\nSog'lig'inggiz ishonchli qo'llarda.`,
      info: ` BIONYX.corp’ga xush kelibsiz! Bizning asosiy maqsadimiz fan va \n
          innovatsiyalarni birlashtirib, insonlarning salomatligini yaxshilashga\n
          hissa qo'shishdir. BIONYX.corp zamonaviy farmatsevtika yechimlarini\n
          yaratish maqsadida tashkil etilgan bo'lib, biz dori vositalarini\n
          ishlab chiqarish va tarqatishda eng ilg‘or texnologiyalardan\n
          foydalanamiz.`,
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать на наш сайт!",
      home: "Домашняя страница",
      product: "Продукты",
      advice: "Совет",
      about: "О нас",
      lang: "Uz",
      langlink: "./",
      mainText: `Bionyx.корп\nВаше здоровье в надежных руках.`,
      info: `Добро пожаловать в BIONYX.corp! Наша главная цель – наука и \n
 Объединение инноваций для улучшения здоровья человека\n
 это внести свой вклад. BIONYX.corp предоставляет современные фармацевтические решения \n
 была создана для создания, мы разрабатываем лекарства\n
 самые передовые технологии в производстве и дистрибуции \n
 мы используем.`,
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "uz", // Default til
  fallbackLng: "uz",
  interpolation: { escapeValue: false },
});

export default i18n;
