import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl mx-auto h-[20rem] flex items-center justify-between px-16"
      >
        <h1 className="text-4xl font-regular">{val.title}</h1>
        <div className="w-1/4 flex flex-col gap-4 text-md">
          <p>{val.description}</p>
          <div className="flex items-center gap-4">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
