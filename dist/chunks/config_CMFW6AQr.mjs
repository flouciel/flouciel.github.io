const SITE = {
  website: "https://tthseus.github.io/",
  // replace this with your deployed domain
  author: "Hazy",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "l.u.n.e",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1e3
  // 15 minutes
};
const LOCALE = {
  lang: "en",
  // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"]
  // BCP 47 Language Tags. Set this empty [] to use the environment default
};
const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/tthseus/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true
  },
  {
    name: "Facebook",
    href: "#",
    linkTitle: `${SITE.title} on Facebook`,
    active: false
  },
  {
    name: "Instagram",
    href: "#",
    linkTitle: `${SITE.title} on Instagram`,
    active: false
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/tristan-bui",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true
  },
  {
    name: "Mail",
    href: "mailto:101.tristan.bui@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true
  },
  {
    name: "Twitter",
    href: "#",
    linkTitle: `${SITE.title} on Twitter`,
    active: false
  },
  {
    name: "Twitch",
    href: "#",
    linkTitle: `${SITE.title} on Twitch`,
    active: false
  },
  {
    name: "YouTube",
    href: "#",
    linkTitle: `${SITE.title} on YouTube`,
    active: false
  },
  {
    name: "WhatsApp",
    href: "#",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false
  },
  {
    name: "Snapchat",
    href: "#",
    linkTitle: `${SITE.title} on Snapchat`,
    active: false
  },
  {
    name: "Pinterest",
    href: "#",
    linkTitle: `${SITE.title} on Pinterest`,
    active: false
  },
  {
    name: "TikTok",
    href: "#",
    linkTitle: `${SITE.title} on TikTok`,
    active: false
  },
  {
    name: "CodePen",
    href: "#",
    linkTitle: `${SITE.title} on CodePen`,
    active: false
  },
  {
    name: "Discord",
    href: "#",
    linkTitle: `${SITE.title} on Discord`,
    active: false
  },
  {
    name: "GitLab",
    href: "#",
    linkTitle: `${SITE.title} on GitLab`,
    active: false
  },
  {
    name: "Reddit",
    href: "#",
    linkTitle: `${SITE.title} on Reddit`,
    active: false
  },
  {
    name: "Skype",
    href: "#",
    linkTitle: `${SITE.title} on Skype`,
    active: false
  },
  {
    name: "Steam",
    href: "#",
    linkTitle: `${SITE.title} on Steam`,
    active: false
  },
  {
    name: "Telegram",
    href: "#",
    linkTitle: `${SITE.title} on Telegram`,
    active: false
  },
  {
    name: "Mastodon",
    href: "#",
    linkTitle: `${SITE.title} on Mastodon`,
    active: false
  }
];

export { LOCALE as L, SITE as S, SOCIALS as a };
