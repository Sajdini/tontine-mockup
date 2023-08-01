export type CtaSection = {
  _type: "section-cta";
  descriptions: string[];
  ctaText: string;
  ctaLink: string;
  title: string;
  _createdAt: Date;
  _updatedAt: Date;
  _id: string;
  _rev: string;
  image?: string;
};

export type InfoSection = {
  _type: "section-info";
  _updatedAt: string;
  _createdAt: Date;
  title: string;
  descriptions: string[];
  image: string;
  ctaText?: string;
  ctaLink?: string;
  _id: string;
  _rev: string;
};

type LandingPage = {
  _type: "landing-page";
  title: string;
  sections: Array<CtaSection | InfoSection>;
};

export default LandingPage;
