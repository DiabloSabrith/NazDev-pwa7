'use client'
import Link from "next/link"
export default function IntensivCard ({title, description,price,link}){
    return(

          <div className="w-[30%] h-[45%] sprintItem rounded-[15px] transition transform hover:scale-[1.06]  intensivItem sprintBlock flex justify-center items-center flex-col">
             <h3 className="text-[#fff] text-4xl tracking-[2px] font-semibold">{title}</h3>
            <p className="text-[#fff] pt-4 px-7">{description}</p>
            <span className='pt-7 text-[yellow] text-3xl tracking-[3px]'>{price}</span>
            <button className="btn mt-10 transition hover:scale-[1.10]"><Link href={link}>Подробнее</Link></button>
            </div> 
    )
}