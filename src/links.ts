import {
  EMAIL,
  GITHUB_USERNAME,
  INSTAGRAM_USERNAME,
  LINKEDIN_USERNAME,
  TWITTER_USERNAME,
} from './constants'

interface Link {
  title: string
  href: string
}

interface Section {
  title: string
  links: Link[]
}

export const NAV_LINKS: Link[] = [
  {
    title: 'Home',
    href: '/',
  },
]

const LINK_SECTIONS: Section[] = [
  {
    title: 'Links',
    links: NAV_LINKS,
  },
  {
    title: 'Connect',
    links: [
      {
        title: 'LinkedIn',
        href: `https://www.linkedin.com/in/${LINKEDIN_USERNAME}/`,
      },
      {
        title: 'Email',
        href: `mailto:${EMAIL}`,
      },
    ],
  },
  {
    title: 'Social',
    links: [
      {
        title: 'GitHub',
        href: `https://github.com/${GITHUB_USERNAME}`,
      },
      {
        title: 'Instagram',
        href: `https://www.instagram.com/${INSTAGRAM_USERNAME}/`,
      },
      {
        title: 'Twitter',
        href: `https://twitter.com/${TWITTER_USERNAME}`,
      },
    ],
  },
]

export default LINK_SECTIONS
