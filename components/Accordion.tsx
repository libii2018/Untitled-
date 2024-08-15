import Image from "next/image";
import React, { useState } from "react";

export default function Accordion({
  title,
  content = "",
}: {
  title: string;
  content: string;
}) {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className="bg-transparent mb-8">
      <div className="py-2">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex items-center justify-between w-full"
        >
          <span className="text-left font-semibold text-lg leading-7 text-[#101828]">
            {title}
          </span>
          {!accordionOpen ? (
            <Image
              src="/img/iconMoin.svg"
              width={24}
              height={24}
              alt="Picture of the mail"
            />
          ) : (
            <Image
              src="/img/iconplus.svg"
              width={24}
              height={24}
              alt="Picture of the mail"
            />
          )}
        </button>
      </div>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="font-normal text-base leading-6 text-[#475467] overflow-hidden pr-8">
          {content}
        </div>
      </div>
    </div>
  );
}
