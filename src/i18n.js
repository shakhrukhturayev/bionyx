import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uzProducts from "./locales/uz/products";
import ruProducts from "./locales/ru/products";
import ruAbout from "./locales/ru/about";
import uzAbout from "./locales/uz/about";
import uzFooter from "./locales/uz/footer";
import ruFooter from "./locales/ru/footer";

const resources = {
  uz: {
    translation: {
      welcome: "Welcome to our website!",
      home: "Bosh sahifa",
      product: "Maxsulotlar",
      advice: "Maslahat",
      about: "Biz haqimizda",
      flag: 'ruflag.svg',
      langlink: "/ru",
      mainText: `Bionyx.corp\nSog'lig'inggiz ishonchli qo'llarda.`,
      info: ` BIONYX.corp’ga xush kelibsiz! Bizning asosiy maqsadimiz fan va \n
          innovatsiyalarni birlashtirib, insonlarning salomatligini yaxshilashga\n
          hissa qo'shishdir. BIONYX.corp zamonaviy farmatsevtika yechimlarini\n
          yaratish maqsadida tashkil etilgan bo'lib, biz dori vositalarini\n
          ishlab chiqarish va tarqatishda eng ilg‘or texnologiyalardan\n
          foydalanamiz.`,
      order: "Buyurtma berish",
      ourproducts: "Bizning maxsulotlar",
      deliver1: `1-3 ish kunida mahsulotlar o'z egasiga yetkazilishi kafolatlanadi.
          Mahsulotlar o'z egalariga ishonchli tarzda yetkazib beriladi!`,
      products: "sasassaassa",
      dataabout: "Ko'proq ma'lumot",
      medicane: "Dorilarimizni",
      arzon: "dasturidan yoki Shahar dorixonalaridan topishinggiz mumkin!",
      mutaxasis: "Mutaxasislardan maslahatlar",
      laziz1: "Entirovit sashe,Kapsula va Kids",
      laziz2: ` Ichak mikroflorasining fiziologik muvozanatini ushlab turadi va tiklaydi, patogen mikroorganimlarning ko‘payishi va yashashi uchun noxush sharoitlarni yaratadi.\n\nOvqatni hazm qilish va V guruhi vitaminlari, S, K vitaminlarining ishlab chiqarilishi jarayonlarida ishtirok etadi, hamda elektrolitlar muvozanatini, immunitetni boshqaradi.\n\nTemir, kalsiy, D vitaminini so‘rilishi uchun yaxshi sharoitlarni yaratadi. Preparatning tarkibiga kiruvchi bakteriyalar oqsillar hazm bo‘lishini yengillashtiradi.`,
      laziz3: "Lazizbek Fayzullayev",
      laziz4: "Deriktor & CEO",

      ortiq1: "Vetalin Ultra Sirop va Kapsula",
      ortiq2: `"Xolin bosh miyaning oziqlanishi va ishlashi uchun zarur,
                xotirani yaxshilanishiga ta’sir ko‘rsatadi. Karnitin bilan
                birgalikda ta’sir qilib, ishlash qobiliyatini oshirish
                xususiyatiga ega. <br /> <br /> Xolinsiz hujayra membranalarining to‘laqonli hayot faoliyatini
                ta’minlovchi tarkibiy qismlar – sfingomielin va
                fosfatidilxolinning shakllanishi mumkin bo‘lmaydi."`,
      ortiq3: "Ortiq Inayatullaevich",
      ortiq4: "Produkt manager & Pediatr",

      guzal1: "Gamotsin B6,Sirop va Kapliya",
      guzal2: `"Gamotsinni o'zimda sinovdan o'tkazdim ta'siri wow🤯 .
                 \n Uzoq vaqtdan beri uyqusizlik va charchoq qiynardi \n
                 Ta'siri dastlabki kunlardan bilina boshlandi. Hozirda uyqularim
                normal va Ruhan xotirjamman"`,
      guzal3: "To'rayeva Guzal",
      guzal4: "HR va Kadrlar buyicha mutaxasis",

      shavkat1: "Tridaza 60 kapsula",
      shavkat2: `"Tridaza qon hujayralari va tomirlar devorining funksional
                holatini yaxshilaydi; qonning yopishqoqligini va tomirlarda
                tromblar hosil \n \n bo'lishini kamaytiradi, hosil bo'lib ulgurgan trombalarning
                erishiga ko'maklashadi"`,
      shavkat3:"Shavkat Rasulovich",
      shavkat4:"Farmaseft mutaxasis", 
      
      short:"Biz haqimizda qisqacha.",
      moreinfo: "Ko'proq ma'lumotlar dori qadog'idagi yo'riqnomada batafsil yoritib berilgan!...",
      products: uzProducts,
      aboutcontent: uzAbout,
      footerContent:uzFooter
    },
  },
  ru: {
    translation: {
      welcome: "Добро пожаловать на наш сайт!",
      home: "Главная страница",
      product: "Продукты",
      advice: "Совет",
      about: "О нас",
      flag: 'uzflag.svg',
      langlink: "./",
      mainText: `Bionyx.corp\nВаше здоровье в надежных руках.`,
      info: `Добро пожаловать в BIONYX.corp! Наша главная цель – наука и \n
            Объединение инноваций для улучшения здоровья человека\n
            это внести свой вклад. BIONYX.corp предоставляет современные фармацевтические решения \n
            была создана для создания, мы разрабатываем лекарства\n
            самые передовые технологии в производстве и дистрибуции \n
            мы используем.`,
      order: "Оформить заказ",
      ourproducts: "Наши продукты",
      deliver1: `Доставка товаров гарантируется в течение 1-3 рабочих дней.
                Товары будут надежно доставлены владельцам!`,
      dataabout: "Подробнее",
      medicane: "Наши лекарства",
      arzon: "или в городских аптеках!",
      mutaxasis: "Советы от экспертов",
      laziz1: "Энтеровит саше, капсула и Kids",
      laziz2: `Поддерживает и восстанавливает физиологический баланс микрофлоры кишечника, создает неблагоприятные условия для размножения и выживания патогенных микроорганизмов.участвует в процессах переваривания и выработки витаминов группы В, С, К, а также регулирует электролитный баланс, иммунитет.\n\n создает хорошие условия для усвоения железа, кальция, витамина D. Бактерии, входящие в состав препарата, облегчают переваривание белков.`,
      laziz3: "Лазизбек Файзуллаев",
      laziz4: "Директор и CEO",

      ortiq1: "Веталин Ультра Сироп и капсула",
      ortiq2: `"Холин необходим для питания и функционирования мозга,
                влияет на улучшение памяти. С карнитином
                повышение работоспособности за счет совместного воздействия
                имеет свойство. \n\n полноценная жизнедеятельность холинсодержащих клеточных мембран
                ингредиенты, обеспечивающие – сфингомиелин и
                образование фосфатидилхолина будет невозможно."`,
      ortiq3: "Ортик Инаятуллаевич",
      ortiq4: "Product Manager & Педиатр",

      guzal1: "Гамоцин B6, Сироп и Каплия",
      guzal2: `Я протестировал "Гамоцин" на себе, эффект потрясающий 🤯.
\n Долгое время меня мучили бессонница и усталость \n
Влияние начало проявляться с первых дней. Мои сны сейчас
нормальный и душевно спокойный"`,
      guzal3: "Тураева Гузаль",
      guzal4: "Специалист по HR и персоналу",

      shavkat1: " Тридаза 60 капсула",
      shavkat2: `"Тридаза является функциональным компонентом клеток крови и стенки сосудов
              улучшает состояние; улучшает вязкость крови и
              тромбообразование  \n \n уменьшает образование тромбов
              способствует растворению"`,
      shavkat3:"Шавкат Расулович",
      shavkat4:"Специалист Фармасефта",

      short:"Кратко о нас.",
      moreinfo: "Подробнее в инструкции на упаковке лекарства освещённый!...",
      products: ruProducts,
      aboutcontent: ruAbout,
      footerContent:ruFooter
    },
  },
};
const savedLang = localStorage.getItem("language") || "uz";
const defaultLang = savedLang && ["uz", "ru"].includes(savedLang) ? savedLang : "uz";// Oldingi tilni saqlash

try{
  i18n.use(initReactI18next).init({
    resources,
    lng: defaultLang,
    fallbackLng: "uz",
    interpolation: { escapeValue: false },
  });
}

catch(error){
  console.error("i18n error:",error)
}

// Tilni o'zgartirganda uni localStorage'ga saqlash
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
  localStorage.setItem("language", lng);
};

export default i18n;
