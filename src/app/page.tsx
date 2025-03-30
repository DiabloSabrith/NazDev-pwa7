'use client'

import Image from "next/image";
import Link from "next/link"
import 'animate.css';
import Drawer from "./components/drawer/drawer.js"
export default function Home() {
  return (
<div className="  container w-340 h-500 mx-auto  flex  flex-col area">
    <header className="w-[95%]  h-12  bg-[#111]   mx-auto  rounded-full flex items-center  justify-between mt-4 mb-4 header">
          <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet] logoTitle">NazDev </h1>
            <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
             <li className="transition hover:text-[blueviolet] "><Link href='/sprints'>Sprint</Link></li>
             <li className="transition hover:text-[blueviolet]"><Link href='/intensivs'>Интенсивы</Link></li>
             <li className="transition hover:text-[blueviolet]"><Link href="https://naz-dev-125-adaptiv.vercel.app/support"> Поддержка</Link></li>
             <li className="transition hover:text-[blueviolet]"><Link href="https://naz-dev-129-adaptiv.vercel.app/">Бесплатные курсы</Link></li>
             <li className="transition hover:text-[blueviolet]"><Link href='/author'>Об авторе</Link></li>
           
          </ul>
    </header>
    <Drawer /> 

    <main className="w-[95%] h-510  mx-auto flex flex-col items-center text-center ">
    {/* Надо обернуть в section */}
           <h1 className="text-5xl text-[#fff] pt-10  leading-[60px] animate__animated animate__flipInX">Стань лучшим разработчиком<br/> <span className="text-[blueviolet] font-semibold">c NazDev</span></h1>
           <p className=" leading-[35px] text-[#fff] text-[20px] pt-3 animate__animated animate__flipInX">Этот проект разработан семнадцатилетним подростком, стремящимся доказать, <br/>что программирование — это не удел избранных, а возможность, <br/>доступная каждому</p>
        
{/* Second section  */}


          <section className="w-[85%] h-30  flex items-center mt-10">

          <div className="brand-slider-container">
       <div className="brand-list">
      <div className="brand-item">
       
        <p>Typescript</p>
       
      </div>
      <div className="brand-item">
        
        <p>Java script</p>
      </div>
      <div className="brand-item">
      
        <p>React</p>
     
      </div>
      <div className="brand-item">
       
        <p>Next</p>
      
      </div>
      <div className="brand-item">
        
        <p>CSS</p>
   
      </div>

     
      <div className="brand-item">
     
        <p>SCSS</p>
       
      </div>
      <div className="brand-item">
      
        <p>Tailwind</p>
    
      </div>
      <div className="brand-item">
      
        <p>Express</p>
      
      </div>
      <div className="brand-item">
   
        <p>HTML</p>
      
      </div>
   
{/* TODO */}

       <div className="brand-item">
        
         <p>Typescript</p>
        
       </div>
       <div className="brand-item">
         
         <p>Java script</p>
       </div>
       <div className="brand-item">
             
         <p>React</p>
       </div>
       <div className="brand-item">
        
         <p>Next</p>
             
       </div>
       <div className="brand-item">
         
         <p>CSS</p>
       </div>
       <div className="brand-item">
         <p>SCSS</p>
        
       </div>
       <div className="brand-item">
             
         <p>Tailwind</p>
       </div>
       <div className="brand-item">
             
         <p>Express</p>
             
       </div>
       <div className="brand-item">
         <p>HTML</p>
             
       </div>
           </div>
         </div>
            </section>


            <section className="w-[85%] h-100 rounded-2xl  mt-2 flex flex-row infoBlock gap-10 items-center justify-center "> 
         <div className="w-[25%] h-[80%]  priceItem flex infoItem flex-col items-center justify-center rounded-[10px] transition transform hover:scale-[1.05] homePageItem">
          <h3 className="pb-10 text-[#fff] text-4xl animate__animated animate__fadeIn">NazDev <br/> Sprint</h3>
          <button className="btn transition hover:scale-[1.08] mt-10 "><Link href="/sprints">Подробнее</Link></button>
         
         </div>
    
         <div className="w-[25%] h-[80%]  priceItem flex  flex-col  infoItem items-center justify-center rounded-[10px] transition  homePageItem transform hover:scale-[1.05]">
         <h3 className="pb-10 text-[#fff] text-4xl animate__animated animate__fadeIn">NazDev <br/> Интенсив</h3>
         <button className="btn  transition hover:scale-[1.08] mt-10  "><Link href="/intensivs">Подробнее</Link></button>
         </div>

         <div className="w-[25%] h-[80%]  priceItem flex infoItem flex-col items-center justify-center rounded-[10px]  homePageItem transition transform hover:scale-[1.05]">
         <h3 className="pb-10 text-[#fff] text-4xl animate__animated animate__fadeIn">NazDev <br/> Бесплатные</h3>
        
         <button className="btn transition hover:scale-[1.08] mt-10  "><Link href='https://naz-dev-129-adaptiv.vercel.app/'>Начать</Link></button>
    
         </div>

            </section>

            {/* Three section*/}
            <section className="w-[85%] h-120  advantagesBlock  mt-10 flex flex-col scrollAnim">

          <div className="w-full h-[30%]  flex items-center justify-center  advantagesBlockOne">
            <h2 className="text-[#fff] text-3xl">Преимущества <span className="text-[blueviolet]">образовательной</span> платформы <span className="text-[blueviolet]">NazDev</span> </h2>
          </div>

                <div className="w-full h-[70%] flex flex-row items-center justify-center advantagesBlockTwo gap-7">
               <div className="  homePageItem transform transition-transform hover:scale-[1.05] w-[30%] h-[80%] rounded-3xl bg-[#111] flex   flex-col gap-7 items-center justify-center mainItem">
                <Image
                width={60}
                height={60}
                src={'/img/favoriteWork.png'}
                alt="sorruy"
                />
                <p className="text-[#fff]">Любовь к студентам</p>
                
                </div>
               <div className="  homePageItem transform transition-transform hover:rotate-[5deg] w-[30%] h-[80%] rounded-3xl bg-[#111] flex flex-col  gap-7 items-center justify-center mainItem">
               <Image
                  width={60}
                  height={60}
                  src={'/img/timeUp.png'}
                  alt="sorruy"
                  />
                  <p className="text-[#fff] text-1xl">Быстрый старт в разработке</p>
               </div>
               
               <div className="  homePageItem transform transition-transform hover:scale-[1.05] w-[30%] h-[80%] rounded-3xl bg-[#111] flex   flex-col gap-7 items-center justify-center mainItem">
               <Image
                  width={60}
                  height={60}
                  src={'/img/projects.png'}
                  alt="sorruy"
                  />
                  <p className="text-[#fff]">Разработка настоящих проектов</p>
               </div>
                 </div>

            </section >

            <section className="w-[85%] h-120 mt-5 flex flex-row items-center justify-center gap-10  footer" >
                  <div className=" footerItemOne w-[35%] h-[80%] rounded-3xl bg-[#111] flex items-center justify-center tracking-[2px] text-2xl text-[blueviolet] font-bold mainItem transform transition-transform hover:rotate-[4deg]">
                    <p className="text-4xl tracking-[5px]">FRONDENT</p>
                  </div>
                  <div className="footerItem w-[55%] h-[80%] rounded-3xl bg-[#111]  flex  flex-col mainItem  transform transition-transform hover:scale-[1.05] ">
                    <h3 className="text-[blueviolet] text-2xl pt-5 font-semibold">Frontent Разработчик</h3>
                    <p className="text-[#fff] px-10 leading-9 text-[20px] text-left py-5">Фронтенд-разработка (Frontend Development) – это процесс создания пользовательского интерфейса (UI) и пользовательского опыта (UX) веб-сайта или веб-приложения. Она включает в себя все визуальные и интерактивные элементы, с которыми взаимодействует пользователь при посещении сайта или использовании приложения.</p>
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
