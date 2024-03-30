import React from "react";
import TextEnd from "../components/TextEnd";

function Trips() {
  const cards = [
    {
      cardImg: "/riyadh-img.png",
      cardTitle: "الرياض",
      cardCost: " أيام بتكلفة 1,500 دولار 2",
    },
    {
      cardImg: "/cairo-img.png",
      cardTitle: "القاهرة",
      cardCost: "3 أيام بتكلفة 1,250 دولار",
    },
    {
      cardImg: "/dubai-img.png",
      cardTitle: "دبي",
      cardCost: "3 أيام بتكلفة 2,500 دولار",
    },
    {
      cardImg: "/istanbul-img.png",
      cardTitle: "اسطنبول",
      cardCost: "5 أيام بتكلفة 1,500 دولار",
    },
  ];
  return (
    <section id="الرحلات" className="pt-16 pr-[3%] pb-10  ">
      <TextEnd title="الرحلات التي نقدمها" subTitle="قم بزيارة العالم" />
      {/* cards */}
      <div className="cards w-full gap-4 mt-10 text-end flex justify-end item ">
        {cards.map((card) => (
          <div
            key={card.cardTitle}
            className="card relative flex-shrink-0 sm:w-[350px] sm:h-[450px] w-[250px] h-[350px] "
          >
            <img
              loading="lazy"
              src={card.cardImg}
              alt={card.cardTitle}
              className="w-full h-[100%]"
            />
            <div className="card-text bg-white absolute bottom-5 left-7 rounded-xl py-2 px-4  w-[80%] m-auto  ">
              <h1 className="font-bold sm:text-xl mb-1">{card.cardTitle}</h3>
              <p className="text-[#A5A5A5] text-sm font-semibold ">
                {card.cardCost}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trips;
