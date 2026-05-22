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

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              { value: "850", label: "Registered participants", gradient: "from-sky-500 via-cyan-500 to-emerald-500" },
              { value: "18", label: "Countries Represented", gradient: "from-indigo-600 via-purple-600 to-pink-500" },
              { value: "17", label: "Awardees", gradient: "from-amber-500 via-orange-500 to-rose-500" },
              { value: ">80", label: "Abstracts Submitted", gradient: "from-teal-500 via-lime-500 to-emerald-500" },
              { value: "224", label: "Onsite Participants", gradient: "from-blue-700 via-sky-500 to-cyan-500" },
              { value: "363", label: "Online Participants", gradient: "from-fuchsia-600 via-violet-500 to-indigo-500" },
              { value: "35", label: "Guest Speakers", gradient: "from-rose-500 via-pink-500 to-fuchsia-500" },
              { value: "6", label: "Socio-Cultural Events", gradient: "from-emerald-600 via-lime-500 to-yellow-400" },
              { value: "20", label: "Volunteers", gradient: "from-cyan-600 via-sky-500 to-blue-400" },
              { value: "28", label: "Scientific sessions", gradient: "from-slate-700 via-slate-500 to-slate-400" },
            ].map((stat) => (
              <div
                key={stat.label}
                className={`rounded-3xl p-5 shadow-xl ring-1 ring-white/20 text-white bg-gradient-to-br ${stat.gradient}`}
              >
                <p className="text-4xl font-extrabold tracking-tight">{stat.value}</p>
                <p className="mt-3 text-sm sm:text-base opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
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
