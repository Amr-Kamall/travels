function Slide({ isOpenedMenu }) {
  return (
    <section className=" h-[70vh] ">
      <div className="slide-text  text-center text-white mt-[120px] gap-8  flex justify-center items-center flex-col ">
        <h1 className=" text-4xl sm:text-6xl leading-tight font-bold ">
          سافر معنا إلى العالم
        </h1>
        <p className=" text-l leading-8 w-[100%] md:w-[30%]  sm:text-xl m-auto ">
          نوفر لك أفضل الرحلات التي تحتاجها لجميع البلدان وبخدمات مخصصة لك
          ولعائلتك
        </p>
        <div className="btn-reserve  sm:text-lg font-[500] text-black myBtn:w-auto w-[85%]  bg-[#FEC430]  myBtn:py-2 myBtn:px-11 py-2 justify-center cursor-pointer  rounded-xl flex items-center gap-3 ">
          <span className="icon-chevron-left bg-white rounded-full sm:w-7 sm:h-7 h-5 w-5  font-bold flex justify-center items-center "></span>{" "}
          <button>احجز الآن</button>
        </div>

        <svg
          className={`absolute myBtn:top-[500px] myBtn:ml-[-90px] ${
            isOpenedMenu ? "myBtn:top-[740px] top-[740px]" : "top-[500px]"
          } ml-[-40px]`}
          style={{ transform: "translate(-50%,-50%)" }}
          width="120"
          height="164"
          viewBox="0 0 132 164"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_102_336)">
            <path
              d="M98.0858 114.538C92.0132 119.699 84.3012 120.984 78.4152 125.914C78.2769 126.03 78.4246 126.535 78.488 127.414C79.8753 127.216 81.3168 127.296 82.5495 126.8C88.226 124.523 93.9437 122.328 99.4439 119.64C104.656 117.102 105.09 114.062 101.349 109.474C97.9348 105.284 94.4415 101.179 90.9481 97.0636C90.5713 96.6245 89.9677 96.3962 88.7045 95.547C89.4132 102.669 94.739 106.258 97.4312 112.271C92.1025 111.115 87.3699 110.353 82.7889 109.04C67.2983 104.612 53.6 97.0387 43.386 83.7869C29.8965 66.2813 28.8403 44.2359 40.4244 25.3188C40.5124 25.1828 40.6103 25.0466 40.6781 24.9006C41.3857 23.4189 43.6303 21.7259 41.2388 20.3464C39.0895 19.1079 38.3591 21.7184 37.4809 23.1614C23.6467 46.0389 26.6395 72.4323 45.2817 91.3553C57.2594 103.512 71.9522 110.055 88.2516 113.082C91.5116 113.692 94.8076 114.042 98.0855 114.517L98.0858 114.538Z"
              fill="white"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_102_336"
              x="0.866943"
              y="0.0223999"
              width="130.945"
              height="163.392"
              filterUnits="userSpaceOnUse"
              // color-interpolation-filters="sRGB"
            >
              {/* <feFlood flood-opacity="0" result="BackgroundImageFix" /> */}
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="8" />
              <feGaussianBlur stdDeviation="14" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.145833 0 0 0 0 0.145833 0 0 0 0 0.145833 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_102_336"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_102_336"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="flex items-center flex-col gap-7 ">
          <p className="mt-10 text-xl">تابع للأسفل</p>
          <a href="#الأسعار" aria-label="Read more about mouse down">
            <div className=" cursor-pointer mouse bg-white h-11 flex justify-center items-start  w-7 rounded-full ">
              <span className="text-black h-3 w-1 mt-2 rounded-md bg-black"></span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Slide;
