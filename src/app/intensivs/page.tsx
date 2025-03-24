import Image from "next/image";
import Link from "next/link"
export default function Intensivs() {
    return(
        <div className="w-340 h-500 mx-auto  ">

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

        <main className="w-[95%] h-510 mx-auto flex flex-col items-center text-center">

            <section className="w-full h-70 flex flex-col items-center justify-center ">
            <h1 className="text-5xl text-[#fff] pt-10  leading-[60px] font-medium tracking-[2px]">NazDev <span className="text-[blueviolet] font-semibold">Интенсивы</span></h1>
            <p className=" leading-[35px] text-[#fff] text-[20px] pt-3 ">Интенсивы – это не скучные лекции, а концентрированная практика! Быстро познакомьтесь с новыми технологиями,<br/> решите реальные задачи и получите опыт, который сразу сможете применить в работе. <br/>Идеально для тех, кто хочет быть впереди!</p>
            </section>

            <section className="w-[90%] h-300 bg-green-300 rounded-3xl sprintBlock">

                <div className="w-[90%] h-250 mx-auto flex flex-row gap-10 flex-wrap items-center justify-center  pt-10">
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] sprintBlock"></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px]  transition transform hover:scale-[1.06] sprintBlock" ></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] sprintBlock"></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] sprintBlock"></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] sprintBlock"></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] sprintBlock"></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] sprintBlock"></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] sprintBlock"></div>
                    <div className="w-[25%] h-[30%] sprintItem rounded-[15px] transition transform hover:scale-[1.06] sprintBlock"></div>
                </div>

            </section>

        </main>
        </div>
    )
}