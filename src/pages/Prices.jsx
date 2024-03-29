import React from "react";
import TextEnd from "../components/TextEnd";

function Prices() {
  const cards = [
    {
      cardPrice: "$850",
      cardStrategy: "خطة رجال الأعمال",
      cardGoal: "كونك شخص ذو ذوق خاص ستكون هذه الخطة هي ما يناسبك تماماً",
      cardItem1: "بطاقات سفر بدرجة رجال الأعمال",
      cardItem2: "حجز بفندق خمس نجوم",
      cardItem3: "متابعة خاصة لإحتياجاتك",
    },
    {
      primary: true,
      cardPrice: "$520",
      cardStrategy: "خطة عائلية",
      cardGoal: "هذه الخطوة مناسبة جداً إن كنت ترغب في قضاء إجازتك مع العائلة",
      cardItem1: "بطاقات سفر في الدرجة أولى",
      cardItem2: "حجز بفندق أربع نجوم",
      cardItem3: "رحلات ميدانية بشكل يومي",
    },
    {
      cardPrice: "$260",
      cardStrategy: "خطة الاقتصادية",
      cardGoal:
        "نقدم لك إمكانية زيارة بلدان العالم بأقل التكاليف الممكنة وبأفضل الخدمات",
      cardItem1: "بطاقات سفر في الدرجة الاقتصادية",
      cardItem2: "حجز بفندق ثلاث نجوم",
      cardItem3: "وجبات إفطار يومية",
    },
  ];
  return (
    <section id="الأسعار" className="sm:py-4 px-[3%]">
      <TextEnd subTitle="لا تقلق حول التكلفة" title="خطط تناسب ميزانيتك" />
      <div className="prices-container grid sm:grid-cols-2 sm:gap-3 gap-7 lg:grid-cols-3 sm:mt-16 mt-8 w-full md:ml-6 ">
        {cards.map((card) => (
          <div
            key={card.cardStrategy}
            style={{
              borderBottom: "8px solid black",
              borderRight: "8px solid black",
              borderTopRightRadius: "20px",
              borderBottomLeftRadius: "20px",
            }}
            className={`price-card m-auto flex flex-col gap-5 border border-[#191919] rounded-xl sm:w-[90%] w-[100%] p-5 ${
              card.primary
                ? "bg-[#46368B] text-white md:mb-14 "
                : "bg-[#FFE7AC]"
            } `}
          >
            <div className="info" style={{ direction: "rtl" }}>
              <div className="info-titles">
                <b className="sm:text-3xl text-xl font-bold">
                  {card.cardPrice}
                </b>{" "}
                <span className="sm:text-lg font-semibold">/ للشخص</span>
                <h3 className="sm:text-xl text-xl font-bold mb-2 ">
                  {card.cardStrategy}
                </h3>
                <p
                  className={`sm:text-sm text-xs  font-[400] my-4 pb-5  border-b  ${
                    card.primary ? "border-[#A5A5A5]" : "border-[#4C4C4C]"
                  }  `}
                >
                  {card.cardGoal}
                </p>
              </div>
              <div className="info-items flex flex-col gap-4 mb-8 ">
                <div className="info-item text-sm font-semibold ">
                  <span className="icon-check  px-[3px] text-xs py-[3px] text-black bg-white rounded-full "></span>{" "}
                  {card.cardItem1}
                </div>
                <div className="info-item text-sm font-semibold ">
                  <span className="icon-check  px-[3px] text-black text-xs py-[3px] bg-white rounded-full"></span>{" "}
                  {card.cardItem2}
                </div>
                <div className="info-item text-sm font-semibold ">
                  <span className="icon-check  px-[3px] text-black text-xs py-[3px] bg-white rounded-full"></span>{" "}
                  {card.cardItem3}
                </div>
              </div>
            </div>
            <div className="book-now">
              <div
                className={`btn-reserve sm:text-lg font-[500] text-black  border
                ${
                  card.primary ? "border-white" : "border-black"
                }  myBtn:py-2 myBtn:px-11 py-2 justify-center cursor-pointer  rounded-xl flex items-center gap-3 `}
              >
                <span className="icon-chevron-left bg-white rounded-full sm:w-7 sm:h-7 h-5 w-5  font-bold flex justify-center items-center "></span>{" "}
                <button
                  className={`${card.primary ? "text-white" : "text-black"}`}
                >
                  احجز الآن
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Prices;
