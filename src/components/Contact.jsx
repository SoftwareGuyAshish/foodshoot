"use client";
import { Button, Card, Spacer } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="p-1 md:p-4 mx-2">
      <Spacer y={2} />
      <Card className="p-4 ">
        <h2 className="text-primary font-semibold text-3xl underline my-2 text-center">
          Contact Developer
        </h2>

        <div className="flex flex-col md:flex-row gap-6 px-1 md:px-4 md:mx-3 my-4 justify-around items-center">
          <Button
            className="bg-[#b50000] shadow-[#b500003b] w-full"
            variant="shadow"
            size="lg"
            endContent={<SiGmail />}
            onClick={() =>
              openLink(
                "mailto:asoftwareguy11@gmail.com?subject=From FoodShoot&body=Message"
              )
            }
          >
            Email
          </Button>
          <Button
            className="bg-[#0058b5] shadow-[#0076b52b] w-full"
            variant="shadow"
            size="lg"
            onClick={() =>
              openLink("https://www.linkedin.com/in/softwareguyashish")
            }
            endContent={<BsLinkedin />}
          >
            LinkedIn
          </Button>
          <Button
            className="bg-[#8b43fe] shadow-[#8b43fe27] w-full"
            variant="shadow"
            size="lg"
            onClick={() => openLink("https://github.com/softwareguyashish")}
            endContent={<BsGithub />}
          >
            GitHub
          </Button>
          <Button
            className="bg-[#000000] shadow-[#0000007f] w-full"
            variant="shadow"
            size="lg"
            onClick={() => openLink("https://twitter.com/officialAshishP")}
            endContent={<BsTwitterX />}
          >
            Twitter
          </Button>
        </div>
      </Card>
      <Spacer y={2} />
    </div>
  );
};

export default Contact;
