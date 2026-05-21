import Gallery from "@/components/Gallery";
import fs from "fs";
import path from "path";

const GalleryPage = () => {
  // Get gallery images from public/images/gallery folder
  const galleryDir = path.join(process.cwd(), "public/images/gallery");
  let images: Array<{ src: string; alt: string }> = [];

  try {
    if (fs.existsSync(galleryDir)) {
      const files = fs.readdirSync(galleryDir);
      const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
      images = files
        .filter((file) =>
          imageExtensions.includes(path.extname(file).toLowerCase())
        )
        .map((file) => ({
          src: `/images/gallery/${file}`,
          alt: file.replace(/\.[^/.]+$/, ""),
        }));
    }
  } catch (error) {
    console.error("Error reading gallery folder:", error);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AMSA 2026 Highlights</h1>
          <p className="text-lg text-gray-100 max-w-3xl">
            Highlights of the AMSA 2026 Conference
          </p>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Gallery images={images} />
      </div>
    </div>
  );
};

export default GalleryPage;
