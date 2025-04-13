'use client'
import Link from "next/link"
import Image from "next/image"
import Drawer from '../../../components/drawer/drawer';
import AuthorHeader from '../../../components/authorHeader/authorHeader.js';
import "./page.scss"
export default function Intensivs() {
    return(
        <div className="w-340 h-600 mx-auto containerAuth   ">
            <AuthorHeader/> 
        <Drawer/>
        <main className="w-[95%] h-230   mx-auto flex flex-col items-center text-center my-10 firstRecordBlock">

            <section className="w-[90%] h-210  rounded-3xl sprintBlock fideInAnim red bg-[red]  mt-10">

                <div className="w-[90%] h-200 mx-auto flex flex-row flex-wrap  justify-center gap-10  contentBlock pt-10">
                    <div className="w-[100%] h-100  rounded-[10px] authorBlock flex flex-row items-center justify-center gap-7  authInfo  transition hover:scale-[1.05]">

                        <div className="w-[35%] h-[80%]  flex flex-col items-center justify-center ">
                            <div className="w-[150px] h-[150px] rounded-[50%] border-2 border-[blueviolet] flex items-center justify-center cycle ">
                                <Image
                                 className='rounded-[50%]'
                                 width={150}
                                 height={150}
                                 src="/img/NazDevLogo.jpg"
                                 alt='sorry'
                                />
                            </div>
                            <h3 className="pt-5 text-[#fff] text-3xl tracking-[2px]">NazDev</h3>
                        </div>

                        <div className="w-[55%] h-[80%]  authText ">
                            <p className="text-left text-[#fff] text-[18px]  leading-8 py-5 leading-[33px] ">NazDev – талантливый 17-летний разработчик, чьи навыки и видение позволили ему создать комплексную образовательную платформу для обучения программированию. Этот проект демонстрирует не только техническое мастерство NazDev, но и его стремление внести вклад в развитие образовательной сферы, предоставляя пользователям доступ к качественным и современным материалам.</p>
                        </div>
                    </div>
                    <div className="w-[100%] h-65  text-left text-[18px] px-10  flex items-center justify-center sprintBlock authInfoTwo transition hover:scale-[1.05]">
                        <p className="text-[#fff] leading-[33px]"> 
                          Почему я создал NazDev? Потому что верю: разработка сайтов и веб-приложений – это не элитарный клуб, а возможность для каждого, кто хочет изменить мир IT! Многие новички ошибочно считают это чем-то запредельным, но я, NazDev, уверен, что с качественным образованием и усердием, стать квалифицированным разработчиком неизбежно. В 17 лет я создал NazDev, чтобы показать, что учиться и расти – можно в любом возрасте.</p>
                  </div>
                
                </div>

            </section>
        </main>
        
         {/* TODO   блок о моем техническом стеке */}
 <section className="w-[95%] h-240   flex flex-col mx-auto  items-center gap-10 main scrollAnim ">
         <div className="w-[90%] h-[25%] sprintBlock transition hover:scale-[1.05] ">
             <h3 className="text-[#fff] text-2xl py-3 text-center">Разработка веб-сайтов и серверная часть</h3>
             <p className="text-[#fff] text-left px-15  text-[18px] leading-[33px]"> Уже сейчас я понимаю, как создаются современные веб-сайты, как они взаимодействуют с серверами через API, и как организованы 
                 базы данных. Я знаком с
                  принципами работы ORM-систем, таких как Prisma, и имею опыт работы с MySQL и PostgreSQL. Мои знания охватывают разра
                  ботку REST API, что позволяет создавать масштабируемые и эффективные веб-приложения.</p>
         </div>
         <div className="w-[90%] h-[25%] sprintBlock  transition hover:scale-[1.05] ">
             <h3  className="text-[#fff] text-2xl py-3 text-center">Разработка игр (Unity)</h3>
             <p className="text-[#fff] text-left px-15 text-[18px]  leading-[33px]">Помимо веб-разработки, я также увлечен созданием игр. Я изучал Unity и да
                 же разработал хоррор-игру, что позволило мне углубиться в принципы гейм-дизайна и программирования игрового процесса.</p>
         </div>
         <div className="w-[90%] h-[25%] sprintBlock transition hover:scale-[1.05]">
             <h3  className="text-[#fff] text-2xl py-3 text-center">Мой стек технологий включает в себя</h3>
            <p className="text-[#fff] text-left px-15 text-[18px] leading-[33px]"><span className="text-[blueviolet] text-2xl leading-10  font-medium">Frontend:</span>  Typescript, Java Script , PWA , Next.js, React, CSS, HTML, Zustand, Ant Design, React Hook Form, SCSS , LESS, Git, VS Code, WebStorm, React Native </p>
            <p className="text-[#fff] text-left px-15 text-[18px] "><span className="text-[blueviolet] text-2xl font-medium">Backend:</span>  Nest.js, Node.js, Express, JWT, HTTPS, PostgreSQl, MySQl
            , ORM (Prisma), API (REST API), Headless CMS</p>
         </div>
         <div className="w-[90%] h-[25%] sprintBlock transition hover:scale-[1.05]">
             <p className="text-[#fff] px-15 py-10 text-left text-[18px] leading-[33px]">Я верю, что возраст – не преграда для достижения целей. На NazDev я хочу создать сообщество, где ка
                 ждый может учиться, развиваться и реализовывать свои проекты. Присоединяйтесь, и давайте вместе создавать будущее IT!</p>
         </div>
 
 </section>
        </div>
    )
}