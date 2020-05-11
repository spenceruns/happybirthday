import sanityClient from '@sanity/client';
const client = sanityClient({
  projectId: '4jyv9mbc',
  dataset: 'production',
  useCdn: true
});

export default client;
