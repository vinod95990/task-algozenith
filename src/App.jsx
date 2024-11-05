import "./App.css";
import SidebarNav from "./component/SidebarNav.jsx";
import ChapterList from "./component/ChaptersList.jsx";
import CourseModule from "./component/CourseModule.jsx";

const chaptersData = [
  { id: 1, title: "Chapter 1", duration: "05:00:00", active: true },
  { id: 2, title: "Chapter 2", duration: "05:00:00" },
  { id: 3, title: "Chapter 3", duration: "05:00:00" },
  { id: 4, title: "Chapter 4", duration: "05:00:00" },
  { id: 5, title: "Chapter 5", duration: "05:00:00" },
];

function App() {
  return (
    <div className="bg-[#fefeff] p-12 pb-0  dm-sans-font">
      {/* ----Header---- */}
      <div className="flex justify-between items-center pb-8">
        <div className=" flex items-center gap-4 lg:gap-6 pl-3">
          <img
            src="/icons/menu.svg"
            width={20}
            height={20}
            className="w-3 h-3 lg:w-5 lg:h-5 "
          ></img>
          <p className="text-secondary text-2xl font-extrabold">AlgoZenith</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div className=" flex items-center justify-center gap-2 w-9 h-9 sm:w-11 sm:h-11 bg-[#e7f8ff]  rounded-lg ">
            <img
              src="/icons/bell.svg"
              width={24}
              height={24}
              className="w-4 h-4 sm:h-5 sm:w-5  "
            ></img>
          </div>

          <div className="w-11 h-11 sm:w-14 sm:h-14 bg-[#D9D9D9]  rounded-full "></div>
        </div>
      </div>

      <div className=" flex  gap-4 ">
        {/* Left Section: Sidebar Navigation */}
        <SidebarNav />

        {/* Right Section: Chapters */}
        <div className="w-full p-8 pb-24 border-b-0 flex gap-8 flex-col border bg-white border-[#A4E6FF]  rounded-t-lg">
          {/* Section: Guide */}
          <div className="flex lg:items-center justify-between flex-col gap-2 lg:flex-row items-center ">
            <div
              className="flex items-center  p-4 rounded-lg gap-5 flex-col sm:flex-row justify-between"
              style={{
                background:
                  "linear-gradient(180deg, #EFF5FF 0%, rgba(239, 245, 255, 0) 100%)",
              }}
            >
              <div className=" flex items-center gap-2 lg:gap-3 p-2  sm:pl-7 rounded-lg  ">
                <img
                  src="/icons/calender.svg"
                  width={24}
                  height={24}
                  className="h-4 w-4 lg:h-6 lg:w-6 "
                ></img>
                <p className="text-black text-sm  lg:text-lg">
                  Mentor Sessions
                </p>
              </div>
              <div className="border border-[#a4e6ff] flex items-center gap-2 lg:gap-3 bg-white p-2 rounded-lg shadow-[0px_3.67px_3.67px_0px_rgba(41,83,155,0.3)]">
                <img
                  src="/icons/briefcase.svg"
                  width={24}
                  height={24}
                  className="h-4 w-4 lg:h-6 lg:w-6 "
                ></img>
                <p className="text-black font-bold text-sm   lg:text-lg">
                  Learning Material
                </p>
              </div>
            </div>
            <div className="border border-[#a4e6ff] flex items-center gap-2 lg:gap-3 bg-white p-2 rounded-lg  ">
              <img
                src="/icons/info.svg"
                width={24}
                height={24}
                className="h-4 w-4 lg:h-6 lg:w-6 "
              ></img>
              <p className="text-secondary font-bold text-sm lg:text-lg">
                How it works
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border border-[#a4e6ff] opacity-30"></div>

          {/* Section: Content */}
          <div className="grid grid-cols-1 xl:grid-cols-[320px_auto] w-full ">
            <ChapterList chaptersData={chaptersData} />
            <CourseModule />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
