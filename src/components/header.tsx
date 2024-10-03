import { Logo } from "./common/logo";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export const Header = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand className="cursor-pointer">
        <Logo />
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
