import Image from "next/image";

const ExcosPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Excos
        </h1>
        <p className="text-lg text-gray-700 mb-10">
          Meet the Executive Committee members of AMSA Africa, the team driving
          progress and collaboration across the continent.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl overflow-hidden shadow-lg">
            <Image
              src="/images/AMSA_Excos.jpg"
              alt="AMSA Excos"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="space-y-6 text-gray-700">
            <p>
              This page is dedicated to the AMSA Africa Executive Committee.
              It highlights leaders committed to strengthening medical education
              and healthcare across Africa.
            </p>
            <div className="bg-slate-50 p-6 rounded-3xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-3">What we do</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Champion medical education quality and standards</li>
                <li>Support collaboration between African medical schools</li>
                <li>Coordinate leadership and advocacy initiatives</li>
                <li>Promote professional development for medical educators</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcosPage;
