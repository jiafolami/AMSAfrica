import Image from "next/image";
import { leadership } from "@/data/team";

const ourTeam = () => {
  return (
    <section className="min-h-screen py-24 lg:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-4xl font-bold">
            Interim Leadership Team
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Distinguished medical educators and researchers leading AMSA into
            the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                width={400}
                height={400}
                className="w-full h-96 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-gray-900 mb-1 font-bold">{leader.name}</h3>
                <p className="text-primary mb-2">{leader.role}</p>
                {leader.institution && (
                  <p className="text-gray-600">{leader.institution}</p>
                )}
                {leader.description && (
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 whitespace-pre-line">
                    {leader.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ourTeam;
