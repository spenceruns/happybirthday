export default {
  name: 'notes',
  title: 'Notes',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Abstract',
      name: 'abstract',
      type: 'text',
      validation: Rule => Rule.required()
    }
  ]
};
