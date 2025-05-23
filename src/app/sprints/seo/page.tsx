import 'animate.css';
import Link from "next/link"
import "./page.scss"
export default function Intensivs() {
    return(
        <div className="w-340 h-200 mx-auto containerSprint  ">
        <header className="w-[95%] headerSprint h-12  bg-[#111]  mx-auto  rounded-[5px] flex items-center  justify-between mt-4 mb-4">
              <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet] h1 ">NazDev   <span className="text-[#ffdc22] text-[22px] ">Prime</span> </h1>
                <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
                 <li className="transition hover:text-[blueviolet]" ><Link href="/">Главная</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/intensivs'>Интенсивы</Link></li>
                 <li  className="transition hover:text-[blueviolet]"><Link href='https://naz-dev-125-adaptiv.vercel.app/support'>Поддержка</Link></li>
                 <li  className="transition hover:text-[blueviolet]"><Link href='https://naz-dev-125-adaptiv.vercel.app/'>Бесплатные курсы</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/author'>Об авторе</Link></li>
                 
              </ul>
        </header> 

        
        <main className=' w-[95%] h-200   mx-auto flex flex-row items-center text-center my-10 firstRecordBlock main   gap-10  justify-center'>

            <section className=' w-[45%] h-[90%] bg-amber-400  flex flex-col  sprintBlock items-center  relative oneSection '>

                <h3 className='text-[#fff] font-bold text-5xl pt-30 tracking-[4px]'>SEO</h3>
                <p className='text-[#fff]  px-[60px] text-[18px] pt-15 leading-8 text-left'>
                   
                Погрузись в мир SEO - интенсив! Узнай все секреты поисковой оптимизации: от подбора ключевых слов и технического SEO до линкбилдинга и анализа результатов. На этом интенсивном курсе ты получишь практические знания и навыки, которые помогут тебе улучшить видимость своего сайта в поисковой выдаче 
                   
                </p>

            <span className='text-[blueviolet] pt-20  font-semibold    pl-[46%] '>С уважением от NazDev</span>

            </section>

            <section className=' w-[45%] h-[90%]  flex flex-col items-center justify-center  sprintBlock twoSection'>
            <h2 className='my-10 text-2xl text-[blueviolet] font-semibold'>Oсталось мест : <span className='text-[yellow]'>6/10</span></h2>
            <div className="w-[70%] h-[65%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]   sprintBlock  item sprintBlockItem flex justify-center items-center flex-col">
                 <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold ">SEO</h3>
                   <p className="text-[#fff] pt-4 px-7">Создание сайта портфолио без применения библиотек</p>
                <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>799руб</span>
                <button className="btn mt-10 transition hover:scale-[1.10]"><Link href="/record">Записаться</Link></button>
               </div>
        </section>

        </main>
         </div>
    )
}