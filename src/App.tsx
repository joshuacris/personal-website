import { useState } from 'react'
import { FaGithub, FaLinkedin, FaChevronDown, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

const RESUME_URL = 'https://drive.google.com/file/d/18m59n340XjGG8DMf16rjvCs0oluTUyiJ/view?usp=sharing'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/joshuacris', icon: <FaGithub /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/joshua-crisologo', icon: <FaLinkedin /> },
  { label: 'Email', href: 'mailto:crisologoj57@gmail.com', icon: <FaEnvelope /> },
  { label: 'Resume', href: RESUME_URL, icon: <FaFileAlt /> },
]

/* ── Experience data ── */
interface Experience {
  id: number
  company: string
  title: string
  date: string
  logo?: string
  bullets?: string[] // edit these to add your descriptions
}

const EXPERIENCES: Experience[] = [
  {
    id: 8, company: 'Shopify', title: 'Software Engineer Intern', date: 'Sep. 2026 - Dec. 2026', logo: '/images/shopify.png',
    bullets: [
      'Search Foundation Models Team',
      'Improved offline search relevance by up to 4.3% by post-training a 2.6B-parameter retrieval model with GRPO.',
      'Scaled RL post-training from 1 to 8 GPUs by implementing PyTorch DDP and resolving synchronization deadlocks, for a 4.1× training speedup.',
    ],
  },
  {
    id: 1, company: 'Shopify', title: 'Software Engineer Intern', date: 'May 2026 - Aug. 2026', logo: '/images/shopify.png',
    bullets: [
      'Search Relevance Team',
      'Spearheaded DSL standardization and metric logging tooling in Java and Ruby on Rails, with changes adopted as team-wide conventions by 30+ engineers across the search relevance infrastructure.',
      'Improved NDCG@10 by 0.70 points on brand-specific searches by identifying and eliminating a systematic diversity penalty; productionized the guardrail through an A/B-tested ranking pipeline on millions of queries.',
      'Led ranking-model experiments across objective design, feature ablation, and personalized query rewriting; applied SHAP to 106K+ production pairs and reduced model feature count by 10% with no loss.',
    ],
  },
  {
    id: 2, company: 'aUToronto', title: 'Software Engineer', date: 'Sep. 2025 - May 2026', logo: '/images/autoronto.png',
    bullets: [
      'Deep Learning Acceleration Team',
      'Reduced inference latency by 3.6× and increased throughput by 33% by migrating computer-vision pipelines from OpenVINO to TensorRT (Linux, ROS2), winning 1st place in North America in the SAE AutoDrive Challenge.',
      'Decreased memory usage by 50%+ and inference time by 60%+ by benchmarking execution providers (ONNX Runtime, TensorRT, OpenVINO) for 2D YOLOv5 and 3D PointPillars models across GPU platforms.',
    ],
  },
  {
    id: 3, company: 'MAPELab', title: 'Applied Machine Learning Researcher (Part-time)', date: 'May 2024 - Apr. 2026', logo: '/images/rotman.png',
    bullets: [
      'Increased classification accuracy by 15%+ for social science research through applying methods from NLP research papers with PyTorch, Hugging Face to analyze trends in large real-world conversational datasets.',
      'Boosted classification accuracy by 25%+ by fine-tuning Transformers/LLMs (BERT) for inference on political conversations, optimizing with chunking strategies/hyperparameter tuning to handle 6,000+ word sequences.',
    ],
  },
  {
    id: 4, company: 'Royal Bank of Canada', title: 'Software Developer Intern', date: 'Sep. 2025 - Dec. 2025', logo: '/images/rbc.png',
    bullets: [
      'Digital SRE Division',
      'Built a production-ready RAG/GenAI Q&A pipeline for an internal Slack workspace of 1000+ members, integrating LangChain with pgvector (PostgreSQL) and automating daily ingestion (REST APIs + embeddings).',
      'Achieved 30% faster responses and 10%+ higher LLM answer accuracy via vector database tuning (indexing, connection pooling), prompt engineering, and retrieval optimization, deploying on Docker/Kubernetes (OpenShift).',
    ],
  },
  {
    id: 5, company: 'Dynamic Optimization Lab', title: 'Software Engineer (Part-time)', date: 'Apr. 2025 - Dec. 2025', logo: '/images/uoft.png',
    bullets: [
      'Developed and published an open-source Python package to PyPI with 10+ modular, OOP-designed environments and a documented API to test and benchmark reinforcement-learning models.',
    ],
  },
  {
    id: 6, company: 'Royal Bank of Canada', title: 'Data Scientist Intern (Machine Learning)', date: 'Jan. 2025 - Aug. 2025', logo: '/images/rbc.png',
    bullets: [
      'Security Insights & AI Division',
      'Engineered and deployed a risk-classification data pipeline processing 10M+ records daily (AWS, Airflow, Python), presenting impact to the Chief Security Officer and winning the RBC Intern Challenge (2×).',
      'Cut pipeline runtime by 50%+ via distributed processing (Apache Spark, AWS S3/Glue/SageMaker, Hadoop) and boosted detection accuracy by 10%+ by training Scikit-Learn & LightGBM classifiers.',
    ],
  },
  {
    id: 7, company: 'UTAT', title: 'Machine Learning Engineer', date: 'May 2024 - Nov. 2024', logo: '/images/utat.png',
    bullets: [
      'Data Processing Team',
      'Collaborated in a team of 4 to review literature of 10+ academic papers, as well as test and implement 3+ super resolution deep learning models via Python, PyTorch and Tensorflow, improving quality of hyperspectral images.',
      'Utilized Matplotlib, Pillow to visualize and summarize the data of 5 models to analyze super resolution techniques.',
    ],
  },
]

/* ── Projects data ── */
interface Project {
  title: string
  desc: string
  link: string
}

const PROJECTS: Project[] = [
  {
    title: 'Real-Time Network Intrusion Detection',
    desc: 'C++ / Kafka streaming pipeline scoring 90K network flows/sec with an XGBoost detector served via ONNX Runtime',
    link: 'https://github.com/joshuacris/realtime-intrusion-detection',
  },
  {
    title: 'Hemgjord',
    desc: 'turn photos of a room into a metrically accurate 3D model and redesign it with real catalog furniture',
    link: 'https://github.com/joshuacris/hemgjord',
  },
  {
    title: 'Relay',
    desc: 'AI memory layer that captures the reasoning behind merged PRs and makes it queryable',
    link: 'https://github.com/joshuacris/relay',
  },
  {
    title: 'PromptPilot',
    desc: 'Chrome extension that rewrites your LLM prompts to be clearer and more specific',
    link: 'https://github.com/joshuacris/PromptPilot',
  },
  {
    title: "Curator's Companion",
    desc: 'Android collection-management app for the Toronto Asian Art Museum',
    link: 'https://github.com/joshuacris/CuratorsCompanion',
  },
  {
    title: 'MAMA',
    desc: 'maternal & infant mortality dashboard, Best Insights winner at the UTSC SDG Data Challenge',
    link: 'https://github.com/joshuacris/sdg-challenge-2025-MAMA',
  },
]

function App() {
  const [openExp, setOpenExp] = useState<number | null>(null)

  const toggleExp = (id: number) =>
    setOpenExp(prev => (prev === id ? null : id))

  return (
    <main className="page">
      <header className="intro">
        <h1 className="name">Joshua Crisologo</h1>
        <p className="tagline">CS &amp; ML @ University of Toronto</p>
        <nav className="links">
          {LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              {...(link.href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noreferrer' })}
            >
              {link.icon}
            </a>
          ))}
        </nav>
        <div className="bio">
          <p>Hi! I'm a Computer Science and Machine Learning student at the University of Toronto graduating in 2027. I love to build ML/AI systems that scale.</p>
          <p>This fall, I'm a Software Engineer Intern on Shopify's Search Foundation Models team, improving distributed training and running post-training experiments on retrieval models with reinforcement learning. I also spent the summer on the Search Relevance team improving ranking. I’m really interested in LLM fine-tuning, ML infrastructure, inference optimization, backend systems, and of course, shipping things that help people!</p>
          <p>Outside of building, I love dogs, sushi, playing badminton, and going to concerts. I also love travelling, having been to Japan twice!</p>
        </div>
      </header>

      <section className="section">
        <h2 className="section-header">Experience</h2>
        <ul className="exp-list">
          {EXPERIENCES.map(exp => (
            <li key={exp.id} className="exp-entry">
              <button
                className="exp-row"
                onClick={() => toggleExp(exp.id)}
                aria-expanded={openExp === exp.id}
              >
                <span className="exp-logo">
                  {exp.logo && <img src={exp.logo} alt="" />}
                </span>
                <span className="exp-info">
                  <span className="exp-company">{exp.company}</span>
                  <span className="exp-dot"> · </span>
                  <span className="exp-title">{exp.title}</span>
                </span>
                <span className="exp-date">{exp.date}</span>
                <FaChevronDown className={`exp-chevron${openExp === exp.id ? ' open' : ''}`} />
              </button>
              {openExp === exp.id && exp.bullets && (
                <ul className="exp-bullets">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-header">Projects</h2>
        <ul className="project-list">
          {PROJECTS.map(project => (
            <li key={project.title}>
              <a className="project-row" href={project.link} target="_blank" rel="noreferrer">
                <FaGithub className="project-icon" />
                <span>
                  <span className="project-title">{project.title}</span>
                  <span className="project-desc"> — {project.desc}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Analytics />
      <SpeedInsights />
    </main>
  )
}

export default App
