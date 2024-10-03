import { cn } from "@/utils/cn";

import { Ubuntu } from "next/font/google";
import { LuHeartHandshake } from "react-icons/lu";

const ubuntu = Ubuntu({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["500"],
});

export const Logo = () => {
  return (
    <>
      <LuHeartHandshake
        className="bg-malachite-400 text-white p-2 rounded-full"
        size={45}
      />
      <p
        className={cn(
          "text-2xl text-black font-semibold ml-3 hidden md:block",
          ubuntu.className
        )}
      >
        TotalCure
      </p>
    </>
  );
};
