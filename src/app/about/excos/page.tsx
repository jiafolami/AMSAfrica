import Image from "next/image";

const ExcosPage = () => {
  return (
    <div className="min-h-screen pt-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          AMSA Executive Committee Members
        </h1>

        <div className="space-y-10">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/AMSA_Excos2.jpg"
              alt="AMSA Executive Committee Members"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <div className="space-y-6 text-gray-700 text-lg leading-8">
            <p>
              The Association of Medical Schools in Africa (AMSA) proudly welcomes its newly elected Executive Committee. We congratulate the new leadership and look forward to an exciting new chapter as we work together with our member institutions and partners to strengthen collaborations, advance medical education, and promote excellence across the continent.
            </p>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Image description
              </h2>
              <p className="text-gray-600 leading-7">
                From left: Prof Jeremiah Madaki (Assistant Treasurer - Nigeria), Prof Jehu Iputo (Adviser - Uganda), Prof Obafunke Denloye (Trustee - Nigeria), Prof Temidayo Ogundiran (Treasurer - Nigeria), Prof Bernice Adegbehingbe (President - Nigeria), Prof E. Oluwabunmi Olaopa (Ex-Officio 1 & Trustee - Nigeria), Prof Allaeldin Hassan Ahmed (Adviser - Sudan), and Prof Lawrence Sherman (Secretary General - Liberia).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcosPage;
