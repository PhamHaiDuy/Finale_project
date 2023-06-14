import React from "react";
import AccountSetting from "./account";
import Temp_Humi from "./temp_humi";
import Con_position from "./container_pos";
const Settings = () => {
  return (
    <div className="grid grid-cols-4 w-full h-screen pt-10 bg-cover bg-[url('https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500')]">
      <div className="flex flex-col items-center h-4/5 w-10/11 mt-2 ml-10 border-2 border-gray">
        <a className="flex gap-2 w-full items-center p-5 border-b-2 border-gray">
          <svg class="h-8 w-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Account
        </a>
        <a className="flex gap-2 w-full items-center p-5 border-b-2 border-gray">
          <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />  <line x1="10" y1="9" x2="14" y2="9" /></svg>
          Temperature and humidity
        </a>
        <a className="flex gap-2 w-full items-center p-5 border-b-2 border-gray">
          <svg class="h-8 w-8 text-black" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="2" />  <path d="M9 16v-8h4a2 2 0 0 1 0 4h-4" /></svg>
          Vacant position
        </a>
      </div>
      <div className="col-span-3 h-4/5 w-10/11 flex flex-col mt-2 mr-10 border-2 border-gray">
        {/* <AccountSetting /> */}
        {/* <Temp_Humi /> */}
        <Con_position />
      </div>
    </div>
  );
};

export default Settings;
