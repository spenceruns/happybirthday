export default {
  name: 'images',
  title: 'Images',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'image',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      title: 'Person',
      name: 'person',
      type: 'string',
      validation: Rule => Rule.required()
    }
  ]
};
