import { Ubuntu } from "next/font/google";

import { Button } from "@nextui-org/react";
import { DotBackground } from "./dot-background";
import { cn } from "@/utils/cn";

const ubuntu = Ubuntu({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["700"],
});

export const LandingInfo = () => {
  return (
    <DotBackground>
      <h1 className={cn("text-4xl md:text-6xl lg:text-8xl", ubuntu.className)}>
        Your Personal <span className="text-malachite-400">Health</span>{" "}
        Assistance.
      </h1>
      <p className="text-base lg:text-lg">
        Instantly get summary of your medical reports, medicin with your
        personaled AI assistance.
      </p>
      <Button variant="shadow" color="success" radius="full" size="lg">
        Start Now
      </Button>
    </DotBackground>
  );
};
