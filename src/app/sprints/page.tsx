'use client';
import 'animate.css';
import Drawer from '../../../components/drawer/drawer';
import "./sprints.page.scss";
import Circles from "../../../components/circles/circles.js";
import SprintHeader from "../../../components/sprintHeader/sprintHeader.js";
import SprintCard from "../../../Card/sprintCard/sprintCard.js";
import ClientData from "../../../clientData/sprintdata/sprintdata.js";

export default function Intensivs() {
  return (
    <div className="w-340 h-500 mx-auto containerSprint">
      <SprintHeader />
      <Drawer />

      <main className="w-[95%] h-500 mx-auto flex flex-col items-center text-center">
        {/* Header */}
        <section className="w-full h-70 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-[#fff] pt-10 leading-[60px] font-medium tracking-[2px] animate__animated animate__zoomInDown">
            NazDev <span className="text-[blueviolet] font-semibold">Sprint</span>
          </h1>
          <p className="leading-[35px] text-[#fff] text-[20px] pt-3 animate__animated animate__zoomInDown px-60">
            Это серия быстрых, сфокусированных мастер-классов, призванных дать вам ключевые знания и навыки для создания современных веб-приложений
          </p>
        </section>

        {/* Sprints Content */}
        <section className="w-[90%] h-300 rounded-3xl sprintMainBlock main">
          <div className="w-[90%] h-250 mx-auto flex flex-row gap-10 flex-wrap items-center justify-center pt-10 ">
            {ClientData.map((item, index) => (
              <SprintCard
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
