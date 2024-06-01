import React, { useEffect, useState } from "react";

import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import DashboardCard1 from "../components/dashboard/DashboardCard1";
import DashboardCard2 from "../components/dashboard/DashboardCard2";
import DashboardCard3 from "../components/dashboard/DashboardCard3";
import DashboardCard4 from "../components/dashboard/DashboardCard4";
import DashboardCard04 from "../components/dashboard/DashboardCard04";
import DashboardCard05 from "../components/dashboard/DashboardCard05";
import DashboardCard06 from "../components/dashboard/DashboardCard06";
import DashboardCard07 from "../components/dashboard/DashboardCard07";
import Footer from "../partials/Footer";

function Dashboard() {
  const [loder, setLoder] = useState(true);

  useEffect(() => {
    setLoder(false);
  }, []);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {loder ? (
        <div className="flex justify-center items-center w-screen h-screen overflow-hidden">
          <p>loading...</p>
        </div>
      ) : (
        <div className="flex h-screen overflow-hidden">
          {/* Sidebar */}
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Content area */}
          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {/*  Site header */}
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
              <div className="grid grid-cols-12 gap-6">
                <DashboardCard1 />
                <DashboardCard2 />
                <DashboardCard3 />
                <DashboardCard4 />

                <DashboardCard04 />
                <DashboardCard07 />
                <DashboardCard05 />
                <DashboardCard06 />
              </div>
            </div>

            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default Dashboard;
