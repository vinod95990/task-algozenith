import React from "react";

const CourseModule = () => {
  const modules = [
    {
      part: 1,
      title: "Lorem Ipsum Dolor Sit Amet",
      duration: "02:00:00",
      difficulty: "Medium",
      resources: 5,
      progress: 45,
      isExpanded: true,
      content: [
        { type: "video", title: "Video 1", duration: "10:00" },
        { type: "article", title: "Article 1", duration: "10:00" },
        { type: "quiz", title: "Quiz 1", duration: "10:00" },
        { type: "code", title: "Coding Exercise 1", duration: "10:00" },
        { type: "resource", title: "Combined Resource 1", duration: "10:00" },
      ],
    },
    {
      part: 2,
      title: "Lorem Ipsum Dolor Sit Amet",
      duration: "02:00:00",
      difficulty: "Medium",
      resources: 12,
      progress: 20,
      isExpanded: false,
      content: [],
    },
    {
      part: 3,
      title: "Lorem Ipsum Dolor Sit Amet",
      duration: "02:00:00",
      difficulty: "Medium",
      resources: 12,
      progress: 0,
      isExpanded: false,
      content: [],
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "video":
        return "/icons/play.svg";
      case "article":
        return "/icons/question-mark.svg";
      case "quiz":
        return "/icons/question-mark.svg";
      case "code":
        return "/icons/code.svg";
      case "resource":
        return "/icons/document-duplicate.svg";
      default:
        return "/icons/clock.svg";
    }
  };

  return (
    <div className="w-full  flex gap-4 flex-col">
      {modules.map((module) => (
        <div
          key={module.part}
          className="  rounded-lg shadow-sm border border-gray-100"
          style={{ boxShadow: "0px 4px 20px 0px rgba(23, 43, 77, 0.1)" }}
        >
          <div>
            {/* Part header */}
            <div className="flex items-center lg:items-center flex-col gap-4 lg:flex-row justify-between p-7 pb-3">
              <div className="">
                <p className="text-sm lg:text-lg  font-medium text-secondary">
                  PART {module.part}
                </p>
                <h3 className="text-base lg:text-xl  font-bold text-black">
                  {module.title}
                </h3>
              </div>
              <div className="flex flex-wrap   sm:flex-row  items-start sm:items-center gap-3">
                <div className="flex items-center gap-1   ">
                  <img
                    src="/icons/clock.svg"
                    width={20}
                    height={20}
                    className="w-3 h-3 lg:w-5 lg:h-5  "
                  ></img>
                  <p className="text-xs lg:text-base   text-secondary">
                    {module.duration}
                  </p>
                </div>
                <div className="flex items-center gap-1  ">
                  <img
                    src="/icons/chart-bar.svg"
                    width={20}
                    height={20}
                    className="w-3 h-3 lg:w-5 lg:h-5  "
                  ></img>
                  <p className="text-xs lg:text-base  text-secondary">
                    {module.difficulty}
                  </p>
                </div>
                <div className="flex items-center  gap-1">
                  <img
                    src="/icons/document-duplicate.svg"
                    width={20}
                    height={20}
                    className="w-3 h-3 lg:w-5 lg:h-5  "
                  ></img>
                  <p className="text-xs lg:text-base  text-secondary">
                    {module.resources}
                  </p>
                </div>
                {module.isExpanded ? (
                  <img src="/icons/chevron-up.svg" width={16} height={29}></img>
                ) : (
                  <img
                    src="/icons/chevron-down.svg"
                    width={16}
                    height={29}
                  ></img>
                )}
              </div>
            </div>

            {/* Completion percentage */}
            <div className="pr-7 flex justify-end">
              <span className="text-xs lg:text-base p-1 bg-[#EFF5FF] border border-[#99E4FF] rounded-lg text-black">
                {module.progress}% Completed
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full rounded-br-full rounded-bl-full bg-[#EFF5FF] h-1  sm:h-2 mt-4">
              <div
                className="bg-[#172B4DD9] h-1 sm:h-2 rounded-bl-full"
                style={{ width: `${module.progress}%` }}
              />
            </div>
          </div>

          {/* Module content */}
          {module.isExpanded && (
            <div className=" pt-1  ">
              {module.content.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    index == 0 ? "border-none" : "border border-transparent"
                  } flex p-6 items-start sm:items-center justify-between gap-2  flex-row   hover:bg-gray-50`}
                  style={{
                    borderImageSource:
                      "linear-gradient(90deg, rgba(23, 43, 77, 0) 0%, #cbcfd7 49.54%, rgba(5, 68, 94, 0) 100%)",
                    borderImageSlice: 1,
                  }}
                >
                  <div className="flex  items-center gap-1 lg:gap-2">
                    <img
                      src={getIcon(item.type)}
                      width={16}
                      height={16}
                      className=" w-5  h-5 "
                    ></img>

                    <span className="text-black font-bold text-sm lg:text-lg ">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 lg:gap-2">
                    <img
                      src="/icons/clock.svg"
                      width={20}
                      height={20}
                      className=" w-5 h-5 "
                    ></img>
                    <p className="text-secondary text-sm lg:text-lg ">
                      {item.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseModule;
