import React from "react";
import Link from "next/link";
import styles from "@/styles/index.module.css";

function App() {
  return (
    <div className="to-do min-h-screen font-Poppins bg-gray-50">
      <div className="flex items-center justify-center h-16 bg-indigo-600">
        <div className="p-6 rounded-b-lg">
          <h1 className="text-5xl font-bold text-white">To-Do App</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full h-60 p-10 text-center">
          <h1 className="text-8xl font-bold p-5 bg-indigo-500 shadow-2xl rounded-3xl text-white">
            Explore your potential.
          </h1>
        </div>
        <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-12 p-4">
          <div className="flex justify-start items-end h-96 bg-indigo-300 shadow-2xl rounded-xl p-4 bg-achieve bg-cover">
            <div className="text-white bg-vision rounded">
              <h1 className="text-xl font-bold">Achieve More Every Day</h1>
              <p className="">
                Start each day with a clear plan and end it with accomplishment.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-end h-96 bg-indigo-300 shadow-2xl rounded-xl p-4 bg-success bg-cover">
            <div className="text-white bg-vision rounded">
              <h1 className="text-xl font-bold">Your Path to Success</h1>
              <p className="">
                Stay organized and motivated as you progress towards success.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-end h-96 bg-indigo-300 shadow-2xl rounded-xl p-4 bg-organize bg-cover">
            <div className="text-white bg-vision rounded">
              <h1 className="text-xl font-bold ">
                Organize Your Life with Ease
              </h1>
              <p className="">
                Manage tasks, set reminders, and enjoy stress-free organization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center p-10 space-y-4">
        <div className="flex flex-col items-center p-10 space-y-4">
          <button className="w-96 h-20 bg-indigo-600 rounded-lg text-white text-3xl font-bold hover:bg-indigo-700 transition duration-300">
            <Link href="/main">Start to Achieve More</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
