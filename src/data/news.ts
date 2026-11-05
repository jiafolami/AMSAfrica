export type EventPhoto = {
  src: string;
  alt: string;
  caption: string;
};

export type NewsEvent = {
  slug: string;
  title: string;
  date: string;
  location: string;
  image: string;
  imageAlt: string;
  summary: string;
  sessions: string[];
  story: string[];
  closing: string;
  photos: EventPhoto[];
};

export const recentEvents: NewsEvent[] = [
  {
    slug: "unga-2026",
    title: "AMSA at the 2026 United Nations General Assembly",
    date: "September 22–26, 2026",
    location: "United Nations Headquarters, New York",
    image: "/images/unga-2026-7.jpg",
    imageAlt: "Participants gather at the High-Level African-Caribbean session during UNGA 2026.",
    summary:
      "AMSA President Prof. Bernice Adegbehingbe represented the Association at UNGA 2026, advancing AMSA’s commitment to fit-for-purpose medical graduates and stronger partnerships across Africa and the Caribbean.",
    sessions: ["Support Africa Side Event", "High-Level African-Caribbean Session", "SDG 3: Good Health and Well-being"],
    story: [
      "The President of the Association of Medical Schools in Africa (AMSA), Prof. Bernice Adegbehingbe, represented the Association at the 2026 United Nations General Assembly (UNGA), held from September 22 to 26, 2026, at the United Nations Headquarters in New York.",
      "AMSA’s participation provided an important platform to advance the Association’s vision and reinforce its role as a leading voice for medical education in Africa. The President highlighted AMSA’s commitment to strengthening the training of fit-for-purpose medical graduates who can effectively respond to the continent’s current and emerging health needs.",
      "As part of the UNGA programme, the AMSA President participated in the Support Africa Side Event and the High-Level African-Caribbean Session, themed “Redefining Influence, Accelerating Action: Co-Creating Africa and The Caribbean’s Next Chapter for the SDGs.” The session brought together stakeholders from Africa and the Caribbean to explore collaborative approaches to advancing sustainable development, particularly SDG 3: Good Health and Well-being.",
      "Discussions focused on opportunities for stronger partnerships among health training institutions across both regions, emphasizing shared learning, innovation, and coordinated action to improve health outcomes and strengthen health workforce development.",
    ],
    closing:
      "AMSA remains committed to fostering strategic partnerships and ensuring that medical education continues to play a central role in achieving Africa’s health and development goals.",
    photos: [
      {
        src: "/images/unga-2026-2.jpg",
        alt: "Delegates take part in a roundtable discussion during the UNGA programme.",
        caption: "Delegates participate in a roundtable discussion.",
      },
      {
        src: "/images/unga-2026-3.jpg",
        alt: "Participants listen during a high-level discussion at UNGA 2026.",
        caption: "Participants engage in the high-level discussion.",
      },
      {
        src: "/images/unga-2026-4.jpg",
        alt: "Audience members and speakers gather for a session in New York.",
        caption: "A session brings together participants in New York.",
      },
      {
        src: "/images/unga-2026-5.jpg",
        alt: "A presentation slide for a panel discussion at the event.",
        caption: "A panel discussion featured in the event programme.",
      },
      {
        src: "/images/unga-2026-6.jpg",
        alt: "Four participants pose together at the African-Caribbean session.",
        caption: "Participants at the African-Caribbean session.",
      },
      {
        src: "/images/unga-2026-7.jpg",
        alt: "A group of participants gather beneath the session backdrop.",
        caption: "Participants gather beneath the session backdrop.",
      },
    ],
  },
];
