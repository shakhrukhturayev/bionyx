import { styles } from "../util/style"


const Testimonals = () => {
  return (
    <div id="advice" className={`${styles.container} `}>
    <section className="bg-white dark:bg-lightBlue">        
      <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 py-10 w-full uppercase text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white flex justify-center  text-center items-center">Mutaxasislardan maslahatlar</h2>
          
      </div> 
      <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-lightGreen md:p-12 lg:border-r dark:bg-slate-50 dark:border-lightGreen">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-darkGreen">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-darkGreen">Entirovit sashe,Kapsula va Kids</h3>
                  <p className="my-4">Ichak mikroflorasining fiziologik muvozanatini ushlab turadi va tiklaydi, patogen mikroorganimlarning ko‘payishi va yashashi uchun noxush sharoitlarni yaratadi</p>
                  <p className="my-4">ovqatni hazm qilish va V guruhi vitaminlari, S, K vitaminlarining ishlab chiqarilishi jarayonlarida ishtirok etadi, hamda elektrolitlar muvozanatini, immunitetni boshqaradi.</p>
                  <p className="my-4">Temir qalsiy, D vitaminini so‘rilishi uchun yaxshi sharoitlarni yaratadi. Preparatning tarkibiga kiruvchi bakteriyalar oqsillar hazm bo‘lishini yengillashtiradi.</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-12 h-12 rounded-full" src="https://cdn-icons-png.flaticon.com/512/843/843293.png" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-darkGreen text-left">
                      <div>Lazizbek Fayzullayev</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Deriktor & CEO</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-lightGreen md:p-12 dark:bg-slate-50 dark:border-lightGreen">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-darkGreen">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-darkGreen">Vetalin Ultra Sirop va Kapsula</h3>
                  <p className="my-4">"Xolin bosh miyaning oziqlanishi va ishlashi uchun zarur, xotirani yaxshilanishiga ta’sir ko‘rsatadi. Karnitin bilan birgalikda ta’sir qilib, ishlash qobiliyatini oshirish xususiyatiga ega.</p>
                  <p className="my-4"> Xolinsiz hujayra membranalarining to‘laqonli hayot faoliyatini ta’minlovchi tarkibiy qismlar – sfingomielin va fosfatidilxolinning shakllanishi mumkin bo‘lmaydi. "</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-12 h-12 rounded-full" src="https://cdn-icons-png.flaticon.com/512/843/843293.png" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-darkGreen text-left">
                      <div>Ortiq Inayatullaevich</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Produkt manager & Pediatr</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-lightGreen lg:border-b-0 md:p-12 lg:border-r dark:bg-slate-50 dark:border-lightGreen">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-darkGreen">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-darkGreen">Gamotsin 30,Sirop va Kapliya</h3>
                  <p className="my-4">"Gamotsinni o'zimda sinovdan o'tkazdim ta'siri wow🤯 .</p>
                  <p className="my-4">Uzoq vaqtdan beri uyqusizlik va charchoq qiynardi</p>
                  <p className="my-4">Ta'siri dastlabki kunlardan bilina boshlandi. Hozirda uyqularim normal va Ruhan xotirjamman"</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-12 h-12 rounded-full" src="https://cdn-icons-png.flaticon.com/512/843/843293.png" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-darkGreen text-left">
                      <div>To'rayeva Guzal</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">HR va Kadrlar buyicha mutaxasis</div>
                  </div>
              </figcaption>    
          </figure>
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-lightGreen md:p-12 dark:bg-slate-50 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-darkGreen">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-darkGreen">Tridaza 60</h3>
                  <p className="my-4">"Tridaza qon hujayralari va tomirlar devorining funksional holatini yaxshilaydi; qonning yopishqoqligini va tomirlarda tromblar hosil</p>
                  <p className="my-4">bo'lishini kamaytiradi, hosil bo'lib ulgurgan trombalarning erishiga ko'maklashadi"</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                  <img className="w-12 h-12 rounded-full" src="https://cdn-icons-png.flaticon.com/512/843/843293.png" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium dark:text-darkGreen text-left">
                      <div>Shavkat Rasulovich</div>
                      <div className="text-sm font-light text-gray-500 dark:text-gray-400">Farmaseft mutaxasis</div>
                  </div>
              </figcaption>    
          </figure>
      </div>
      
</section>
    </div>
  )
}

export default Testimonals