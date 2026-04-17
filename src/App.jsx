import { motion } from 'framer-motion'
import {
  AtSign,
  Camera,
  Code2,
  ExternalLink,
  Globe2,
  Mail,
  Palette,
  PhoneCall,
  Rocket,
  Sparkles,
  TabletSmartphone,
  WandSparkles,
} from 'lucide-react'

const skills = [
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

const projects = [
  {
    title: 'Dream Closet Builder',
    type: 'Style Planner App',
    description:
      'A drag-and-drop outfit planner with saved looks, trend tags, and calendar syncing.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Glam Drop Landing',
    type: 'Product Launch Site',
    description:
      'A high-energy launch page with countdowns, animated lookbooks, and conversion-focused flow.',
    stack: ['Vite', 'React', 'A/B Testing'],
    link: '#',
  },
  {
    title: 'Cherry Arcade UI Kit',
    type: 'Design System',
    description:
      'A playful component library mixing retro game textures with modern accessibility standards.',
    stack: ['Tokens', 'Storybook', 'WCAG'],
    link: '#',
  },
]

const sparkles = [
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
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip pb-6 text-zinc-800">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="pink-haze absolute inset-0" />
        {sparkles.map((sparkle, index) => (
          <motion.span
            key={sparkle.id}
            className="sparkle-emoji"
            style={{ top: sparkle.top, left: sparkle.left }}
            animate={{ y: [0, -9, 0], opacity: [0.25, 0.75, 0.25] }}
            transition={{
              duration: 3.2,
              ease: 'easeInOut',
              repeat: Infinity,
              delay: index * 0.28,
            }}
          >
            {sparkle.symbol}
          </motion.span>
        ))}
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <motion.section
          initial="hidden"
          animate="show"
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
              <p className="mt-5 max-w-2xl text-base font-medium text-zinc-700/90 sm:text-lg">
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
                <img
                  src="/profile.png"
                  alt="Kathrine Daphne Vicente profile photo"
                  className="h-full w-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                className="floating-pill"
              >
                <Sparkles size={16} />
                Let’s create together
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="glass-panel p-6 sm:p-8"
        >
          <motion.div variants={riseUp} transition={transition} className="flex items-center gap-3">
            <WandSparkles className="text-hotPink" size={24} />
            <h2 className="section-title text-4xl sm:text-5xl">Accessories</h2>
          </motion.div>
          <motion.p variants={riseUp} transition={transition} className="mt-3 text-base font-medium text-zinc-700/85">
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
                  <p className="mt-2 text-sm font-medium text-zinc-700/85">{skill.details}</p>
                </motion.article>
              )
            })}
          </motion.div>
        </motion.section>

        <motion.section
          id="projects"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="glass-panel p-6 sm:p-8"
        >
          <motion.div variants={riseUp} transition={transition} className="flex items-center gap-3">
            <Rocket className="text-hotPink" size={24} />
            <h2 className="section-title text-4xl sm:text-5xl">Projects</h2>
          </motion.div>
          <motion.p variants={riseUp} transition={transition} className="mt-3 text-base font-medium text-zinc-700/85">
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
                  <span className="text-sm font-semibold text-zinc-700/85">{project.type}</span>
                </div>
                <h3 className="mt-5 text-xl font-black leading-tight text-zinc-900">{project.title}</h3>
                <p className="mt-3 text-sm font-medium text-zinc-700/85">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="pill-chip">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-hotPink transition-colors hover:text-barbiePink"
                >
                  Peek inside
                  <ExternalLink size={15} />
                </a>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={riseUp}
          transition={transition}
          className="glass-panel p-6 sm:p-8"
        >
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr]">
            <div>
              <span className="pill-tag">RETRO LINE</span>
              <h2 className="section-title mt-4 text-4xl sm:text-5xl">Call Me</h2>
              <p className="mt-4 max-w-lg text-base font-medium text-zinc-700/85">
                Want your brand to stand out like a collectible on the top shelf? Let us build
                something unapologetically memorable.
              </p>
            </div>

            <div className="flip-phone">
              <div className="phone-top" />
              <div className="phone-screen">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-hotPink/90">Speed Dial</p>
                <a href="tel:+1234567890" className="phone-link">
                  <PhoneCall size={16} />
                  +1 (234) 567-890
                </a>
                <a href="mailto:hello@barbiecore.dev" className="phone-link">
                  <Mail size={16} />
                  hello@barbiecore.dev
                </a>
                <div className="mt-4 flex gap-2">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="social-dot" aria-label="GitHub profile">
                    <Globe2 size={17} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-dot" aria-label="Instagram profile">
                    <AtSign size={17} />
                  </a>
                </div>
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