"use client";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import React from "react";
import { FaPlus, FaRegEdit } from "react-icons/fa";
import { HiOutlineClipboardCheck, HiOutlineShoppingCart } from "react-icons/hi";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import UserCard from "../UserCard";

const Profile = () => {
  const user = {
    fullName: "Ashish Prakash",
    email: "ashish@test.com",
    avatar:
      "https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=600",
    addresses: [
      {
        key: "new",
        label: "New file",
      },
      {
        key: "copy",
        label: "Copy link",
      },
      {
        key: "edit",
        label: "Edit file",
      },
      {
        key: "add",
        label: "Add New",
      },
    ],
    orders: [
      {
        key: "new",
        label: "New file",
      },
      {
        key: "copy",
        label: "Copy link",
      },
      {
        key: "edit",
        label: "Edit file",
      },
      {
        key: "add",
        label: "Add New",
      },
    ],
    cart: [
      {
        key: "new",
        label: "New file",
      },
      {
        key: "copy",
        label: "Copy link",
      },
      {
        key: "edit",
        label: "Edit file",
      },
      {
        key: "add",
        label: "Add New",
      },
    ],
  };
  return (
    <div className="md:w-3/4 mx-auto p-4">
      <h1 className="text-primary text-3xl my-2 text-center font-semibold">
        Profile
      </h1>
      {/* User Card*/}
      <UserCard user={user} />
      {/* Orders, Addresses and More */}
      <Accordion variant="splitted" className="!px-0 ">
        <AccordionItem
          startContent={
            <MdOutlineAddLocationAlt className="text-primary text-2xl" />
          }
          key="1"
          aria-label="Addresses"
          title="Addresses"
        >
          <Listbox
            items={user.addresses}
            aria-label="Dynamic Actions"
            onAction={(key) => alert(key)}
          >
            {(item) => (
              <ListboxItem
                endContent={
                  item.key === "add" ? (
                    <FaPlus className="text-primary " />
                  ) : (
                    <FaRegEdit className="text-zinc-300" />
                  )
                }
                key={item.key}
                color={item.key === "add" ? "primary" : "default"}
              >
                {item.label}
              </ListboxItem>
            )}
          </Listbox>
        </AccordionItem>
        <AccordionItem
          startContent={
            <HiOutlineClipboardCheck className="text-primary text-2xl" />
          }
          key="2"
          aria-label="My Orders"
          title="Orders"
        >
          <Listbox
            items={user.addresses}
            aria-label="Dynamic Actions"
            onAction={(key) => alert(key)}
          >
            {(item) => (
              <ListboxItem
                endContent={
                  item.key === "add" ? (
                    <FaPlus className="text-primary " />
                  ) : (
                    <FaRegEdit className="text-zinc-300" />
                  )
                }
                key={item.key}
                color={item.key === "add" ? "primary" : "default"}
              >
                {item.label}
              </ListboxItem>
            )}
          </Listbox>
        </AccordionItem>
        <AccordionItem
          startContent={
            <HiOutlineShoppingCart className="text-primary text-2xl" />
          }
          key="3"
          aria-label="Cart"
          title="Cart"
        >
          <Listbox
            items={user.addresses}
            aria-label="Dynamic Actions"
            onAction={(key) => alert(key)}
          >
            {(item) => (
              <ListboxItem
                endContent={
                  item.key === "add" ? (
                    <FaPlus className="text-primary " />
                  ) : (
                    <FaRegEdit className="text-zinc-300" />
                  )
                }
                key={item.key}
                color={item.key === "add" ? "primary" : "default"}
              >
                {item.label}
              </ListboxItem>
            )}
          </Listbox>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Profile;
