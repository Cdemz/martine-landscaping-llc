import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdLocationPin } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { HiMailOpen } from "react-icons/hi";
import { AiFillInstagram } from "react-icons/ai";

const Footer: FC = () => {
  return (
    <div className="bg-[var(--color-secondary)] p-6 md:px-[10rem] text-[var(--color-text)]">
      {/* first big div  */}
      <div className="flex gap-4 md:flex-row flex-col justify-between md:items-center mb-6  ">
        {/* image  */}
        <div className="">
          <Image src="/logo.png" width={300} height={300} alt="logo" />
        </div>
        {/* menu  */}
        <div className="">
          <ul className=" gap-4 cursor-pointer">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a
                href="https://instagram.com/martinez_landscapingllc?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/martinez_landscapingllc?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                Blog
              </a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <a href="">About US</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 mt-5 ">
          <p className="flex items-center gap-2">
            <MdLocationPin className="text-[var(--color-primary)]" size={26} />{" "}
            Maryland
          </p>
          <p className="flex items-center gap-2">
            <IoIosCall className="text-[var(--color-primary)]" size={26} />{" "}
            +1-(240)-367-0653
          </p>
          <p className="flex items-center gap-2">
            <HiMailOpen className="text-[var(--color-primary)]" size={26} />{" "}
            martinez Landscaping LLC.com
          </p>
          <p className="flex items-center gap-2">
            <AiFillInstagram
              className="text-[var(--color-primary)]"
              size={26}
            />
            martinez Landscaping LLC
          </p>
        </div>
      </div>
      {/* second big div  */}
      <div className="text-[var(--color-text)] justify-start  ">
        <hr className="my-2" />
        <p>© 2023 MARTINEZ LANDING LLC, All Rights Reserved.</p>
        <p className="text-gray-300">
          Disclaimer: Martinez Landing LLC is a construction service provider.
          We connect you with professional construction contractors in your
          area. Please note that Martinez Landing LLC does not directly own or
          operate any construction services. It is the responsibility of each
          customer to verify that the service provider they are connected with
          meets all necessary licensing and insurance requirements as per their
          state regulations. The images shown are for illustrative purposes only
          and may not represent the construction services available in your
          specific region.
        </p>
      </div>
    </div>
  );
};

export default Footer;
