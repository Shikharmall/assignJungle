import React, { useEffect, useState } from "react";
import data from "../../db/data";

function DashboardCard4() {
  function countUniqueSourceIPs(data) {
    const uniqueIPs = {};

    data.forEach((entry) => {
      const srcIP = entry.src_ip;
      if (!uniqueIPs[srcIP]) {
        uniqueIPs[srcIP] = true;
      }
    });

    return Object.keys(uniqueIPs).length;
  }
  const totalUniqueIPs = countUniqueSourceIPs(data);

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-md rounded-xl border border-gray-200 dark:border-slate-700">
      <div className="">
        <header className="flex justify-between items-start mb-2 px-6 py-4">
          <div className="bg-gray-200 p-2 m-1 rounded-xl cursor-pointer">
            <svg
              className="w-10 h-10"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs></defs>

              <title>Icon_24px_ExternalIPAddressesColor</title>

              <g data-name="Product Icons">
                <g>
                  <path
                    class="cls-1"
                    d="M17.49,12.4v6.7a.4.4,0,0,1-.4.4H4.9a.4.4,0,0,1-.4-.4V6.9a.4.4,0,0,1,.4-.4h6.7a.4.4,0,0,0,.4-.4V4.4a.4.4,0,0,0-.4-.4H2.4a.4.4,0,0,0-.4.4V21.6a.4.4,0,0,0,.4.4H19.6a.4.4,0,0,0,.4-.4V12.4a.4.4,0,0,0-.4-.4H17.89A.4.4,0,0,0,17.49,12.4Z"
                  />

                  <path
                    class="cls-2"
                    d="M14,2.4V9.6a.4.4,0,0,0,.4.4h7.2a.4.4,0,0,0,.4-.4V2.4a.4.4,0,0,0-.4-.4H14.4A.4.4,0,0,0,14,2.4Zm5.6,4.1H17.89a.4.4,0,0,1-.4-.4V4.4a.4.4,0,0,1,.4-.4H19.6a.4.4,0,0,1,.4.4V6.1A.4.4,0,0,1,19.6,6.5Z"
                    fill="blue"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div>
            <div className="text-md text-slate-600 dark:text-slate-500 mb-1">
              Total IP addresses
            </div>
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-100 mb-2">
              {totalUniqueIPs}
            </h2>
          </div>
        </header>

        <hr />

        <div className="flex items-start px-6 py-4">
          <div className="text-sm font-semibold text-white px-1.5 bg-emerald-500 rounded-full">
            +19%
          </div>
          &nbsp;
          <div className="text-md text-slate-500 dark:text-slate-100 mr-2">
            than last week
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard4;
