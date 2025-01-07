import * as React from "react";
import Image from "next/image";
export default function Card() {
  return (
    <div className="flex justify-around">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image
            src="https://i.pinimg.com/736x/b8/24/bc/b824bcb9eab02421a6e9abba8acdd811.jpg"
            alt="garden"
            width={300}
            height={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">garden</h2>
          <p>beautiful garden</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      {/*  */}
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image
            src="https://i.pinimg.com/736x/b2/33/e6/b233e6918e3e988d94ec457b9bf360b7.jpg"
            alt="garden"
            width={300}
            height={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">garden</h2>
          <p>sunlight kisses the flowers</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      {/*  */}
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <Image
            src="https://i.pinimg.com/736x/99/c8/a3/99c8a3dbd12123625a6e0389c4775a64.jpg"
            alt="garden"
            width={300}
            height={300}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">garden</h2>
          <p>flowers and sunlight</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </div>
  );
}
