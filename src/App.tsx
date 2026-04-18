import { type ReactNode } from 'react'
import { motion, useReducedMotion, type Transition, type Variants } from 'framer-motion'
import { Rocket, Sparkles, WandSparkles } from 'lucide-react'
import {
  contactItems,
  availability,
  projects,
  skills,
  sparkles,
  type ContactItem,
  type IconComponent,
  type Project,
  type Skill,
} from './portfolioData'

const revealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

const staggerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.04,
      staggerChildren: 0.08,
    },
  },
}

const revealTransition: Transition = {
  duration: 0.52,
  ease: [0.22, 1, 0.36, 1],
}

type SectionProps = {
  id: string
  title: string
  summary: string
  icon: IconComponent
  children: ReactNode
}

function BackgroundLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="site-bg absolute inset-0" />
      <div className="pink-haze absolute inset-0" />
      {sparkles.map((sparkle, index) => (
        <span
          key={sparkle.id}
          className="sparkle-emoji"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: `${index * 0.7}s`,
          }}
        >
          {sparkle.symbol}
        </span>
      ))}
    </div>
  )
}

function SectionHeader({ icon: Icon, title, summary }: Omit<SectionProps, 'id' | 'children'>) {
  return (
    <>
      <motion.div variants={revealVariants} transition={revealTransition} className="flex items-center gap-3">
        <Icon className="text-hotPink" size={24} />
        <h2 className="section-title text-4xl sm:text-5xl">{title}</h2>
      </motion.div>
      <motion.p variants={revealVariants} transition={revealTransition} className="mt-3 max-w-2xl text-base font-medium text-zinc-800/90">
        {summary}
      </motion.p>
    </>
  )
}

function PortfolioSection({ id, title, summary, icon, children }: SectionProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      id={id}
      initial={prefersReducedMotion ? false : 'hidden'}
      whileInView={prefersReducedMotion ? undefined : 'show'}
      viewport={{ once: true, amount: 0.24 }}
      variants={staggerVariants}
      className="glass-panel deferred-section p-6 sm:p-8"
    >
      <SectionHeader icon={icon} title={title} summary={summary} />
      {children}
    </motion.section>
  )
}

function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      initial={prefersReducedMotion ? false : 'hidden'}
      animate={prefersReducedMotion ? undefined : 'show'}
      variants={revealVariants}
      transition={revealTransition}
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
            <a href="#skills" className="glass-button">
              Skills
            </a>
            <a href="#contact" className="glass-button">
              Contact Me
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
  )
}

function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skill.icon

  return (
    <motion.article variants={revealVariants} transition={revealTransition} className="sticker-card">
      <span className="icon-badge">
        <Icon size={17} />
      </span>
      <h3 className="mt-4 text-lg font-extrabold text-zinc-900">{skill.label}</h3>
      <p className="mt-2 text-sm font-medium text-zinc-800/90">{skill.details}</p>
    </motion.article>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article variants={revealVariants} transition={revealTransition} className="toy-card">
      <div className="project-image-frame">
        <img
          src={project.image.src}
          alt={project.image.alt}
          className="project-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="flex items-center justify-between gap-2">
        <span className="toy-label">New</span>
        <span className="text-sm font-semibold text-zinc-800/90">{project.type}</span>
      </div>
      <h3 className="mt-5 text-xl font-black leading-tight text-zinc-900">{project.title}</h3>
      {project.description ? (
        <p className="mt-3 text-sm font-medium text-zinc-800/90">{project.description}</p>
      ) : null}
      {project.stack.length > 0 ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="pill-chip">
              {item}
            </span>
          ))}
        </div>
      ) : null}
      <span className="mt-6 inline-flex text-sm font-extrabold text-hotPink">{project.status}</span>
    </motion.article>
  )
}

function ContactRow({ item }: { item: ContactItem }) {
  const Icon = item.icon

  return (
    <div className="contact-row">
      <span className="contact-icon">
        <Icon size={18} />
      </span>
      <div>
        <span className="block text-xs font-black uppercase text-hotPink/80">{item.label}</span>
        <p className="mt-1 text-base font-extrabold text-zinc-900">{item.value}</p>
        <p className="mt-1 text-sm font-medium text-zinc-700/90">{item.detail}</p>
      </div>
    </div>
  )
}

function ContactPanel() {
  return (
    <div className="contact-panel">
      <div className="contact-panel-top">
        <span className="pill-tag">OPEN TO PROJECTS</span>
        <p className="mt-4 text-2xl font-black leading-tight text-zinc-950 sm:text-3xl">
          Let’s make something polished, memorable, and easy to use.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {availability.map((item) => (
            <span key={item} className="availability-chip">
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="pink-button">
            View Projects
          </a>
          <a href="#skills" className="glass-button">
            See Skills
          </a>
        </div>
      </div>

      <div className="contact-list">
        {contactItems.map((item) => (
          <ContactRow key={item.label} item={item} />
        ))}
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip pb-6 text-zinc-800">
      <BackgroundLayer />

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-12 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <HeroSection />

        <PortfolioSection
          id="skills"
          icon={WandSparkles}
          title="Skills"
          summary="Every skill is a sticker in my digital doll box."
        >
          <motion.div variants={staggerVariants} className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <SkillCard key={skill.label} skill={skill} />
            ))}
          </motion.div>
        </PortfolioSection>

        <PortfolioSection
          id="projects"
          icon={Rocket}
          title="Projects"
          summary="Built like vintage packaging: iconic outside, powerful inside."
        >
          <motion.div variants={staggerVariants} className="mt-7 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </PortfolioSection>

        <PortfolioSection
          id="contact"
          icon={Sparkles}
          title="Contact Me"
          summary="Clear next steps, no gimmicks."
        >
          <div className="mt-7 grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="contact-intro-panel">
              <span className="pill-tag">WORK WITH ME</span>
              <p className="mt-4 max-w-lg text-base font-medium text-zinc-800/90 sm:text-lg">
                Send the project idea, the page or feature you want improved, and the deadline you are working toward.
              </p>
              <div className="contact-placeholder-list">
                <div>
                  <span>Email</span>
                  <strong>kathrine.vicente@ebarbie.com</strong>
                </div>
                <div>
                  <span>Phone</span>
                  <strong>+63 900 000 0000</strong>
                </div>
                <div>
                  <span>Location</span>
                  <strong>Philippines</strong>
                </div>
              </div>
            </div>
            <ContactPanel />
          </div>
        </PortfolioSection>
      </main>
    </div>
  )
}

export default App
