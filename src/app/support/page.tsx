'use client'
import 'animate.css';
import Link from "next/link"
import Drawer from '../components/drawer/drawer';

export default function Intensivs() {
    return(
        <div className="w-340 h-500 mx-auto containerSprint ">

        <header className="w-[95%] headerSprint h-12  bg-[#111]  mx-auto   rounded-[5px] flex items-center  justify-between mt-4 mb-4">
              <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet] h1 ">NazDev  <span className="text-[#ffdc22] text-[22px] ">Prime</span></h1>
                <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
                 <li className="transition hover:text-[blueviolet]" ><Link href="/">Главная</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/intensivs'>Интенсивы</Link></li>
                 <li  className="transition hover:text-[blueviolet]"><Link href='https://naz-dev-125-adaptiv.vercel.app/support'>Поддержка</Link></li>
                 <li  className="transition hover:text-[blueviolet]"><Link href='https://naz-dev-pwa-6.vercel.app/'>Бесплатные курсы</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/author'>Об авторе</Link></li>
                 
              </ul>
        </header> 
         <Drawer /> 

        <main className="w-[95%] h-510 mx-auto flex flex-col items-center text-center  bg-[blueviolet] ">
            <section className='w-[100%] h-170  flex flex-row items-center justify-center gap-5'>

                <div className='w-[40%] h-[80%] bg-[blue]  text-left'>
                     <h2 className='text-[80px] font-bold text-[#fff]'>NazDev</h2>
                        <p>
                        Добро пожаловать в раздел поддержки NazDev! Мы стремимся сделать ваше обучение максимально комфортным и эффективным. Наша команда всегда готова помочь вам на каждом этапе вашего образовательного пути.
                        </p>
                        <button>На главную</button>
                </div>

                <div className='w-[55%] h-[80%] bg-[blue] '></div>
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