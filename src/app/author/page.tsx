'use client'
import Link from "next/link"
import Drawer from '../components/drawer/drawer';
export default function Intensivs() {
    return(
        <div className="w-340 h-700 mx-auto containerAuth   ">

        <header className="w-[95%]  h-12  bg-[#111]  mx-auto  rounded-full flex items-center  justify-between mt-4 mb-4 headerAuth">
              <h1 className="text-3xl tracking-[2px] font-semibold ml-10 text-[blueviolet]  ">NazDev </h1>
                <ul className="flex gap-[20px] mr-[4vw] text-[#fff] tracking-[1px]">
                 <li className="transition hover:text-[blueviolet]" ><Link href="/">Главная</Link></li>
                 <li className="transition hover:text-[blueviolet]"><Link href='/sprint'>Sprint</Link></li>
                 <li className="transition hover:text-[blueviolet]">Поддержка</li>
                 <li className="transition hover:text-[blueviolet]"> <Link href="https://naz-dev-129-adaptiv.vercel.app/">Бесплатные курсы</Link></li>
                
              </ul>
        </header>
        <Drawer/>
        <main className="w-[95%] h-270   mx-auto flex flex-col items-center text-center my-10 firstRecordBlock">

            <section className="w-[90%] h-250  rounded-3xl sprintBlock fideInAnim red  ">

                <div className="w-[90%] h-250 mx-auto flex flex-row gap-10 flex-wrap  justify-center   contentBlock pt-10">
                    <div className="w-[100%] h-100  rounded-[10px] authorBlock flex flex-row items-center justify-center gap-7  authInfo ">

                        <div className="w-[35%] h-[80%]  flex flex-col items-center justify-center ">
                            <div className="w-[150px] h-[150px] rounded-[50%] border-2 border-[blueviolet] flex items-center justify-center"></div>
                            <h3 className="pt-5 text-[#fff] text-3xl tracking-[2px]">NazDev</h3>
                        </div>

                        <div className="w-[55%] h-[80%]  authText">
                            <p className="text-left text-[#fff] text-[18px]  leading-8 py-5 ">NazDev – талантливый 17-летний разработчик, чьи навыки и видение позволили ему создать комплексную образовательную платформу для обучения программированию. Этот проект демонстрирует не только техническое мастерство NazDev, но и его стремление внести вклад в развитие образовательной сферы, предоставляя пользователям доступ к качественным и современным материалам.</p>
                        </div>
                    </div>
                    <div className="w-[100%] h-90 bg-amber-500 text-left text-[18px] px-10  flex items-center justify-center sprintBlock authInfoTwo">
                        <p className="text-[#fff]">NazDev создан, чтобы изменить представление о веб-разработке! Многие новички считают, что это удел избранных, но я, NazDev, уверен: создание сайтов, мобильных и веб-приложений доступно каждому. Достойное образование + упорство = квалифицированный разработчик. В 17 лет я написал NazDev, чтобы доказать: стать лучшим никогда не поздно!”

                        Вариант 2 (более развернутый, с акцентом на возможности):
                        
                        “Почему я создал NazDev? Потому что верю: разработка сайтов и веб-приложений – это не элитарный клуб, а возможность для каждого, кто хочет изменить мир IT! Многие новички ошибочно считают это чем-то запредельным, но я, NazDev, уверен, что с качественным образованием и усердием, стать квалифицированным разработчиком неизбежно. В 17 лет я написал NazDev, чтобы показать, что учиться и расти – можно в любом возрасте.</p>
                  </div>
                
                </div>


            </section>
        </main>
         {/* TODO   блок о моем техническом стеке */}
 <section className="w-[95%] h-250   flex flex-col mx-auto  items-center gap-10 main">
         <div className="w-[90%] h-[25%] sprintBlock">
             <h3 className="text-[#fff] text-2xl py-3 text-center">Разработка веб-сайтов и серверная часть</h3>
             <p className="text-[#fff] text-left px-15  text-[18px] "> Уже сейчас я понимаю, как создаются современные веб-сайты, как они взаимодействуют с серверами через API, и как организованы 
                 базы данных. Я знаком с
                  принципами работы ORM-систем, таких как Prisma, и имею опыт работы с MySQL и PostgreSQL. Мои знания охватывают разра
                  ботку REST API, что позволяет создавать масштабируемые и эффективные веб-приложения.</p>
         </div>
         <div className="w-[90%] h-[25%] sprintBlock">
             <h3  className="text-[#fff] text-2xl py-3 text-center">Разработка игр (Unity)</h3>
             <p className="text-[#fff] text-left px-15 text-[18px] ">Помимо веб-разработки, я также увлечен созданием игр. Я изучал Unity и да
                 же разработал хоррор-игру, что позволило мне углубиться в принципы гейм-дизайна и программирования игрового процесса.</p>
         </div>
         <div className="w-[90%] h-[25%] sprintBlock">
             <h3  className="text-[#fff] text-2xl py-3 text-center">Мой стек технологий включает в себя</h3>
            <p className="text-[#fff] text-left px-15 text-[18px]"><span className="text-[blueviolet] text-2xl leading-10  font-medium">Frontend:</span> Next.js, React, CSS, HT
            ML, Zustand, Ant Design, React Hook Form</p>
            <p className="text-[#fff] text-left px-15 text-[18px] "><span className="text-[blueviolet] text-2xl font-medium">Backend:</span>  Nest.js, Node.js, Express
            , ORM (Prisma), API (REST API)</p>
         </div>
         <div className="w-[90%] h-[25%] sprintBlock">
             <p className="text-[#fff] px-15 py-10 text-left text-[18px]">Я верю, что возраст – не преграда для достижения целей. На NazDev я хочу создать сообщество, где ка
                 ждый может учиться, развиваться и реализовывать свои проекты. Присоединяйтесь, и давайте вместе создавать будущее IT!</p>
         </div>
 
 </section>
        </div>
    )
}