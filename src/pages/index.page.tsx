import { useState } from "react";
import Image from "next/image";
import { useInterval } from "usehooks-ts";

import avatar from "../ui/images/avatar.png";

function rand(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const clipOptions = [
  "clip-rhombus",
  "clip-pentagon",
  "clip-hexagon",
  "clip-heptagon",
  "clip-octagon",
  "clip-nonagon",
  "clip-decagon",
];

export default function Home() {
  const [currentClip, setCurrentClip] = useState<string>("clip-round");

  useInterval(() => {
    const clip = clipOptions[rand(0, clipOptions.length - 1)];

    setCurrentClip(clip);
  }, 500);

  return (
    <main className="container mx-auto p-4 2xl:p-32">
      <article className=" font-medium px-4 pt-24 md:pt-80 2xl:px-10">
        <Image src={avatar} className={currentClip} width="128px" height="128px" placeholder="blur" />
        <h1 className="font-heading text-slate-800 col-span-3 text-4xl my-8 md:text-6xl xl:w-[20ch]">
          Hello there, I&apos;m João Alberto, software developer helping to build a better web.
        </h1>
        <div className="md:w-[76ch]" />
      </article>
    </main>
  );
}
