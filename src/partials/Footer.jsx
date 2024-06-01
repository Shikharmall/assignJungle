import React from "react";

function Footer() {
  return (
    <footer className="text-slate-500 bottom-0 w-full ">
      <div className="py-4 text-sm border-t border-slate-300 dark:border-['gray'] bg-slate-200 dark:bg-[#182235]">
        <div className="container">
          <div className="flex items-center justify-center">
            <a className="flex items-center col-span-1 gap-2 text-base font-medium leading-6 whitespace-nowrap focus:outline-none md:col-span-4 lg:col-span-6 text-gray-450">
              Network Traffic Analysis Dashboard © {new Date().getFullYear()}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
