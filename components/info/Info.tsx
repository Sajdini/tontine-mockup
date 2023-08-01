import React from "react";
import "./Info.css";
import Image from "next/image";
import { InfoSection } from "@/types/LandingPage";

interface Props {
  info: InfoSection;
}

const Info = ({ info }: Props) => {
  return (
    <section className="info-section ">
      <div className="info-items__container ">
        <h2 className="info-title">{info.title}</h2>
        <div className="flex-container">
          <div className="paragraph-container">
            {info.descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
          <Image
            width={300}
            height={300}
            src={info.image}
            alt="Authors image"
            className="info-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
