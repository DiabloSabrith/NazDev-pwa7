
import Link from "next/link"
export default function Intensivs() {
    return(
        <div className="w-340 h-500 mx-auto  ">

        <header className="w-[95%]  h-12  bg-[#111]  mx-auto  rounded-full flex items-center  justify-between mt-4 mb-4">
              <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet]  ">NazDev </h1>
                <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
                 <li className="transition hover:text-[blueviolet]" ><Link href="/">Главная</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/intensivs'>Интенсивы</Link></li>
                 <li>Поддержка</li>
                 <li>Бесплатные курсы</li>
              </ul>
        </header>

        <main className="w-[95%] h-510 mx-auto flex flex-col items-center text-center ">

            <section className="w-full h-70 flex flex-col items-center justify-center ">
            <h1 className="text-5xl text-[#fff] pt-10  leading-[60px] font-medium tracking-[2px]">NazDev <span className="text-[blueviolet] font-semibold">Sprint</span></h1>
            <p className=" leading-[35px] text-[#fff] text-[20px] pt-3 ">Это серия быстрых, сфокусированных мастер-классов, призванных дать вам ключевые <br/>знания и навыки для создания современных веб-приложений </p>
            </section>

            <section className="w-[90%] h-300 bg-green-300 rounded-3xl sprintBlock sprintBlock">
{/* First */}
                <div className="w-[90%] h-250 mx-auto flex flex-row gap-10 flex-wrap items-center justify-center pt-10">
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock flex justify-center items-center flex-col">
                      <p className="text-[#fff] text-2xl tracking-[2px] font-semibold">Html+CSS</p>
                        <span className="text-[#fff] pt-4 px-7">Создание сайта портфолио без применения библиотек</span>
                        <button className="btn mt-4">Записаться</button>
                    </div>
{/* Second */}
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock flex justify-center items-center flex-col">
                   <p className="text-[#fff] text-2xl tracking-[2px] font-semibold">CSS</p>
                     <span className="text-[#fff] pt-4 px-7"> Aдаптивный сайт для всех устройств</span>
                     <button className="btn mt-4">Записаться</button>
                 </div>
    {/* Three */}
                                     <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock flex justify-center items-center flex-col">
                       <p className="text-[#fff] text-2xl tracking-[2px] font-semibold">SEO</p>
                         <span className="text-[#fff] pt-4 px-7">Оптимизация сайта для посиковых роботов</span>
                         <button className="btn mt-4">Записаться</button>
                     </div>
 {/* Four */}         
               <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock flex justify-center items-center flex-col">
                 <p className="text-[#fff] text-2xl tracking-[2px] font-semibold">React </p>
                   <span className="text-[#fff] pt-4 px-7">Для начинающих</span>
                   <button className="btn mt-4">Записаться</button>
               </div>
     {/* Five */}           
                   <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock flex justify-center items-center flex-col">
                 <p className="text-[#fff] text-2xl tracking-[2px] font-semibold">Tailwind</p>
                   <span className="text-[#fff] pt-4 px-7">Бытрый курс по быстрой технологии</span>
                   <button className="btn mt-4">Записаться</button>
               </div>   
     {/* Six */}
              <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock flex justify-center items-center flex-col">
            <p className="text-[#fff] text-2xl tracking-[2px] font-semibold">React+Vite<br/>Tailwind</p>
              <span className="text-[#fff] pt-4 px-7">Sprint по 3 технологиям вместе </span>
              <button className="btn mt-4">Записаться</button>
          </div>
                    
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock"></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock"></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock"></div>
                </div>
            </section>

        </main>
        </div>
    )
}