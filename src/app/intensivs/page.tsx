'use client'
import 'animate.css';
import Link from "next/link"
import 'magic.css/dist/magic.min.css';
import Drawer from '../components/drawer/drawer';
export default function Intensivs() {
    return(
        <div className="w-340 h-500 mx-auto containerIntensiv  ">

        <header className="w-[95%]  h-12  bg-[#111]  mx-auto  rounded-full flex items-center   headerIntensiv justify-between mt-4 mb-4">
              <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet] h1 ">NazDev </h1>
                <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
                 <li className="transition hover:text-[blueviolet]" ><Link href="/">Главная</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/sprints'>Sprint</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href="https://naz-dev-125-adaptiv.vercel.app/support"> Поддержка</Link></li>
                 <li className="transition hover:text-[blueviolet]"> <Link href="https://naz-dev-129-adaptiv.vercel.app/">Бесплатные курсы</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/author'>О нас</Link></li>
              </ul>
        </header>
        <Drawer/>
        <main className="w-[95%] h-510 mx-auto flex flex-col items-center text-center">

            <section className="w-full h-70 flex flex-col items-center justify-center ">
            <h1 className="text-5xl text-[#fff] pt-10  leading-[60px] font-medium tracking-[2px] animate__animated animate__zoomIn">NazDev <span className="text-[blueviolet] font-semibold">Интенсивы</span></h1>
            <p className=" leading-[35px] text-[#fff] text-[20px] pt-3  animate__animated animate__zoomIn">Интенсивы – это не скучные лекции, а концентрированная практика! Быстро познакомьтесь с новыми технологиями,<br/> решите реальные задачи и получите опыт, который сразу сможете применить в работе. <br/>Идеально для тех, кто хочет быть впереди!</p>
            </section>

            <section className="w-[90%] h-300 rounded-3xl ">

                <div className="w-[90%] h-250 mx-auto flex flex-row gap-10 flex-wrap items-center justify-center intensivBlock pt-10">

                <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]  intensivItem sprintBlock flex justify-center items-center flex-col">
                   <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">Java Script</h3>
                  <p className="text-[#fff] pt-4 px-7">Быстрый старт в мир JavaScript! Интенсив для начинающих, где за короткий срок вы освоите основы языка </p>
                  <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>1999руб</span>
                  <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
                   </div> 

                    <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] intensivItem   sprintBlock flex justify-center items-center flex-col">
                    <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">UI Testing</h3>
                   <p className="text-[#fff] pt-4 px-7">UI-тестирование с нуля: сделайте ваши приложения надежными</p>
                   <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>599руб</span>
                   <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
                    </div>   
                            
  <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] intensivItem   sprintBlock flex justify-center items-center flex-col">
  <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">Next</h3>
 <p className="text-[#fff] pt-4 px-7"> Интенсив для начинающих создавайте производительные веб-приложения с React и Next</p>
 <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>599руб</span>
 <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
  </div>   
  <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]  intensivItem  sprintBlock flex justify-center items-center flex-col">
  <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">State Managment</h3>
 <p className="text-[#fff] pt-4 px-7">Управление состоянием с нуля: Организуйте данные в ваших приложениях!</p>
 <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>599руб</span>
 <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
  </div>   
  <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]  intensivItem  sprintBlock flex justify-center items-center flex-col">
  <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">Express</h3>
 <p className="text-[#fff] pt-4 px-7">Express  интенсив для начинающих. Веб-разработка на Node.js стала проще!</p>
 <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>599руб</span>
 <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
  </div>   



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