import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const placeholderImages: ImagePlaceholder[] = data.placeholderImages;

const imageMap = new Map(placeholderImages.map(img => [img.id, img]));

export function getPlaceholderImage(id: string): ImagePlaceholder | undefined {
    return imageMap.get(id);
}
