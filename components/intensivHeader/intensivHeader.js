import Link from "next/link"
export default function MainHeader() {
  return (
 <header className="w-[95%]  h-12  bg-[#111]  mx-auto   rounded-[5px]  flex items-center   headerIntensiv justify-between mt-4 mb-4">
       <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet] h1 ">NazDev  <span className="text-[#ffdc22] text-[22px] ">Prime</span></h1>
         <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
          <li className="transition hover:text-[blueviolet]" ><Link href="/">Главная</Link></li>
          <li className="transition hover:text-[blueviolet]"><Link href='/sprints'>Sprint</Link></li>
          <li className="transition hover:text-[blueviolet]"><Link href="/support"> Поддержка</Link></li>
          <li className="transition hover:text-[blueviolet]"> <Link href="https://naz-dev-pwa-6.vercel.app/">Бесплатные курсы</Link></li>
          <li className="transition hover:text-[blueviolet]"><Link href='/author'>Об авторе</Link></li>
       </ul>
 </header>

  )
}