import { useEffect, useState, type ComponentType } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  AtSign,
  Camera,
  Code2,
  Globe2,
  Mail,
  Palette,
  PhoneCall,
  Rocket,
  Sparkles,
  TabletSmartphone,
  WandSparkles,
} from 'lucide-react'

type Skill = {
  label: string
  details: string
  icon: ComponentType<{ size?: number; className?: string }>
}

type Project = {
  title: string
  type: string
  description: string
  stack: string[]
  status: string
}

type ContactItem = {
  label: string
  value: string
  icon: ComponentType<{ size?: number; className?: string }>
}

type Sparkle = {
  id: number
  symbol: string
  top: string
  left: string
}

const skills: Skill[] = [
  {
    label: 'React Magic',
    details: 'Component-first interfaces with playful interactions.',
    icon: WandSparkles,
  },
  {
    label: 'Tailwind Styling',
    details: 'Fast, consistent UI systems with custom design tokens.',
    icon: Palette,
  },
  {
    label: 'Motion Design',
    details: 'Framer Motion storytelling, reveals, and polished transitions.',
    icon: Sparkles,
  },
  {
    label: 'Frontend Engineering',
    details: 'Clean React architecture focused on performance and scale.',
    icon: Code2,
  },
  {
    label: 'Responsive UX',
    details: 'Layouts crafted to feel premium on mobile and desktop.',
    icon: TabletSmartphone,
  },
  {
    label: 'Visual Direction',
    details: 'Brand styling, look-and-feel systems, and editorial UI polish.',
    icon: Camera,
  },
]

const projects: Project[] = [
  {
    title: 'Dream Closet Builder',
    type: 'Style Planner App',
    description:
      'A drag-and-drop outfit planner with saved looks, trend tags, and calendar syncing.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    status: 'Case study in progress',
  },
  {
    title: 'Glam Drop Landing',
    type: 'Product Launch Site',
    description:
      'A high-energy launch page with countdowns, animated lookbooks, and conversion-focused flow.',
    stack: ['Vite', 'React', 'A/B Testing'],
    status: 'Case study in progress',
  },
  {
    title: 'Cherry Arcade UI Kit',
    type: 'Design System',
    description:
      'A playful component library mixing retro game textures with modern accessibility standards.',
    stack: ['Tokens', 'Storybook', 'WCAG'],
    status: 'Case study in progress',
  },
]

const contactItems: ContactItem[] = [
  {
    label: 'Email',
    value: 'Available on request',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: 'Available on request',
    icon: PhoneCall,
  },
  {
    label: 'Portfolio links',
    value: 'Coming soon',
    icon: Globe2,
  },
  {
    label: 'Social',
    value: 'Coming soon',
    icon: AtSign,
  },
]

const sparkles: Sparkle[] = [
  { id: 1, symbol: '✨', top: '5%', left: '8%' },
  { id: 2, symbol: '⭐', top: '14%', left: '82%' },
  { id: 3, symbol: '✨', top: '33%', left: '4%' },
  { id: 4, symbol: '⭐', top: '38%', left: '90%' },
  { id: 5, symbol: '✨', top: '56%', left: '14%' },
  { id: 6, symbol: '⭐', top: '64%', left: '78%' },
  { id: 7, symbol: '✨', top: '82%', left: '9%' },
  { id: 8, symbol: '⭐', top: '88%', left: '88%' },
]

const riseUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
}

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
} as const

function App() {
  const prefersReducedMotion = useReducedMotion()
  const [isSmallViewport, setIsSmallViewport] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    const updateViewport = () => setIsSmallViewport(mediaQuery.matches)

    updateViewport()

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateViewport)
      return () => mediaQuery.removeEventListener('change', updateViewport)
    }

    mediaQuery.addListener(updateViewport)
    return () => mediaQuery.removeListener(updateViewport)
  }, [])

  useEffect(() => {
    let scrollTimeoutId: number | undefined

    const handleScroll = () => {
      setIsScrolling(true)

      if (scrollTimeoutId !== undefined) {
        window.clearTimeout(scrollTimeoutId)
      }

      scrollTimeoutId = window.setTimeout(() => {
        setIsScrolling(false)
      }, 140)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (scrollTimeoutId !== undefined) {
        window.clearTimeout(scrollTimeoutId)
      }
    }
  }, [])

  const shouldAnimateSparkles = !prefersReducedMotion && !isSmallViewport
  const shouldRunSparkleAnimation = shouldAnimateSparkles && !isScrolling
  const visibleSparkles = shouldAnimateSparkles ? sparkles.slice(0, 5) : sparkles.slice(0, 2)

  return (
    <div className="relative min-h-screen overflow-x-clip pb-6 text-zinc-800">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
        <div className="site-bg absolute inset-0" />
        <div className="pink-haze absolute inset-0" />
        {visibleSparkles.map((sparkle, index) =>
          shouldRunSparkleAnimation ? (
            <motion.span
              key={sparkle.id}
              className="sparkle-emoji"
              style={{ top: sparkle.top, left: sparkle.left }}
              animate={{ y: [0, -5, 0], opacity: [0.24, 0.5, 0.24] }}
              transition={{
                duration: 8.6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatDelay: 1.1,
                delay: index * 0.62,
              }}
            >
              {sparkle.symbol}
            </motion.span>
          ) : (
            <span
              key={sparkle.id}
              className="sparkle-emoji"
              style={{ top: sparkle.top, left: sparkle.left, opacity: 0.35 }}
            >
              {sparkle.symbol}
            </span>
          ),
        )}
      </div>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <motion.section
          initial={prefersReducedMotion ? false : 'hidden'}
          animate={prefersReducedMotion ? undefined : 'show'}
          variants={riseUp}
          transition={transition}
          className="glass-panel doll-box p-6 sm:p-8 lg:p-10"
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <span className="pill-tag">PERSONAL PORTFOLIO</span>
              <h1 className="title-script mt-5 text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
                Kathrine Daphnie Vicente
              </h1>
              <p className="mt-5 max-w-2xl text-base font-medium text-zinc-800/95 sm:text-lg">
                I’m Kathrine, a Cisco-certified creative. I spend my days optimizing routes and my nights designing dreams. Let’s make your digital Dream House a reality!
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="pink-button">
                  Check Out My Projects
                </a>
                <a href="#contact" className="glass-button">
                  Call Me
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-sm">
              <div className="profile-frame">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/profile-640.webp 640w, /profile-960.webp 960w"
                    sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 304px"
                  />
                  <img
                    src="/profile-960.webp"
                    alt="Kathrine Daphnie Vicente profile photo"
                    className="h-full w-full object-cover object-center"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    width="640"
                    height="640"
                  />
                </picture>
              </div>
              <div className="floating-pill">
                <Sparkles size={16} />
                Let’s create together
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="glass-panel deferred-section p-6 sm:p-8"
        >
          <motion.div variants={riseUp} transition={transition} className="flex items-center gap-3">
            <WandSparkles className="text-hotPink" size={24} />
            <h2 className="section-title text-4xl sm:text-5xl">Accessories</h2>
          </motion.div>
          <motion.p variants={riseUp} transition={transition} className="mt-3 text-base font-medium text-zinc-800/90">
            Every skill is a sticker in my digital doll box.
          </motion.p>

          <motion.div variants={stagger} className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => {
              const Icon = skill.icon

              return (
                <motion.article
                  key={skill.label}
                  variants={riseUp}
                  transition={transition}
                  className="sticker-card"
                >
                  <span className="icon-badge">
                    <Icon size={17} />
                  </span>
                  <h3 className="mt-4 text-lg font-extrabold text-zinc-900">{skill.label}</h3>
                  <p className="mt-2 text-sm font-medium text-zinc-800/90">{skill.details}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="glass-panel deferred-section p-6 sm:p-8"
        >
          <motion.div variants={riseUp} transition={transition} className="flex items-center gap-3">
            <Rocket className="text-hotPink" size={24} />
            <h2 className="section-title text-4xl sm:text-5xl">Projects</h2>
          </motion.div>
          <motion.p variants={riseUp} transition={transition} className="mt-3 text-base font-medium text-zinc-800/90">
            Built like vintage packaging: iconic outside, powerful inside.
          </motion.p>

          <motion.div variants={stagger} className="mt-7 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                variants={riseUp}
                transition={transition}
                className="toy-card"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="toy-label">NEW DROP</span>
                  <span className="text-sm font-semibold text-zinc-800/90">{project.type}</span>
                </div>
                <h3 className="mt-5 text-xl font-black leading-tight text-zinc-900">{project.title}</h3>
                <p className="mt-3 text-sm font-medium text-zinc-800/90">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="pill-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex text-sm font-extrabold text-hotPink">
                  {project.status}
                </span>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          initial={prefersReducedMotion ? false : 'hidden'}
          whileInView={prefersReducedMotion ? undefined : 'show'}
          viewport={{ once: true, amount: 0.3 }}
          variants={riseUp}
          transition={transition}
          className="glass-panel deferred-section p-6 sm:p-8"
        >
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <span className="pill-tag">RETRO LINE</span>
              <h2 className="section-title mt-4 text-4xl sm:text-5xl">Call Me</h2>
              <p className="mt-4 max-w-lg text-base font-medium text-zinc-800/90">
                Want your brand to stand out like a collectible on the top shelf? Let us build
                something unapologetically memorable.
              </p>
            </div>

            <div className="flip-phone">
              <div className="phone-top" />
              <div className="phone-screen">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-hotPink/90">Speed Dial</p>
                {contactItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <div key={item.label} className="phone-link">
                      <Icon size={16} />
                      <span>
                        <span className="block text-xs font-black uppercase text-hotPink/80">{item.label}</span>
                        {item.value}
                      </span>
                    </div>
                  )
                })}
              </div>
              <div className="phone-keypad">
                {'123456789*0#'.split('').map((key) => (
                  <span key={key} className="key">
                    {key}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
