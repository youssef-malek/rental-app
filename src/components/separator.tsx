import React from "react";

function Separator() {
  return (
    <div className="h-auto flex flex-col justify-center items-center md:flex-row  mx-4 gap-x-4 rounded-xl bg-slate-400">
      <div className="flex bg-blue-200 w-full md:w-1/2 justify-center items-center text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl font-bold">
        Services
      </div>
      <div className="flex  bg-green-300 w-full md:w-1/2 justify-center items-center">
        <p className="p-4">
          {" "}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
          tempora dolore ratione hic cumque dicta tempore neque suscipit error
          harum, deleniti, accusamus est ipsa ullam maxime animi in, placeat
          illo.
        </p>
      </div>
    </div>
  );
}

export default Separator;
