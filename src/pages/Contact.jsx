import React from "react";
import TextEnd from "../components/TextEnd";

function Contact() {
  const contacts = [
    {
      contactTitle: "نقدم لك المساعدة",
      contactInfo:
        "إن كان لديك اي مشكلة في البلد الذي تسافر إليه سنقوم بمساعدك في هذا الموضوع.",
      contactImg: "/help.png",
    },
    {
      contactTitle: "للتواصل",
      contactInfo:
        "يمكنك التواصل معنا عبر الفورم أو عبر البريد الإلكتروني: company@mail.com",
      contactImg: "/communication.png",
    },
    {
      contactTitle: "أوقات الدوام",
      contactInfo:
        "يمكنك التواصل معنا يومياً أثناء أوقات الدوام من الساعة 9 صباحاً حتى 6 مساءاً.",
      contactImg: "/working-hours.png",
    },
  ];
  return (
    <section id="اتصل بنا" className="px-[3%] sm:my-20">
      <TextEnd subTitle="هل لديك سؤال؟" title="يسعدنا التواصل معك" />
      <div
        className="conatct-container gap-10 mt-8 grid md:grid-cols-2 "
        style={{ direction: "rtl" }}
      >
        <form className="bg-[#FFE7AC] rounded-r-[1.4rem] rounded-bl-[1.4rem] border-b-[0.5rem] border-r-[0.5rem] border-[0.01rem] border-[#191919] flex flex-col gap-4 rounded-2xl p-8">
          <div className="flex flex-col gap-2">
            <label className="sm:text-2xl text-xl font-semibold">الاسم</label>
            <input
              required
              className="py-2 px-4 outline-none rounded-xl  border border-[#191919] "
              type="text"
              placeholder="يرجى تسجيل اسمك الكامل"
            />
          </div>
          <div className="flex flex-col gap-2 ">
            <label className="sm:text-2xl text-xl font-semibold">
              البريد الإلكتروني
            </label>
            <input
              required
              type="email"
              className="py-2 px-4 outline-none rounded-xl  border border-[#191919] "
              placeholder="سجل بريدك الشخصي "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="sm:text-2xl text-xl font-semibold">الموضوع</label>
            <textarea
              required
              className="py-2 px-4 outline-none rounded-xl  h-[8rem] resize-none border border-[#191919] "
              placeholder="ما هو السؤال أو المشكلة التي لديك؟"
            ></textarea>
          </div>
          <div>
            <button
              className="bg-[#191919] text-white sm:w-auto w-full mt-2 py-2 px-12 rounded-xl "
              type="submit"
            >
              أرسل الرسالة
            </button>
          </div>
        </form>
        <div className="contact-info sm:items-start items-center sm:mb-0 mb-10 flex flex-col gap-10  ">
          {contacts.map((contact) => (
            <div
              key={contact.contactTitle}
              className="info-item flex sm:flex-row flex-col justify-center sm:text-start text-center   gap-2 items-center flex-grow "
            >
              <img
                src={contact.contactImg}
                className="w-[110px]"
                alt={contact.contactTitle}
              />
              <div className="info-detail flex flex-col gap-3">
                <h1 className="info-title sm:text-xl text-[#191919] text-lg md:text-2xl font-semibold ">
                  {contact.contactTitle}
                </h1>
                <p className="text-[#4C4C4C] sm:w-[70%] text-sm   md:text-[0.9rem] font-semibold">
                  {contact.contactInfo}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
