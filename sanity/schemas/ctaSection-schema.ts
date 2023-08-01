const ctaSection = {
  name: "section-cta",
  title: "CTA Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "text",
    },
    {
      name: "descriptions",
      title: "Descriptions",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "ctaText",
      title: "CTA Text",
      type: "string",
    },
    {
      name: "ctaLink",
      title: "CTA Link",
      type: "string",
    },
  ],
};

export default ctaSection;
