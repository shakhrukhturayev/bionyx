import React from "react";
import { styles } from "../util/style";
import { boss } from "../assets";

const About = () => {
  return (
    <div id="about" className={`${styles.container} ${styles.PaddingX}`}>
      <div className={`${styles.DisplayBetween} flex-1 flex-wrap`}>
        <div className="flex-1">
          <h1 className="text-[40px] font-bold sm:text-[60px] pt-2 sm:leading-[70px] leading-[40px] text-[#145464] sm:mb-20 mb-6">
            Biz haqimizda qisqacha.
          </h1>
          <p className="max-w-[90%] sm:text-[18px] text-[16px] sm:leading-[30px] leading-[20px] font-[500] text-darkGreen sm:mb-0 mb-5">
            {/* first part text */}
            Biz kimmiz? <br /> BIONYX.corp sifat, halollik va insonparvarlik
            prinsiplari asosida faoliyat yuritadi. Bizning jamoamiz tajribali
            mutaxasislar, tadqiqotchilar va sog'liqni saqlash mutaxassislaridan
            tashkil topgan bo‘lib, ularning barchasi samarali dori vositalarini
            yaratishga bag'ishlangan. Biz har doim bemorlarning ehtiyojlarini
            birinchi o‘ringa qo‘yib, xavfsizlik, sifat va samaradorlikning eng
            yuqori standartlariga mos keladigan dori vositalarini ishlab
            chiqamiz. Zamonaviy texnologiyalardan foydalanib, qat'iy sifat
            nazorati bilan birga, mahsulotlarimizni belgilangan davolash
            natijalariga erishishiga ishonch hosil qilamiz. Kompaniyamizning
            vazifasi keng turdagi kasalliklarni davolash uchun sifatli va arzon
            dori vositalarini ishlab chiqarishdir. Biz innovatsion tadqiqotlar
            va ishlab chiqarish texnologiyalari orqali global sog‘liqni saqlash
            natijalarini yaxshilashga intilamiz.BIONYX.corp’ning ishlab
            chiqarish jarayoni ilmiy-tadqiqot va rivojlantirish (R&D) bo‘limimiz
            tomonidan boshqariladi. Biz yangi molekulalar, innovatsion dori
            formulalari va ilg'or ishlab chiqarish usullarini kashf qilishga
            katta mablag' sarflaymiz. Bizning ilmiy-tadqiqot jamoamiz xalqaro
            me’yorlar va tartibotlar bilan chambarchas ishlaydi va soha
            tendentsiyalaridan oldinda bo‘lishga intiladi.Sog‘lom dunyoga hissa
            qo‘shish maqsadida BIONYX.corp barqarorlikni faoliyatining barcha
            jabhalarida ustuvor yo‘nalish sifatida qabul qiladi. Biz tabiiy
            resurslardan oqilona foydalanish va ekologik toza ishlab chiqarish
            jarayonlarini qo‘llab, atrof-muhitga bo‘lgan ta’sirimizni
            kamaytirishga e’tibor qaratamiz. Bu jarayonda chiqindilarni
            kamaytirish, energiya tejamkorligiga erishish va biodegradatsiya
            qilinadigan materiallardan foydalanishga intilamiz.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-0 bottom-0 gradient-text boss">
            <p className="text-white p-5 text-center">
             2023-yil 4-aprel Hindistonning 3 yirik kompaniyasidan biri <a href="https://www.indiamart.com/rhydburg-pharmaceuticals-limited/aboutus.html" className="underline hover:text-lightGreen duration-500 ease-in-out">Rhydburg Pharmaceuticals Ltd.</a>  direktori Mr.Prateek bilan kelishuv.
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
        BIONYX.corp turli terapevtik yo‘nalishlarga, jumladan, kardiologiya,
        onkologiya, nevrologiya va yuqumli kasalliklar bo‘yicha dori
        vositalarini ishlab chiqarishga ixtisoslashgan. Bizning portfelimizda
        retsept bo‘yicha va retseptsiz beriladigan dori vositalari, shuningdek,
        maxsus tibbiy holatlar uchun mo'ljallangan preparatlar mavjud.
        Shuningdek, biz sog‘liqni saqlash muassasalari va tadqiqot tashkilotlari
        uchun moslashtirilgan farmatsevtik yechimlarni ham taqdim etamiz.
        BIONYX.corp oddiy farmatsevtika kompaniyasi emas; biz global sog'liqni
        saqlashni yaxshilash uchun innovatsiyaga asoslangan jamoamiz. Bizning
        asosiy qadriyatlarimiz sifat, innovatsiya va insonparvarlikdir.
        Kelgusida, biz tadqiqot faoliyatimizni shaxsiylashtirilgan tibbiyot,
        biotexnologiya va raqamli salomatlik yechimlari kabi yangi
        yo‘nalishlarga kengaytirishga tayyormiz. Biz birgalikda sog'liqni
        saqlashning kelajagini shakllantiryapmiz – har bir yangi yutuq bilan.
      </p>
    </div>
  );
};

export default About;
