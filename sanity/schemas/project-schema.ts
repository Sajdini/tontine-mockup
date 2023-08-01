const project={
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'stack',
        title: 'Stack',
        type: 'array',
        of: [{ type: 'string' }],
        options: {
          layout: 'tags', 
        },
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        
      },
      {
        name: 'link',
        title: 'Link',
        type: 'url',
      },
    ],
  };

  export default project