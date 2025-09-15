"use client";

import FloatingButton from "./components/floatingButton";
import { Navigation } from "./components/nav";

function SubLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full min-h-screen bg-[rgb(0, 0, 0)] overflow-x-hidden">
      <div className={`relative z-30 transition-all duration-700 ease-in-out`}>
        <Navigation />
        <div>{children}</div>
        <FloatingButton />
      </div>
    </div>
  );
}

export default SubLayout;
