import React from 'react';
import data from "../../db/data";

function DashboardCard2() {

  const tcpEvents = data.filter(event => event.proto === "TCP");

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-md rounded-xl border border-gray-200 dark:border-slate-700">
      <div className="">
        <header className="flex justify-between items-start mb-2 px-6 py-4">
          <div className="bg-gray-200 p-2 m-1 rounded-xl cursor-pointer">
            <svg
              className="w-10 h-10"
              viewBox="0 0 28 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <title>Total TCP Connections</title>
              <g
                id="🔍-Product-Icons"
                stroke="none"
                stroke-width="1"
                fill="#505050"
                fill-rule="evenodd"
              >
                <g
                  id="ic_fluent_people_community_28_filled"
                  fill="#505050"
                  fill-rule="nonzero"
                >
                  <path
                    d="M17.75,18 C18.7164983,18 19.5,18.7835017 19.5,19.75 L19.5,21.7519766 L19.4921156,21.8604403 C19.1813607,23.9866441 17.2715225,25.0090369 14.0667905,25.0090369 C10.8736123,25.0090369 8.93330141,23.9983408 8.51446278,21.8965776 L8.5,21.75 L8.5,19.75 C8.5,18.7835017 9.28350169,18 10.25,18 L17.75,18 Z M18.2439108,11.9999135 L24.25,12 C25.2164983,12 26,12.7835017 26,13.75 L26,15.7519766 L25.9921156,15.8604403 C25.6813607,17.9866441 23.7715225,19.0090369 20.5667905,19.0090369 L20.3985759,19.007437 C20.0900029,17.9045277 19.1110503,17.0815935 17.9288034,17.0057197 L17.75,17 L16.8277704,17.0007255 C17.8477843,16.1757619 18.5,14.9140475 18.5,13.5 C18.5,12.9740145 18.4097576,12.4691063 18.2439108,11.9999135 Z M3.75,12 L9.75608915,11.9999135 C9.59024243,12.4691063 9.5,12.9740145 9.5,13.5 C9.5,14.8308682 10.0777413,16.0267978 10.996103,16.8506678 L11.1722296,17.0007255 L10.25,17 C8.9877951,17 7.92420242,17.85036 7.60086562,19.0094363 L7.5667905,19.0090369 C4.37361228,19.0090369 2.43330141,17.9983408 2.01446278,15.8965776 L2,15.75 L2,13.75 C2,12.7835017 2.78350169,12 3.75,12 Z M14,10 C15.9329966,10 17.5,11.5670034 17.5,13.5 C17.5,15.4329966 15.9329966,17 14,17 C12.0670034,17 10.5,15.4329966 10.5,13.5 C10.5,11.5670034 12.0670034,10 14,10 Z M20.5,4 C22.4329966,4 24,5.56700338 24,7.5 C24,9.43299662 22.4329966,11 20.5,11 C18.5670034,11 17,9.43299662 17,7.5 C17,5.56700338 18.5670034,4 20.5,4 Z M7.5,4 C9.43299662,4 11,5.56700338 11,7.5 C11,9.43299662 9.43299662,11 7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 Z"
                    id="🎨-Color"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div>
            <div className="text-md text-slate-600 dark:text-slate-500 mb-1">
              Total TCP 
            </div>
            <h2 className="text-xl font-bold text-slate-700 dark:text-slate-100 mb-2 flex items-center">
              {tcpEvents?.length}
            </h2>
          </div>
        </header>

        <hr />

        <div className="flex items-start px-6 py-4">
          <div className="text-sm font-semibold text-white px-1.5 bg-red-500 rounded-full">
            -14%
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

export default DashboardCard2;
