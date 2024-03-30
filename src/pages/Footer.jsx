import React from "react";

function Footer() {
  const footerDetails = [
    {
      footerTitle: "حول",
      footerInfo1: "الشركة",
      footerInfo2: "من نحن؟",
      footerInfo3: "فرص العمل",
      footerInfo4: "المدونة",
    },
    {
      footerTitle: "خدماتنا",
      footerInfo1: "بطاقات الطيران",
      footerInfo2: "الرحلات البحرية",
      footerInfo3: "الفنادق",
      footerInfo4: "الرحلات البرية",
      footerInfo5: "تأمين الفيزا",
    },
    {
      footerTitle: "الحجوزات",
      footerInfo1: "العروض الجديدة",
      footerInfo2: "تأكد من حجزك",
      footerInfo3: "الاشتراكات",
      footerInfo4: "طرق السفر",
    },
    {
      footerTitle: "الموقع",
      footerInfo1: "سياسة الخصوصية",
      footerInfo2: "شروط الاستخدام",
      footerInfo3: "بلغ عن مشكلة",
      footerInfo4: "تواصل معنا",
    },
  ];
  return (
    <footer
      className="bg-[#191919] min-h-[200px] px-[3%] py-[3rem] "
      style={{ direction: "rtl" }}
    >
      <div className="footer-container  border-b border-[#4C4C4C] pb-10 gap-20 grid   ">
        <div className="footer-item-1  gap-4 flex flex-col">
          <div className="flex items-end gap-0.5 ">
            <span className="text-3xl font-semibold relative rounded-full cursor-pointer text-[#FFF9EA]  ">
              <a href="#">رحلاتي</a>
            </span>
            <span className=" h-1 w-1 bg-[#FEC430] rounded-lg"></span>
          </div>
          <p className="text-[#797979] text-sm sm:text-lg ">
            شركة متخصصة في مجال السياحة والسفر نقدم خدمات تأمين الرحلات
            والحجوزات والفيز لكل أنحاء العالم.
          </p>
        </div>
        {footerDetails.map((footerDetail) => (
          <div className="gap-6 flex flex-col " key={footerDetail.footerTitle}>
            <h1 className="text-xl font-semibold relative rounded-full text-[#FFF9EA]  ">
              {footerDetail.footerTitle}
            </h1>
            <div className="list flex flex-col gap-4">
              <span className="text-[#797979] text-sm sm:text-[auto] ">
                {footerDetail.footerInfo1}
              </span>
              <span className="text-[#797979] text-sm sm:text-[auto] ">
                {footerDetail.footerInfo2}
              </span>
              <span className="text-[#797979] text-sm sm:text-[auto] ">
                {footerDetail.footerInfo3}
              </span>
              <span className="text-[#797979] text-sm sm:text-[auto] ">
                {footerDetail.footerInfo4}
              </span>
              <span className="text-[#797979] text-sm sm:text-[auto] ">
                {footerDetail.footerInfo5}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="footer-copy mt-8 flex flex-wrap items-center gap-5 justify-between">
        <p className="text-[#636262]">
          جميع الحقوق محفوظة للموقع{" "}
          <span className="text-[#FEC430]"> عمرو كمال &copy;2024 </span>
        </p>
        <div className="socials  flex items-center gap-2 text-white ">
          <span className="icon-youtube-play cursor-pointer text-xl  py-2 px-3 border rounded-lg border-[#797979] "></span>
          <span className="icon-instagram text-xl cursor-pointer  py-2 px-3 border rounded-lg border-[#797979] "></span>
          <span className="icon-facebook-square cursor-pointer text-xl py-2 px-3 border rounded-lg border-[#797979]  "></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
