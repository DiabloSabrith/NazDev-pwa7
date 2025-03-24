
import Link from "next/link"
export default function Intensivs() {
    return(
        <div className="w-340 h-370 mx-auto  ">

        <header className="w-[95%]  h-12  bg-[#111]  mx-auto  rounded-full flex items-center  justify-between mt-4 mb-4">
              <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet]  ">NazDev </h1>
                <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
                 <li className="transition hover:text-[blueviolet]" ><Link href="/">Главная</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/sprint'>Sprint</Link></li>
                 <li className="transition hover:text-[blueviolet]">Поддержка</li>
                 <li className="transition hover:text-[blueviolet]"> <Link href="https://naz-dev-129-adaptiv.vercel.app/">Бесплатные курсы</Link></li>
                 <li className="transition hover:text-[blueviolet]">О нас</li>
              </ul>
        </header>

        <main className="w-[95%] h-410  mx-auto flex flex-col items-center text-center my-10">

            <section className="w-[90%] h-550  rounded-3xl sprintBlock">

                <div className="w-[90%] h-250 mx-auto flex flex-row gap-10 flex-wrap  justify-center   pt-10">
                    <div className="w-[100%] h-100  rounded-[10px] authorBlock flex flex-row items-center justify-center gap-7">
                        <div className="w-[35%] h-[80%]  flex flex-col items-center justify-center ">
                            <div className="w-[150px] h-[150px] rounded-[50%] border-2 border-[blueviolet] flex items-center justify-center"></div>
                            <p className="pt-5 text-[#fff] text-3xl tracking-[2px]">NazDev</p>
                        </div>
                        <div className="w-[55%] h-[80%]  ">
                            <p className="text-left text-[#fff] text-[20px]  leading-8 py-5 ">NazDev – талантливый 17-летний разработчик, чьи навыки и видение позволили ему создать комплексную образовательную платформу для обучения программированию. Этот проект демонстрирует не только техническое мастерство NazDev, но и его стремление внести вклад в развитие образовательной сферы, предоставляя пользователям доступ к качественным и современным материалам.</p>
                        </div>
                    </div>
                    <div className="w-[100%] h-90 bg-amber-500 text-left text-[20px] px-10  flex items-center justify-center sprintBlock">
                        <p className="text-[#fff]">NazDev создан, чтобы изменить представление о веб-разработке! Многие новички считают, что это удел избранных, но я, NazDev, уверен: создание сайтов, мобильных и веб-приложений доступно каждому. Достойное образование + упорство = квалифицированный разработчик. В 17 лет я написал NazDev, чтобы доказать: стать лучшим никогда не поздно!”

                        Вариант 2 (более развернутый, с акцентом на возможности):
                        
                        “Почему я создал NazDev? Потому что верю: разработка сайтов и веб-приложений – это не элитарный клуб, а возможность для каждого, кто хочет изменить мир IT! Многие новички ошибочно считают это чем-то запредельным, но я, NazDev, уверен, что с качественным образованием и усердием, стать квалифицированным разработчиком неизбежно. В 17 лет я написал NazDev, чтобы показать, что учиться и расти – можно в любом возрасте. Начните</p>
                  </div>
                
         <section className="w-[85%] h-100 rounded-2xl  mt-5 flex flex-row infoBlock gap-10 items-center justify-center  ">
               <div className="w-[25%] h-[80%]  priceItem flex-col items-center justify-center rounded-[10px] transition transform hover:scale-[1.05]">
                <h3 className="py-10 text-[#fff] text-4xl">NazDev <br/> Sprint</h3>
                <button className="btn">Записаться</button>
               </div>
               <div className="w-[25%] h-[80%] priceItem rounded-[10px] transition transform hover:scale-[1.05]">
               <h3 className="py-10 text-[#fff] text-4xl ">NazDev <br/> Интенсив</h3>
               <button className="btn">Записаться</button>
               </div>
               <div className="w-[25%] h-[80%] priceItem rounded-[10px] transition transform hover:scale-[1.05]">
               <h3 className="py-10 text-[#fff] text-4xl">NazDev <br/> Бесплатные</h3>
               <button className="btn">Записаться</button>
               </div>
          </section>
                </div>


            </section>

        </main>
        </div>
    )
}