 type CtaSection={
    _type: 'section-cta';
    description: string;
    ctaText: string;
    ctaLink: string;
 }

 type InfoSection= {
    _type: 'section-info';
    title: string;
    description: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  }
  
  
   type LandingPage= {
    _type: 'landing-page';
    title: string;
    order: Array<CtaSection | InfoSection>;
  }

  export default LandingPage