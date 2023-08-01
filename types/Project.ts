type Project = {
    _id: string;
    _type: 'project';
    title: string;
    stack: string[];
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
    };
    link: string;
  }

  export default Project