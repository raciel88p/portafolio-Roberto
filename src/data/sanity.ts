import { createClient } from '@sanity/client';
import { createImageUrlBuilder } from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '2grwsc7l',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
});

// @ts-ignore
const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}
