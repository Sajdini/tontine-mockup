const infoSection = {
  name: "section-info",
  title: "Information Section",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "descriptions",
      title: "Descriptions",
      type: "array",
      of: [{ type: "text" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default infoSection;
