import React from "react";
import "./Cta.css";
import Link from "next/link";
import { CtaSection } from "@/types/LandingPage";

interface Props {
  cta: CtaSection;
}

const Cta = ({ cta }: Props) => {
  return (
    <section className="cta-section ">
      <div className="cta-items__container">
        <h1 className="cta-title">{cta.title}</h1>
        <p className="cta-paragraph">{cta.descriptions[0]} </p>
        <Link href={cta.ctaLink} className="cta-link">
          {cta.ctaText}
        </Link>
      </div>
    </section>
  );
};

export default Cta;
