"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

const Gallery = ({ images }: { images: GalleryImage[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-96 bg-gray-100 rounded-lg">
        <p className="text-gray-600 text-lg">No images available yet</p>
      </div>
    );
  }

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
              <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                Click to view
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full h-auto">
            <Image
              src={selectedImage}
              alt="Gallery image"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} className="text-black" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
