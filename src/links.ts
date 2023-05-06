import {
  EMAIL,
  GITHUB_USERNAME,
  INSTAGRAM_USERNAME,
  LINKEDIN_USERNAME,
  READ_CV_USERNAME,
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

const LINK_SECTIONS: Section[] = [
  {
    title: 'Links',
    links: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'Work',
        href: `https://read.cv/${READ_CV_USERNAME}`,
      },
    ],
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
