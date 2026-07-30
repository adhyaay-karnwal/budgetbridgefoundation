/**
 * Central media catalog — paths under /public/media for reuse across pages.
 */

export const MEDIA = {
  cta: {
    src: "/media/cta/bbf-cta-new.png",
    width: 2006,
    height: 784,
    alt: "Budget Bridge",
  },
  founders: {
    group: {
      src: "/media/founders/group.jpg",
      alt: "Budget Bridge founders",
    },
    shubh: { src: "/media/founders/shubh.jpg", alt: "Shubh Potdar" },
    avi: { src: "/media/founders/avi.jpg", alt: "Avi Mehta" },
    rohit: { src: "/media/founders/rohit.jpg", alt: "Rohit Viswanath" },
    evan: { src: "/media/founders/evan.png", alt: "Evan Schwartz" },
  },
  team: {
    placeholder: {
      src: "/media/team/placeholder.svg",
      alt: "Team member photo coming soon",
    },
  },
  events: {
    conference: {
      src: "/media/events/conference.jpg",
      alt: "Budget Bridge at a conference",
    },
  },
  atmospheres: {
    curtains: {
      src: "/media/atmospheres/atmosphere-01.jpg",
      alt: "",
    },
    shoreline: {
      src: "/media/atmospheres/atmosphere-02.jpg",
      alt: "",
    },
    dusk: {
      src: "/media/atmospheres/atmosphere-03.jpg",
      alt: "",
    },
    clouds: {
      src: "/media/atmospheres/atmosphere-04.jpg",
      alt: "",
    },
    warmSky: {
      src: "/media/atmospheres/atmosphere-05.jpg",
      alt: "",
    },
    bridge: {
      src: "/media/atmospheres/atmosphere-06.jpg",
      alt: "",
    },
    softField: {
      src: "/media/atmospheres/atmosphere-07.jpg",
      alt: "",
    },
    ocean: {
      src: "/media/atmospheres/atmosphere-08.jpg",
      alt: "",
    },
    mountains: {
      src: "/media/atmospheres/atmosphere-09.jpg",
      alt: "",
    },
    wildflowers: {
      src: "/media/atmospheres/atmosphere-10.jpg",
      alt: "",
    },
  },
  highlights: {
    story: {
      src: "/media/highlights/our-story.jpg",
      alt: "Budget Bridge founders",
    },
    volunteer: {
      src: "/media/highlights/volunteer.jpg",
      alt: "Budget Bridge volunteers at a conference",
    },
    advocacy: {
      src: "/media/highlights/advocacy.jpg",
      alt: "Budget Bridge advocacy at a Board of Education meeting",
    },
  },
  programs: {
    gameclass: {
      src: "/media/programs/gameclass-ss-1.png",
      alt: "GameClass lessons dashboard",
    },
  },
  advocacy: {
    photos: [
      {
        src: "/media/advocacy/photos/boe-4222.jpg",
        alt: "Budget Bridge at a Board of Education meeting",
      },
      {
        src: "/media/advocacy/photos/boe-4122.jpg",
        alt: "Board of Education meeting",
      },
      {
        src: "/media/advocacy/photos/boe-4224.jpg",
        alt: "Advocacy at a Board of Education meeting",
      },
      {
        src: "/media/advocacy/photos/boe-4127.jpg",
        alt: "Community support at a Board of Education meeting",
      },
      {
        src: "/media/advocacy/photos/boe-8248.jpg",
        alt: "Budget Bridge advocacy",
      },
      {
        src: "/media/advocacy/photos/boe-4126.jpg",
        alt: "Board of Education audience",
      },
    ],
    bills: {
      s3497: {
        pdf: "/media/advocacy/bills/s3497.pdf",
        screenshot: "/media/advocacy/bills/s3497-screenshot.png",
        label: "Senate Bill 3497",
      },
      a4764: {
        pdf: "/media/advocacy/bills/a4764.pdf",
        screenshot: "/media/advocacy/bills/a4764-screenshot.png",
        label: "Assembly Bill A4764",
      },
    },
    /** Order matches original site: Shubh, Rohit, Avi, then Evan */
    videos: [
      {
        id: "randolph-shubh",
        speaker: "Shubh Potdar",
        meeting: "Randolph Board of Education",
        title: "Shubh’s testimony",
        duration: "~2:47",
        aspect: "portrait" as const,
        src: "/media/advocacy/videos/randolph-shubh.mp4",
      },
      {
        id: "randolph-rohit",
        speaker: "Rohit Viswanath",
        meeting: "Randolph Board of Education",
        title: "Rohit’s testimony",
        duration: "~1:17",
        aspect: "portrait" as const,
        src: "/media/advocacy/videos/randolph-rohit.mp4",
      },
      {
        id: "randolph-avi",
        speaker: "Avi Mehta",
        meeting: "Randolph Board of Education",
        title: "Avi’s testimony",
        duration: "~1:40",
        aspect: "portrait" as const,
        src: "/media/advocacy/videos/randolph-avi.mp4",
      },
      {
        id: "parsippany-evan",
        speaker: "Evan Schwartz",
        meeting: "Parsippany Board of Education",
        title: "Evan’s testimony",
        duration: "~2:01",
        aspect: "landscape" as const,
        src: "/media/advocacy/videos/parsippany-evan.mp4",
      },
    ],
  },
} as const;

export type AdvocacyVideo = (typeof MEDIA.advocacy.videos)[number];
export type MediaImage = {
  readonly src: string;
  readonly alt: string;
};
