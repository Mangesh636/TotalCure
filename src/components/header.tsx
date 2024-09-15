import { cn } from "@/utils/cn";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Ubuntu } from "next/font/google";
import { LuHeartHandshake } from "react-icons/lu";

const ubuntu = Ubuntu({
  subsets: ["latin", "cyrillic-ext"],
  weight: ["500"],
});

export const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand className="cursor-pointer">
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
      </NavbarBrand>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button variant="ghost" color="success">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button variant="solid" color="success" radius="lg">
            Start for Free
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
