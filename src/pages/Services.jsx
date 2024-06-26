import React from "react";
import TextCenter from "../components/TextCenter";

function Services() {
  const services = [
    {
      servicesImg: "/services-icon-03.png",
      servicesTitle: "رحلات ميدانية",
      servicesDetail:
        "لن تكون إجازتك مملة معنا فهنا الكثير من الخطط والرحلات المختلفة.",
    },
    {
      servicesImg: "/services-icon-02.png",
      servicesTitle: "حجوزات فندقية",
      servicesDetail:
        "لا تقلق حول مكان إقامتك فنحن نهتم بكامل الحجوزات الخاصة بك.",
    },
    {
      servicesImg: "/services-icon-01.png",
      servicesTitle: "دليل سياحي",
      servicesDetail: "نقدم لك خدمات الإرشاد السياحي لبناء خطط سفر مميزة.",
    },
  ];
  return (
    <section id="الخدمات" className="relative text-center py-12  ">
      <TextCenter subTitle="تمتع في رحلتك" title="مجموعة من خدماتنا" />
      <svg
        style={{ transform: "translate(-50%,-50%)" }}
        className="absolute top-[210px]  sm:ml-[40%] ml-[20%] "
        width={`55`}
        height="100"
        viewBox="0 0 81 137"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.207 128.13C28.4202 116.644 26.1211 104.45 32.1465 93.6653C36.6478 95.3748 36.8979 98.6958 35.4433 101.064C33.3958 104.421 33.5231 107.847 33.3271 111.341C32.9717 117.819 32.7998 124.308 32.6041 130.783C32.4226 136.816 30.5126 138.175 25.3083 135.698C18.3426 132.396 11.4199 128.991 4.49038 125.597C3.15466 124.941 1.90993 124.097 0.439308 123.234C4.63221 120.025 5.40294 120.171 21.2588 126.923C20.8529 125.186 20.69 123.801 20.2188 122.542C11.2966 98.7233 11.7305 75.2766 23.0491 52.2941C27.8819 42.4684 34.3541 34.0728 44.5249 29.5256C47.3435 28.2648 48.3839 26.1529 49.2143 23.5471C51.7499 15.7073 56.0808 9.05094 62.1439 3.60543C63.6938 2.21175 65.5072 1.13396 67.6553 0.413878C61.5218 8.3799 54.5473 15.6264 52.6566 26.3424C54.138 26.4069 55.4104 26.4776 56.6846 26.5171C68.2159 26.8454 77.1399 34.0529 80.143 45.4522C82.7691 55.4538 77.9509 64.418 68.5528 67.0184C58.0061 69.9431 48.3355 64.5528 46.1497 54.1653C45.3796 50.5066 45.5317 46.6161 45.4317 42.8354C45.3763 40.676 45.6659 38.4937 45.838 35.7106C40.3602 37.6168 36.7908 41.1758 33.7796 45.2559C21.9263 61.3504 16.9494 79.5667 18.5961 99.5144C19.1212 105.946 20.7681 112.295 22.1655 118.61C22.8748 121.846 24.1813 124.95 25.2207 128.106L25.207 128.13ZM64.1727 33.4129C61.5498 33.2419 57.496 32.7781 53.4275 32.8697C52.3399 32.8914 50.5461 34.4641 50.3332 35.5636C49.1124 42.1455 48.3159 48.8155 50.6894 55.3334C52.8266 61.1808 59.1887 64.2089 65.8199 62.7224C72.1466 61.2987 75.8813 56.6123 75.3064 50.2969C74.685 43.4225 71.0624 38.2977 64.1658 33.425L64.1727 33.4129Z"
          fill="#755AE8"
        />
      </svg>

      <div className="services-container sm:grid-cols-2 grid-cols-1 gap-10 pr-10 md:grid-cols-3 max-w-[94%] py-14 px-10 grid rounded-xl mx-auto bg-[#F1EFFD]">
        {services.map((service) => (
          <div
            key={service.servicesTitle}
            className="service flex flex-col gap-2  sm:max-w-[280px] m-auto "
          >
            <img
              src={service.servicesImg}
              className="sm:w-[50%] w-[130px] m-auto"
              alt={service.servicesTitle}
            />
            <h3 className="sm:text-2xl text-xl font-semibold ">
              {service.servicesTitle}
            </h3>
            <p className="sm:text-sm  text-xs w-[80%] m-auto text-[#A5A5A5] font-semibold ">
              {service.servicesDetail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
