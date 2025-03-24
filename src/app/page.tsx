import Image from "next/image";
import Link from "next/link"
export default function Home() {
  return (
<div className="  container w-340 h-500 mx-auto  flex  flex-col">

    <header className="w-[95%]  h-12  bg-[#111]   mx-auto  rounded-full flex items-center  justify-between mt-4 mb-4 header">
          <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet] ">NazDev </h1>
            <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
             <li className="transition hover:text-[blueviolet] "><Link href='/sprints'>Sprint</Link></li>
             <li className="transition hover:text-[blueviolet]"><Link href='/intensivs'>Интенсивы</Link></li>
             <li className="transition hover:text-[blueviolet]">Поддержка</li>
             <li className="transition hover:text-[blueviolet]">Бесплатные курсы</li>
             <li className="transition hover:text-[blueviolet]"><Link href='/author'>О нас</Link></li>
          </ul>
    </header>

    <main className="w-[95%] h-510  mx-auto flex flex-col items-center text-center ">
    {/* Надо обернуть в section */}
           <h1 className="text-5xl text-[#fff] pt-10  leading-[60px]">Стань лучшим разработчиком<br/> <span className="text-[blueviolet] font-semibold">c NazDev</span></h1>
           <p className=" leading-[35px] text-[#fff] text-[20px] pt-3 ">Этот проект разработан семнадцатилетним подростком, стремящимся доказать, <br/>что программирование — это не удел избранных, а возможность, <br/>доступная каждому</p>
           
           <div className="flex flex-row gap-3 mt-5 ">
          
         
           </div>
{/* Second section  */}
            <section className="w-[85%] h-100 rounded-2xl  mt-20 flex flex-row infoBlock gap-10 items-center justify-center  ">
               {/*  <div className="w-[50%] h-full "> */}
               {/*    <p className="text-left leading-[40px] text-[24px] text-[#fff] p-10">Согласно статистике, <span className="text-[blueviolet]">95%</span> людей считают, что frontend-разработка и программирование в целом являются сложной задачей. Однако моя <span className="text-[blueviolet]">цель</span>  - опровергнуть это убеждение.</p> */}
               {/*  </div> */}
               {/*  <div className="w-[50%] h-full"> */}
               {/*    <p className="text-left text-[#fff] text-[23px] leading-[40px] p-10"> <span className="text-[blueviolet]">Моя цель</span> – не просто научить вас кодить, а раскрыть перед вами дверь в мир <span className="text-[blueviolet]">Frontent</span> разработки, показать, что это не тернистый путь, а увлекательное путешествие, полное творчества и возможностей.</p>  */}
                
         <div className="w-[25%] h-[80%]  priceItem flex  flex-col items-center justify-center rounded-[10px] transition transform hover:scale-[1.05]">
          <h3 className="pb-10 text-[#fff] text-4xl">NazDev <br/> Sprint</h3>
          <button className="btn  ">Записаться</button>
          <span className="text-yellow-300 font-medium text-[20px] pt-5">от 799 руб</span>
         </div>
    
         <div className="w-[25%] h-[80%]  priceItem flex  flex-col items-center justify-center rounded-[10px] transition transform hover:scale-[1.05]">
         <h3 className="pb-10 text-[#fff] text-4xl ">NazDev <br/> Интенсив</h3>
         <button className="btn   ">Записаться</button>
         <span className="text-red-600 font-medium text-[20px] pt-5">от 990 руб</span>
         </div>

         <div className="w-[25%] h-[80%]  priceItem flex  flex-col items-center justify-center rounded-[10px] transition transform hover:scale-[1.05]">
         <h3 className="pb-10 text-[#fff] text-4xl">NazDev <br/> Бесплатные</h3>
        
         <button className="btn  "><Link href='https://naz-dev-129-adaptiv.vercel.app/'>Начать</Link></button>
         <span className="text-yellow-300 font-medium text-[20px] pt-5">Free</span>
         </div>
            </section>

            {/* Three section*/}
            <section className="w-[85%] h-120  mt-10 flex flex-col">

          <div className="w-full h-[30%]  flex items-center justify-center">
            <h2 className="text-[#fff] text-3xl">Преимущества <span className="text-[blueviolet]">образовательной</span> платформы <span className="text-[blueviolet]">NazDev</span> </h2>
          </div>

                <div className="w-full h-[70%] flex flex-row items-center justify-center  gap-7">
               <div className=" transform transition-transform hover:scale-[1.05] w-[30%] h-[80%] rounded-3xl bg-[#111] flex   flex-col gap-7 items-center justify-center mainItem">
                <Image
                width={60}
                height={60}
                src={'/img/favoriteWork.png'}
                alt="sorruy"
                />
                <p className="text-[#fff]">Любовь к студентам</p>
                
                </div>
               <div className=" transform transition-transform hover:rotate-[5deg] w-[30%] h-[80%] rounded-3xl bg-[#111] flex flex-col  gap-7 items-center justify-center mainItem">
               <Image
                  width={60}
                  height={60}
                  src={'/img/timeUp.png'}
                  alt="sorruy"
                  />
                  <p className="text-[#fff] text-1xl">Быстрый старт в разработке</p>
               </div>
               
               <div className=" transform transition-transform hover:scale-[1.05] w-[30%] h-[80%] rounded-3xl bg-[#111] flex   flex-col gap-7 items-center justify-center mainItem">
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

            <section className="w-[85%] h-120 mt-5 flex flex-row items-center justify-center gap-10" >
                  <div className="w-[35%] h-[80%] rounded-3xl bg-[#111] flex items-center justify-center tracking-[2px] text-2xl text-[blueviolet] font-bold mainItem transform transition-transform hover:rotate-[4deg]">
                    <p className="text-4xl tracking-[5px]">FRONDENT</p>
                  </div>
                  <div className="w-[55%] h-[80%] rounded-3xl bg-[#111]  flex  flex-col mainItem  transform transition-transform hover:scale-[1.05] ">
                    <h3 className="text-[blueviolet] text-2xl pt-5 font-semibold">Frontent Разработчик</h3>
                    <p className="text-[#fff] px-10 leading-9 text-[20px] text-left py-5">Фронтенд-разработка (Frontend Development) – это процесс создания пользовательского интерфейса (UI) и пользовательского опыта (UX) веб-сайта или веб-приложения. Она включает в себя все визуальные и интерактивные элементы, с которыми взаимодействует пользователь при посещении сайта или использовании приложения.</p>
                  </div>
            </section>
    </main>
</div>
    )
}
