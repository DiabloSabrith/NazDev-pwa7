'use client'
import 'animate.css';
import Link from "next/link"
import "./page.scss"
import Drawer from '../../../components/drawer/drawer';
import Circles from "../../../components/circles/circles.js"
import SupportHeader from "../../../components/supportHeader/supportHeader.js"
export default function Intensivs() {
    return(
        <div className=" w-340 h-500 mx-auto containerSprint ">
        <SupportHeader/>
         <Drawer />
        <main className="w-[95%] h-510 mx-auto flex flex-col items-center text-center my-10 supportMain ">
            <section className='w-[100%] h-170  flex flex-row items-center justify-center gap-5 px-[10px] supportContent'>

                <div className='w-[50%] h-[80%]  text-left pl-30 firstBlock-sup'>
                     <h2 className='text-[70px] font-bold text-[#fff] leading-[90px]'>NazDev<br/>Поддержка</h2>
                        <p className='text-[20px] text-[#fff] py-5 leading-[40px] font-medium flex flex-row text-justify '>
                        Добро пожаловать в раздел поддержки NazDev! Мы стремимся сделать ваше обучение максимально комфортным и эффективным. Наша команда всегда готова помочь вам на каждом этапе вашего образовательного пути.
                        </p>
                        <button className='supBtn transition hover:scale-[1.08] ml-3 uppercase '><Link href="/">На главную</Link></button>
                </div>

                <div className='w-[50%] h-[100%]  flex flex-row flex-wrap gap-8 items-center justify-center linkSup-block '>

                <div className='w-[35%] h-[47%] bg-[red] supportItem my-2 transition hover:scale-[1.05] linkSup-item'>
                    
                   <ul>
                           <li className='text-[#fff] text-left px-5 py-2'> <Link  className='text-[#fff] transition hover:text-[blueviolet]' href="#section1">Как мне начать обучение? </Link></li>
                           <li className='text-[#fff] text-left px-5 py-2'> <Link  className='text-[#fff] transition hover:text-[blueviolet]' href="#section2">Сколько стоят курсы? </Link> </li>
                           <li className='text-[#fff] text-left px-5 py-2'> <Link  className='text-[#fff] transition hover:text-[blueviolet]' href="#section3">В каком порядке лучше проходить курсы? </Link></li>
                           <li className='text-[#fff] text-left px-5 py-2'> <Link  className='text-[#fff] transition hover:text-[blueviolet]' href="#section4">Будут ли добавляться новые курсы?  </Link></li>
                           <li className='text-[#fff] text-left px-5 py-2'> <Link  className='text-[#fff] transition hover:text-[blueviolet]' href="#section5">Какой уровень сложности курсов? </Link></li>
                   </ul>
                </div>
                <div className='w-[35%] h-[47%] bg-[red] supportItem my-2 transition hover:scale-[1.05] linkSup-item'>
                <ul>
                       <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section1">Как мне начать обучение? </Link></li>
                       <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section2">Сколько стоят курсы? </Link> </li>
                        <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section3">В каком порядке лучше проходить курсы? </Link></li>
                        <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section4">Будут ли добавляться новые курсы?  </Link></li>
                        <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section5">Какой уровень сложности курсов? </Link></li>
                </ul>
                </div>
                <div className='w-[35%] h-[47%] bg-[red] supportItem my-2 transition hover:scale-[1.05] linkSup-item'>
                <ul>
                          <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section1">Как мне начать обучение? </Link></li>
                          <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section2">Сколько стоят курсы? </Link> </li>
                          <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section3">В каком порядке лучше проходить курсы? </Link></li>
                          <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section4">Будут ли добавляться новые курсы?  </Link></li>
                          <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section5">Какой уровень сложности курсов? </Link></li>
                  </ul>
                </div>
                <div className='w-[35%] h-[47%] bg-[red] supportItem my-2 transition hover:scale-[1.05] linkSup-item'>
                <ul>
                         <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section1">Как мне начать обучение? </Link></li>
                         <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section2">Сколько стоят курсы? </Link> </li>
                         <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section3">В каком порядке лучше проходить курсы? </Link></li>
                         <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section4">Будут ли добавляться новые курсы?  </Link></li>
                         <li className='text-[#fff] text-left px-5 py-2'> <Link  href="#section5">Какой уровень сложности курсов? </Link></li>
                 </ul>
                </div>
                </div>
            </section>
            {/* TODO */}
            <section className='w-[100%] h-270  flex flex-col items-center justify-center px-[10px]  gap-9 my-10 secondBlock-sup scrollAnim'>

                <div className='w-[90%] h-[20%] bg-[red] supportItem transition hover:scale-[1.05]'></div>
                <div className='w-[90%] h-[20%] bg-[red] supportItem transition hover:scale-[1.05]'></div>
                <div className='w-[90%] h-[20%] bg-[red] supportItem transition hover:scale-[1.05]'></div>
                <div className='w-[90%] h-[20%] bg-[red] supportItem transition hover:scale-[1.05]'></div>
            </section>
        </main>

    
    <Circles/>
        </div>
    )
}