import React from "react";
import LineCart from "../../charts/LineChart";

function DashboardCard04() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700">
      <header className="p-6 pb-0 dark:border-slate-700 ">
        <div className="flex items-center">
          <h2 className="font-semibold text-slate-800 dark:text-slate-100">
            Line Chart: Destination Port over Time
          </h2>
        </div>
      </header>

      <LineCart />

      <hr />

      <div className="p-6 flex items-center">
        <svg
          className="w-4 h-4 text-slate-400"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M10,0 C15.5228475,0 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 0,15.5228475 0,10 C0,4.4771525 4.4771525,0 10,0 Z M9.06976744,5.58139535 C8.6844525,5.58139535 8.37209302,5.89375483 8.37209302,6.27906977 L8.37209302,6.27906977 L8.37209302,11.8604651 C8.37209302,12.2457801 8.6844525,12.5581395 9.06976744,12.5581395 L9.06976744,12.5581395 L14.6511628,12.5581395 C15.0364777,12.5581395 15.3488372,12.2457801 15.3488372,11.8604651 C15.3488372,11.4751502 15.0364777,11.1627907 14.6511628,11.1627907 L14.6511628,11.1627907 L9.76744186,11.1627907 L9.76744186,6.27906977 C9.76744186,5.89375483 9.45508238,5.58139535 9.06976744,5.58139535 Z"
          />
        </svg>
        &nbsp;
        <p className="text-slate-600 dark:text-slate-100">
          updated 17 min ago
        </p>
      </div>
    </div>
  );
}

export default DashboardCard04;
