import React from "react";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 shadow-lg">
      <div className="p-4 border-b border-dashed">
        <img src="/pet360.png" alt="" />
      </div>
      <ul className="mt-4">
        {/* Consultations */}
        <li className="px-2 py-2 cursor-pointer">
          <div className="flex space-x-2 hover:bg-[#F6F6F6] p-2 hover:rounded-lg">
            <img src="/Calendar.svg" alt="Consultations" />
            <span>Consultations</span>
          </div>
        </li>
        {/* About */}
        <li className="px-2 py-2 cursor-pointer">
          <div className="flex space-x-2 hover:bg-[#F6F6F6] p-2 hover:rounded-lg">
            <img src="/admissions.svg" alt="About" />
            <span>Admissions</span>
          </div>
        </li>
        {/* Services */}
        <li className="px-2 py-2 cursor-pointer">
          <div className="flex space-x-2 hover:bg-[#F6F6F6] p-2 hover:rounded-lg">
            <img src="/grooming.svg" alt="Services" />
            <span>Groomings</span>
          </div>
        </li>
        {/* Contact */}
        <li className="px-2 py-2 cursor-pointer">
          <div className="flex space-x-2 hover:bg-[#F6F6F6] p-2 hover:rounded-lg">
            <img src="/Registration.svg" alt="Contact" />
            <span>Registrations</span>
          </div>
        </li>
        <li className="px-2 py-2 cursor-pointer">
          <div className="flex space-x-2 hover:bg-[#F6F6F6] p-2 hover:rounded-lg">
            <img src="/inventory.svg" alt="Contact" />
            <span>Inventory</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
