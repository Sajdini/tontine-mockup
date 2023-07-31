const landingPage = {
    name: 'landing-page',
    title: 'Landing Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'order',
        title: 'Section Order',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              { type: 'section-cta' },
              { type: 'section-info' },
            ],
          },
        ],
      },
    ],
  };

  export default landingPage;