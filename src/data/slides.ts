export type Slide =
  | {
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      type: "image-overlay";
      src: string;
      alt?: string;
      overlayTitle: string;
      overlayText?: string;
    }
  | {
      type: "side-by-side";
      src: string;
      alt?: string;
      title: string;
      text?: string;
    }
  | {
      type: "text-only";
      title: string;
      text: string;
    };

export const slides: Slide[] = [
  {
    type: "image",
    src: "/images/AMSA6.jpg",
    alt: "AMSA Africa event photo 6",
  },
  {
    type: "image",
    src: "/images/amsa2.jpg",
  },
  {
    type: "image",
    src: "/images/amsa3.jpg",
  },
  {
    type: "image",
    src: "/images/carousel-picture.jpeg",
  },
  {
    type: "image",
    src: "/images/amcoa-april-2025.jpg",
  },
  {
    type: "image",
    src: "/images/amsa4.jpg",
    alt: "AMSA Africa event photo 4",
  },
  {
    type: "image",
    src: "/images/amsa5.jpg",
    alt: "AMSA Africa event photo 5",
  },
  {
    type: "image",
    src: "/images/AMSA7.jpg",
    alt: "AMSA Africa event photo 7",
  },
];
