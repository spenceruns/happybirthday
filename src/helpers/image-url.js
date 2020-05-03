import imageUrlBuilder from '@sanity/image-url';
import client from './sanity';

const builder = imageUrlBuilder(client);

const imageUrlFor = source => builder.image(source);
export default imageUrlFor;
