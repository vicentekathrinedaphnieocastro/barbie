import {
  AtSign,
  BriefcaseBusiness,
  Camera,
  Code2,
  Mail,
  Palette,
  Send,
  Sparkles,
  TabletSmartphone,
  WandSparkles,
  type LucideIcon,
} from 'lucide-react'

export type IconComponent = LucideIcon

export type Skill = {
  label: string
  details: string
  icon: IconComponent
}

export type Project = {
  title: string
  type: string
  description: string
  stack: string[]
  status: string
  image: {
    src: string
    alt: string
  }
}

export type ContactItem = {
  label: string
  value: string
  detail: string
  icon: IconComponent
}

export type Sparkle = {
  id: number
  symbol: string
  top: string
  left: string
}

const publicPath = (filename: string) => `${import.meta.env.BASE_URL}${filename}`

export const skills: Skill[] = [
  {
    label: 'Cisco Networking',
    details: 'She’s the architect of the digital roads. Kathrine loves configuring Cisco systems to ensure every connection is fast, safe, and secure.',
    icon: WandSparkles,
  },
  {
    label: 'UI Design Canvas',
    details: 'For her, every screen is a canvas. She crafts user-centric interfaces that balance aesthetic "wow" factors with a smooth, intuitive experience. ',
    icon: Palette,
  },
  {
    label: 'Database Structure',
    details: 'The organizer behind the scenes. She builds the "memory" of a project, structuring databases so that information stays secure and easy to find.',
    icon: Sparkles,
  },
  {
    label: 'Web Styling',
    details: "She brings static visions to life. Kathrine codes with a designer’s eye, ensuring that every website isn't just functional, but visually iconic.",
    icon: Code2,
  },
  {
    label: 'Creative Leadership',
    details: 'She leads technical teams by ensuring the infrastructure is strong while the creative vision stays iconic.',
    icon: TabletSmartphone,
  },
  {
    label: 'Core Documentation',
    details: 'Brand styling, look-and-feel systems, and editorial UI polish.As a Capstone Docu Head, she transforms complex project details into organized, clear, and professional records.',
    icon: Camera,
  },
]

export const projects: Project[] = [
  {
    title: 'Junji Ito Art Gallery',
    type: 'Activity Website',
    description:
      '',
    stack: [],
    status: 'Case study in progress',
    image: {
      src: publicPath('junji.jpg'),
      alt: 'Junji Ito Art Gallery project preview',
    },
  },
  {
    title: 'Trashure',
    type: 'Capstone Project',
    description:
      '',
    stack: [],
    status: 'Case study in progress',
    image: {
      src: publicPath('trashure.jpg'),
      alt: 'Trashure project preview',
    },
  },
  {
    title: 'Kyusi Esports',
    type: 'Community Hub',
    description:
      '',
    stack: [],
    status: 'Case study in progress',
    image: {
      src: publicPath('kyusi.jpg'),
      alt: 'Kyusi Esports project preview',
    },
  },
]

export const contactItems: ContactItem[] = [
  {
    label: 'Start a Project',
    value: 'Available on request',
    detail: 'Share the goal, timeline, and the kind of polish you want.',
    icon: Send,
  },
  {
    label: 'Best Fit',
    value: 'Frontend UI builds',
    detail: 'Portfolio pages, landing pages, and responsive interface work.',
    icon: BriefcaseBusiness,
  },
  {
    label: 'Direct Contact',
    value: 'Available on request',
    detail: 'Direct details for serious project conversations.',
    icon: Mail,
  },
  {
    label: 'Verified Links',
    value: 'Coming soon',
    detail: 'GitHub, LinkedIn, resume, and other public profiles.',
    icon: AtSign,
  },
]

export const availability = ['Frontend UI', 'Landing pages', 'Responsive polish', 'Creative builds']

export const sparkles: Sparkle[] = [
  { id: 1, symbol: '✨', top: '5%', left: '8%' },
  { id: 2, symbol: '⭐', top: '14%', left: '82%' },
  { id: 3, symbol: '✨', top: '33%', left: '4%' },
  { id: 4, symbol: '⭐', top: '38%', left: '90%' },
  { id: 5, symbol: '✨', top: '56%', left: '14%' },
]
