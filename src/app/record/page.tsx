'use client'
import 'animate.css';
import Link from "next/link"
export default function Intensivs() {
    return(
        <div className="w-340 h-280 mx-auto containerSprint containerRecord fideInAnim ">
   

            <div className='w-full  h-250  my-20 mx-auto flex  flex-row gap-[30px] items-center justify-center recordBlock'>
            <button className='btnRecord transition hover:scale-[1.07] '><Link href='/'>Назад</Link></button>
              <div className="w-[46%] h-[90%] sprintBlock flex flex-col items-center record-card  recordOne_Block">
                
                <h2 className="text-[#9d4edd] text-6xl font-bold pt-80 ">NazDev</h2>
                <p className="text-[#fff] text-2xl font-medium py-10  ">Стань лучшим разработчиком уже сейчас</p>
              
              </div>

              <div className="w-[46%] h-[90%]  record  recordTwo_Block">
                <form action="" className=' flex flex-col items-center text-[#fff] gap-[20px] mt-60 form'>
                <label htmlFor="" className="text-3xl text-[#fff]">  Заявка на курс</label>
                  <input type="text" placeholder='Enter to first name' className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input" />
                  <input type="text" placeholder='Enter to last name'  className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"/>
                  <input type="text"  placeholder='Enter to email' className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"/>
                  <input type="text"  placeholder='Enter to phone' className="w-[80%] border-1 border-[#9d4edd] rounded-[10px] h-[60px] pl-4 text-2xl outline-0 transition hover:scale-[1.02] input"/>
                <button className=' bg-[#9d4edd] py-[5px] px-[20px] rounded-[10px] w-[80%] h-[50px] transition hover:scale-[1.05]  text-2xl tracking-[2px]'>Отправить</button>
                </form>
              </div>
            </div>
    

        </div>
    )
}