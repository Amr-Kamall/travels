import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "اتصل بنا", href: "#اتصل بنا", current: true },
  { name: "آراء العملاء", href: "#آراء العملاء", current: false },
  { name: "الأسعار", href: "#الأسعار", current: false },
  { name: "الخدمات", href: "#الخدمات", current: false },
  { name: "الرحلات", href: "#الرحلات", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ setIsOpenedMenu, isOpenedMenu }) {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <header
            className={`max-w-10xl px-2 tablet:px-4 lg:px-6  ${
              isOpenedMenu ? "bg-gray-900" : ""
            } `}
          >
            <div className="relative flex lg:px-8 px-2 h-16 items-center justify-between">
              <div className=" inset-y-0 left-0 flex items-center tablet:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button
                  onClick={() => setIsOpenedMenu((is) => !is)}
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-dark bg-white  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    // <span>aem</span>
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="tablet:flex flex-shrink-0 gap-2 items-center hidden">
                <div className="text-2xl mt-1  bg-red rounded-full h-5 w-8 bg-white  flex justify-center items-center ">
                  <span
                    className="w-2 bg-black h-2"
                    style={{
                      clipPath: "polygon(100% 50%, 0 0, 0 100%)",
                    }}
                  ></span>
                </div>
                <span className="text-white text-xl">يوتيوب</span>
              </div>
              <div className="hidden tablet:ml-6 tablet:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        "text-white",
                        "px-3 py-2 md:text-lg text-sm  font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-end gap-0.5  inset-y-0 right-0 pr-2 relative">
                <span className=" h-1 w-1 bg-[#FEC430] rounded-lg"></span>
                <span className="text-3xl relative rounded-full  text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  رحلاتي
                </span>
              </div>
            </div>
          </header>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-900">
              {navigation.map((item) => (
                <Disclosure.Button
                  onClick={() => setIsOpenedMenu(false)}
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300  hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
