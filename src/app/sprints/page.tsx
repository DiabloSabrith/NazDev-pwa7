'use client'
import 'animate.css';
import Link from "next/link"
import Drawer from '../components/drawer/drawer';
export default function Intensivs() {
    return(
        <div className="w-340 h-500 mx-auto containerSprint ">

        <header className="w-[95%] headerSprint h-12  bg-[#111]  mx-auto  rounded-full flex items-center  justify-between mt-4 mb-4">
              <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet] h1 ">NazDev </h1>
                <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
                 <li className="transition hover:text-[blueviolet]" ><Link href="/">Главная</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/intensivs'>Интенсивы</Link></li>
                 <li  className="transition hover:text-[blueviolet]"><Link href='https://naz-dev-125-adaptiv.vercel.app/support'>Поддержка</Link></li>
                 <li  className="transition hover:text-[blueviolet]"><Link href='https://naz-dev-125-adaptiv.vercel.app/'>Бесплатные курсы</Link></li>
                 
              </ul>
        </header> 
         <Drawer /> 

        <main className="w-[95%] h-510 mx-auto flex flex-col items-center text-center ">

            <section className="w-full h-70 flex flex-col  items-center justify-center ">
            <h1 className="text-5xl text-[#fff] pt-10  leading-[60px] font-medium tracking-[2px] animate__animated animate__zoomInDown">NazDev <span className="text-[blueviolet] font-semibold">Sprint</span></h1>
            <p className=" leading-[35px] text-[#fff] text-[20px] pt-3 animate__animated animate__zoomInDown">Это серия быстрых, сфокусированных мастер-классов, призванных дать вам ключевые <br/>знания и навыки для создания современных веб-приложений </p>
            </section>

            <section className="w-[90%] h-300  rounded-3xl  sprintMainBlock ">
{/* First */}
                <div className="w-[90%] h-250 mx-auto flex flex-row gap-10 flex-wrap items-center justify-center pt-10 ">

                    <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock  sprintBlockItem flex justify-center items-center flex-col">
                      <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">Html+CSS</h3>
                        <p className="text-[#fff] pt-4 px-7">Создание сайта портфолио без применения библиотек</p>
                  <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>799руб</span>
                  <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
                    </div>
{/* Second */}
                    <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock sprintBlockItem flex justify-center items-center flex-col">
                   <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">CSS</h3>
                     <p className="text-[#fff] pt-4 px-7"> Aдаптивный сайт для всех устройств</p>
                     <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>599руб</span>
                     <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
                 </div>
    {/* Three */}
                                     <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock  sprintBlockItem flex justify-center items-center flex-col">
                       <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">SEO</h3>
                         <p className="text-[#fff] pt-4 px-7">Оптимизация сайта для посиковых роботов</p>
                         <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>599руб</span>
                         <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
                     </div>
 {/* Four */}         
               <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock sprintBlockItem flex justify-center items-center flex-col">
                 <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">React </h3>
                   <p className="text-[#fff] pt-4 px-7">Для начинающих</p>
                   <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>999руб</span>
                   <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
               </div>
     {/* Five */}           
                   <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock sprintBlockItem flex justify-center items-center flex-col">
                    <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">Tailwind</h3>
                   <p className="text-[#fff] pt-4 px-7">Бытрый курс по быстрой технологии</p>
                   <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>599руб</span>
                   <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
                    </div>   
     {/* Six */}
              <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]  mobileBM sprintBlock  sprintBlockItem flex justify-center items-center flex-col">
            <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">React+Vite<br/>Tailwind</h3>
              <p className="text-[#fff] pt-4 px-7">Sprint по 3 технологиям вместе </p>
              <span className='pt-7 text-[yellow] text-3xl tracking-[3px] '>1599руб</span>
              <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
          </div>
                    
                   {/*  <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock"></div> */}
                   {/*  <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock"></div> */}
                    {/* <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock"></div> */}
                </div>
            </section>

        </main>
        <ul className="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
  </ul>
        </div>
    )
}