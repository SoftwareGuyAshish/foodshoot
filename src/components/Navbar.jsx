"use client";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Skeleton,
} from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import React, { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const session = useSession();
  const [isLoaded, setIsLoaded] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    session.status == "unauthenticated"
      ? { name: "Sign In", href: "/signin" }
      : { name: "Profile", href: "/profile" },
    { name: "Cart", href: "#" },
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden px-4" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <span className="text-primary font-semibold text-3xl">
            FoodShoot{" "}
          </span>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4 " justify="center">
        <NavbarBrand>
          <Link
            className="text-primary font-semibold text-3xl hover:scale-[1.02]"
            href="/"
          >
            FoodShoot{" "}
          </Link>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="/">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/menu" color="foreground">
            Menu
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/about" color="foreground">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/contact">
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      {session.status == "loading" && (
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex">
            <Skeleton className=" rounded-xl">
              <Link href="/profile">Sign In Here</Link>
            </Skeleton>
          </NavbarItem>
          <NavbarItem>
            <Skeleton className=" rounded-xl">
              <Button color="danger" variant="flat" onClick={() => signOut()}>
                Sign Out
              </Button>
            </Skeleton>
          </NavbarItem>
        </NavbarContent>
      )}
      {session.status == "authenticated" && (
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex">
            <Link href="/profile">Hi, {session.data.user?.email}</Link>
          </NavbarItem>
          <NavbarItem>
            <Button color="danger" variant="flat" onClick={() => signOut()}>
              Sign Out
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      {session.status == "unauthenticated" && (
        <NavbarContent justify="end">
          <NavbarItem className="hidden md:flex">
            <Link href="/signin">Sign In</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="warning" variant="flat" href="/signup">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu className="dark">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={"foreground"}
              href={item.href}
              size="lg"
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
