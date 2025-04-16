'use client';
import 'animate.css';
import Drawer from '../components/drawer/drawer';
import Circles from "../components/circles/circles.js";
import IntensivHeader from "../components/intensivHeader/intensivHeader.js";
import IntensivCard from "../../../Card/intensivCard/intensivCard.js";
import IntensivData from "../../../clientData/intensivdata/intensivdata.js";

import "./page.scss";

export default function Intensivs() {
  return (
    <div className="w-340 h-500 mx-auto containerIntensiv">
      <IntensivHeader />
      <Drawer />

      <main className="w-[95%] h-510 mx-auto flex flex-col items-center text-center">
        {/* Заголовок */}
        <section className="w-full h-70 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-[#fff] pt-10 leading-[60px] font-medium tracking-[2px] animate__animated animate__zoomIn">
            NazDev <span className="text-[blueviolet] font-semibold">Интенсивы</span>
          </h1>
          <p className="leading-[35px] text-[#fff] text-[20px] pt-3 animate__animated animate__zoomIn px-60">
            Интенсивы – это не скучные лекции, а концентрированная практика! Быстро познакомьтесь с новыми технологиями, решите реальные задачи и получите опыт, который сразу сможете применить в работе. Идеально для тех, кто хочет быть впереди!
          </p>
        </section>

        {/* Карточки */}
        <section className="w-[90%] h-300 rounded-3xl">
          <div className="w-[90%] h-250 mx-auto flex flex-row gap-10 flex-wrap items-center justify-center intensivBlock pt-10">
            {IntensivData.map((item, index) => (
              <IntensivCard
                key={index}
                title={item.title}
                description={item.description}
                price={item.price}
                link={item.link}
              />
            ))}
          </div>
        </section>
      </main>

      <Circles />
    </div>
  );
}
