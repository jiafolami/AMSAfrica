export type TeamMember = {
  name: string;
  role: string;
  institution?: string;
  image: string;
  imageClassName?: string;
  description?: string;
};

export const leadership: TeamMember[] = [
  {
    name: "Prof Bernice O. Adegbehingbe",
    role: "President",
    image: "/images/Prof_Bernice_Adegbehingbe.jpg",
    description:
      "Professor/Consultant Opthalmologist. Provost, College of Health Sciences, Obafemi Awolowo University. Head, Glaucoma Services, Obafemi Awolowo University Teaching Hospitals Complex, Ile-Ife, Nigeria.",
  },
  {
    name: "Prof Alfred E. Yawson",
    role: "Vice President",
    image: "/images/Prof_Alfred_Yawson.jpg",
    imageClassName: "px-4 pt-8 pb-0",
    description:
      "Professor of Community Health,\nProvost, College of Health Sciences,\nUniversity of Ghana",
  },
  {
    name: "Associate Professor Lawrence M. Sherman",
    role: "Secretary General",
    image: "/images/Associate_Professor_Lawrence_Sherman.jpg",
    description:
      "Dean and Associate Professor of Surgery\nA.M. Dogliotti School of Medicine,\nUniversity of Liberia.",
  },
  {
    name: "Professor Temidayo O. Ogundiran",
    role: "Treasurer",
    image: "/images/Prof_Temidayo_Ogundiran.jpg",
    description:
      "Provost, College of Medicine University of Ibadan,\nUniversity of Ibadan, Nigeria.",
  },
  {
    name: "Professor Jeremiah Madaki",
    role: "Assistant Treasurer",
    image: "/images/Prof_Jeremiah_Madaki.jpg",
  },
  {
    name: "Professor Simon J. Yiltok",
    role: "Trustee",
    image: "/images/Prof_Simon_J.Yiltok.jpg",
    imageClassName: "px-4 pt-8 pb-0",
  },
  {
    name: "Professor Obafunke O. Denloye",
    role: "Trustee",
    image: "/images/Prof_Obafunke_Denloye.jpg",
  },
  {
    name: "Professor Oluwabunmi Olapade-Olaopa",
    role: "Trustee and Ex-Officio",
    image: "/images/Prof_Oluwabunmi_Olaopa.jpg",
    description:
    "Professor of Surgery, Urology Division, College of Medicine, University of Ibadan, Nigeria. \nPresident-Elect, World Federation of Medical Education.",
  },
  {
    name: "Professor Jehu E. Iputo",
    role: "Adviser",
    image: "/images/Prof_Jehu_Iputo.jpg",
  },
  {
    name: "Professor Allaeldin Hassan Ahmed",
    role: "Adviser",
    image: "/images/Allaeldin_Hassan_Ahmed.jpg",
  },
];
