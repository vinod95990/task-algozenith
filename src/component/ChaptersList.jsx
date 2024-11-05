import React from "react";

const ChapterList = (props) => {
  const { chaptersData } = props;

  return (
    <div className=" ">
      {chaptersData.map((chapter) => (
        <div
          key={chapter.id}
          className={`${chapter.active ? "" : "border-b border-transparent"}`}
          style={{
            borderImageSource: chapter.active
              ? "none"
              : "linear-gradient(90deg, rgba(23, 43, 77, 0) 5%, #cbcfd7 49.54%, rgba(5, 68, 94, 0) 150%)",
            borderImageSlice: 1,
          }}
        >
          <div
            className={`flex items-center justify-between gap-1 flex-col sm:flex-row  mr-6   p-2 lg:p-4 ${
              chapter.active ? "bg-[#eff5ff]" : "hover:bg-[#eff5ff]"
            } transition-colors duration-150 ease-in-out rounded-lg`}
          >
            <h2
              className={`${
                chapter.active ? "font-bold" : "font-normal"
              } text-sm lg:text-lg  text-black`}
            >
              {chapter.title}
            </h2>
            {chapter.active && (
              <div className="flex items-center gap-1 lg:gap-2 ">
                <img
                  src="/icons/clock-active.svg"
                  width={20}
                  height={20}
                  className="w-3 h-3 lg:w-5 lg:h-5 "
                ></img>
                <p className=" text-sm lg:text-lg  text-[#608AD2]">
                  {chapter.duration}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChapterList;
