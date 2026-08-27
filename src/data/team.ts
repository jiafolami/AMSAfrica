export type TeamMember = {
  name: string;
  role: string;
  institution?: string;
  image: string;
  description?: string;
};

export const leadership: TeamMember[] = [
  {
    name: "Prof Temidayo Ogundiran",
    role: "President",
    institution: "University of Ibadan, Nigeria",
    image: "/images/prof-temidayo.jpg",
  },
  {
    name: "Prof Alfred Yawson",
    role: "Vice-President",
    institution: "University of Ghana ",
    image: "/images/prof-alfred.jpg",
  },
  {
    name: "Prof Alaadin Ahmed",
    role: "Member",
    institution: "University of Khartoum, Sudan",
    image: "/images/prof-alaadin.jpg",
  },
  {
    name: "Prof Bernice O. Adegbehingbe",
    role: "President",
    image: "/images/Prof_Bernice_Adegbehingbe.jpg",
    description:
      "Professor/Consultant Opthalmologist. Provost, College of Health Sciences, Obafemi Awolowo University. Head, Glaucoma Services, Obafemi Awolowo University Teaching Hospitals Complex, Ile-Ife, Nigeria.",
  },
  {
    name: "Prof. Damalie Nakanjako",
    role: "Member",
    institution: "Makerere University Uganda",
    image: "/images/prof-damalie.jpg",
  },
  {
    name: "Prof Bara Ndiaye Doyen ",
    role: "Member",
    institution:
      "Universite Cheikh Anta Diop Faculte de Medecine de Pharmacie et d’Odontologie, Senegal",
    image: "/images/prof-bara.jpg",
  },
  {
    name: "Prof Mbungu Mwimba",
    role: "Member",
    institution: "Universite de Kinshasa Faculte de Medecine, DRC",
    image: "/images/prof-mbungu.jpg",
  },
  {
    name: "Prof Enica Richard Massawe Muhimbili",
    role: "Member",
    institution: "University of Health and Allied Sciences, Tanzania",
    image: "/images/prof-enica.jpg",
  },
  {
    name: "Prof E. Oluwabunmi Olapade Olaopa",
    role: "Ex-Officio",
    institution: "University of Ibadan, Ibadan.",
    image: "/images/professor-olapade-olaopa.JPG.jpeg",
  },
];
