import { useState } from 'react'
import { FaGithub, FaLinkedin, FaChevronDown } from 'react-icons/fa'
import { SiDevpost } from 'react-icons/si'
import BLOG_POSTS, { type BlogPost } from './blog'
import './App.css'

const PAGES = ['Home', 'Projects', 'Resume', 'Blog'] as const
type Page = typeof PAGES[number]

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
    id: 1, company: 'Shopify', title: 'Machine Learning Engineer Intern', date: 'May 2026 - Aug. 2026', logo: '/images/shopify.png',
    bullets: [
      'Search Relevance Team',
      'Building AI-powered search and recommendation systems and pipelines to enhance merchant discovery experiences.',
    ],
  },
  {
    id: 2, company: 'aUToronto', title: 'Machine Learning Engineer', date: 'Sep. 2025 - Present', logo: '/images/autoronto.png',
    bullets: [
      'Deep Learning Acceleration Team',
      'Reduced inference latency by 3.6× and increased throughput by 33% by migrating deep learning (computer vision) pipelines from OpenVINO to TensorRT with Linux and ROS2 for the SAE Autonomous Vehicle competition.',
      'Decreased memory usage by 50%+ and inference time by 60%+ by benchmarking execution providers (ONNX Runtime, TensorRT, OpenVINO) for 2D YOLOv5 and 3D PointPillars models across GPU platforms.',
    ],
  },
  {
    id: 3, company: 'MAPELab', title: 'Applied Machine Learning Researcher (Part-time)', date: 'May 2024 - Present', logo: '/images/rotman.png',
    bullets: [
      'Increased classification accuracy by 15%+ for social science research through applying methods from NLP research papers with PyTorch, Hugging Face to analyze trends in large real-world conversational datasets.',
      'Boosted classification accuracy by 25%+ by fine-tuning Transformers/LLMs (BERT) for inference on political conversations, optimizing with chunking strategies/hyperparameter tuning to handle 6,000+ word sequences.',
    ],
  },
  {
    id: 4, company: 'Royal Bank of Canada', title: 'Software Developer Intern', date: 'Sep. 2025 - Dec. 2025', logo: '/images/rbc.png',
    bullets: [
      'Digital SRE Division',
      'Owned the end-to-end SDLC of a production RAG/GenAI inference Q&A pipeline serving 1000+ users, integrating Slack with LangChain + PostgreSQL and deploying via Docker and Kubernetes (OpenShift) CI/CD.',
      'Achieved 30% faster responses and 10%+ higher LLM answer accuracy and consistency through vector database tuning (indexing, connection pooling), prompt engineering, and retrieval optimization.',
      'Automated 2 daily data ingestion pipelines, integrating REST APIs & embeddings to populate vector databases.',
    ],
  },
  {
    id: 5, company: 'Dynamic Optimization Lab', title: 'Reinforcement Learning Engineer (Part-time)', date: 'Apr. 2025 - Dec. 2025', logo: '/images/uoft.png',
    bullets: [
      'Developed and published an OOP-based open-source package to PyPI with 10+ constrained, multi-objective environments for testing reinforcement learning models, to create a research paper on CMO-RL benchmarks.',
      'Improved model reward by 10%+ with performance logs via TensorFlow, TensorBoard to monitor training.',
    ],
  },
  {
    id: 6, company: 'Royal Bank of Canada', title: 'Data Scientist Intern (Machine Learning)', date: 'Jan. 2025 - Aug. 2025', logo: '/images/rbc.png',
    bullets: [
      'Security Insights & AI Division',
      'Engineered and deployed a risk-classification ML pipeline processing millions of records daily with AWS, Airflow & Python, presenting impact to the Chief Security Officer & winning the RBC Intern Challenge (2×).',
      'Boosted accuracy by 10%+ by training, fine-tuning, and optimizing Transformer/LLM-based NLP models (BERT) with PyTorch and ML models with Scikit-Learn, XGBoost for security risk detection.',
      'Reduced runtime of ML and ETL workflows by 50%+ through leveraging MLOps strategies, distributed processing (Apache Spark, AWS S3/Glue/SageMaker, Hadoop) and inference strategies (Batch Transform).',
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
  id: number
  title: string
  category: string
  shortDesc: string
  fullDesc: string
  bullets: string[]
  skills: string[]
  github: string
  image?: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Hemgjord',
    category: '3D Room Generation & Editor',
    shortDesc: 'Upload photos, get a metrically accurate 3D reconstruction, and redesign with real furniture from your favorite catalogs.',
    fullDesc: 'A web-based interior design and visualization tool that reconstructs a metrically accurate 3D model of a real room using user-provided dimensions and wall photos. Users can experiment with design styles and place real, purchasable catalog furniture into the existing layout.',
    bullets: [
      'Led a team of 5 to build a full-stack 3D room design web app with TypeScript and deployed to GCP via a Canary CI/CD pipeline',
      'Designed an end-to-end async 3D rendering pipeline via a BullMQ job queue, webhook and Redis-driven completion/caching, stream-based uploads to Supabase, with a single API instance handling a ∼200–500 req/s',
    ],
    skills: ['TypeScript', 'Redis', 'BullMQ', 'GCP', 'Next.js', 'PostgreSQL', 'Prisma', 'OAuth'],
    github: 'https://github.com/joshuacris/hemgjord',
    image: '/images/hemgjord.png',
  },
  {
    id: 2,
    title: 'ML Network Intrusion',
    category: 'ML Benchmakring and Streaming',
    shortDesc: 'Training and benchmarking ML models in detectecting cyber attacks through network traffic.',
    fullDesc: 'This project compares four supervised models for binary network intrusion detection on the UNSW-NB15 dataset: Logistic Regression, Multi-Layer Perceptron (MLP), Random Forest, and XGBoost',
    bullets: [
      'Engineered a binary network intrusion processing and detection pipeline on 163K+ network flows (UNSW-NB15) and 58 features across four ML models (Logistic Regression, MLP, Random Forest, XGBoost)',
      'Improved attack detection F1 scores across all models through hyperparameter tuning and custom classification threshold sweeping (0.01–0.99), boosting XGBoost F1 by 6.2% and Random Forest by 9.0%',
    ],
    skills: ['Python', 'Scikit-Learn', 'Machine Learning'],
    github: 'https://github.com/joshuacris/ml-network-intrusion',
    image: '/images/ml-intrusion.png',
  },
  {
    id: 3,
    title: 'PromptPilot',
    category: 'GenAI Genesis 2025',
    shortDesc: 'Optimize how you use your LLMs through prompt engineering - without spending hours scratching your head on how.',
    fullDesc: 'PromptPilot is a Chrome Extension that allows you to input your LLM prompt, and it outputs an optimized prompt that is tailored to your needs. An example would be turning the input: "Explain object-oriented programming" into "Explain the core principles of object-oriented programming (OOP), including concepts like encapsulation, inheritance, polymorphism, and abstraction. Provide examples in Python to illustrate how these principles are implemented in code." - which provides a more thorough response from LLMs to help you learn better.',
    bullets: [
      'Led a team of 4 at a hackathon to build a Chrome extension and REST API that optimizes LLM prompts',
      'Integrated Cohere’s Command A LLM with TypeScript, React, & Flask to improve the clarity and specificity of user prompts using prompt-engineering techniques (few-shot, chain-of-thought) to maximize LLM use',
    ],
    skills: ['Python', 'Flask', 'React', 'TypeScript', 'Plasmo'],
    github: 'https://github.com/joshuacris/PromptPilot',
    image: '/images/promptpilot.png',
  },
  {
    id: 4,
    title: 'Curator\'s Companion',
    category: 'Data Management App on Android',
    shortDesc: 'A collection management app designed for the Toronto Asian Art Museum.',
    fullDesc: 'An Android app built for the Toronto Asian Art Museum to be able to manage 100+ of their art records, implementing CRUD operations, media storage and display, and displays updated in real-time.',
    bullets: [
      'Collaborated with a team of 4 to develop an app on Android Studio, using Agile methology, Jira, and Git',
      'Implemented an in-app data management system with Java, enabling users to add, delete, search, and export art records, photos, and videos on Firebase - storing, displaying, and updating 100+ records in real-time',
    ],
    skills: ['Java', 'Firebase', 'JUnit', 'Mockito', 'Android Studio'],
    github: 'https://github.com/joshuacris/CuratorsCompanion',
    image: '/images/taam.png'
  },
  {
    id: 5,
    title: 'Maternal Analytics & Monitoring Alliance (MAMA)',
    category: 'UTSC SDG Data Challenge 2025 Best Insights Winner',
    shortDesc: 'A dashboard containing key statistics to visualize the impact maternal and infant mortality.',
    fullDesc: 'A Tableau dashboard, EDA notebooks and a policy brief made for the 2025 UTSC SDG Data Challenge.',
    bullets: [
      'Utilized Pandas, Matplotlib to process and analyze 1000+ rows of data for the UN Sustainable Development Goal Data Challenge, summarizing insights into an interactive Tableau Dashboard with 6+ visualizations',
      'Won the Best Insights award in a team of 4 for the most creative and insightful visualizations and analysis',
    ],
    skills: ['Python', 'Tableau', 'Matplotlib', 'Pandas'],
    github: 'https://github.com/joshuacris/sdg-challenge-2025-MAMA',
    image: '/images/sdg.png',
  },
]


function App() {
  const [activePage, setActivePage] = useState<Page>('Home')
  const [openExp, setOpenExp] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null)

  const RESUME_URL = 'https://drive.google.com/file/d/10iduY0cXi9CkZNlV197-_UevDpnoaLSG/view?usp=sharing' // ← replace with your PDF URL

  const toggleExp = (id: number) =>
    setOpenExp(prev => (prev === id ? null : id))

  const handleNavClick = (page: Page) => {
    if (page === 'Resume') {
      window.open(RESUME_URL, '_blank', 'noreferrer')
    } else {
      setActivePage(page)
    }
  }

  return (
    <>
      <div id="status-menu">
        <div className="status-menu-container">
          <div className="status-menu">
            {PAGES.map((page) => (
              <button
                key={page}
                className={`status-button ${page.toLowerCase()}${activePage === page ? ' active' : ''}`}
                onClick={() => handleNavClick(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Home Page ── */}
      {activePage === 'Home' && (
        <>
          <section className="hero-section">
            <div className="hero-photos">
              <div className="hero-top-row">
                <img className="hero-main" src="/images/hero4.jpeg" alt="" />
                <img className="hero-main" src="/images/hero1.jpg" alt="" />
                <img className="hero-main" src="/images/hero2.jpeg" alt="" />
              </div>
              <img className="hero-bottom" src="/images/hero3.png" alt="" />
            </div>
            <div className="hero-text">
              <h1>Joshua Crisologo</h1>
              <p>Hi! I'm a Computer Science and Statistics (Machine Learning Stream) student at the University of Toronto graduating in 2027. I love to build ML/AI systems that scale. At RBC, I built a RAG pipeline set to serve 1000+ users and deployed a risk-classification ML pipeline processing millions of data daily.</p>
              <p>This summer, I am working as a Machine Learning Engineer Intern on Shopify's Search Relevance team. I'm really interested in building within the space between research and production: fine-tuning LLMs, optimizing inference, and shipping things that help others!</p>
              <p>Outside of building, I love dogs, sushi, playing badminton, and going to concerts. I also love travelling, having been to Japan twice!</p>
              <div className="hero-socials">
                <a href="https://github.com/joshuacris" aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/joshua-crisologo" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                <a href="https://devpost.com/joshuacris" aria-label="Devpost" target="_blank" rel="noreferrer"><SiDevpost /></a>
              </div>
            </div>
          </section>

          <section className="experience-section">
            <h2 className="section-header">Experience</h2>
            <div className="exp-list">
              {EXPERIENCES.map(exp => (
                <div key={exp.id} className="exp-entry">
                  <div
                    className="exp-row"
                    onClick={() => toggleExp(exp.id)}
                    role="button"
                    aria-expanded={openExp === exp.id}
                  >
                    <div className="exp-logo">
                      {exp.logo && <img src={exp.logo} alt={exp.company} />}
                    </div>
                    <div className="exp-info">
                      <span className="exp-company">{exp.company}</span>
                      <span className="exp-dot"> · </span>
                      <span className="exp-title">{exp.title}</span>
                    </div>
                    <div className="exp-right">
                      <span className="exp-date">{exp.date}</span>
                      <FaChevronDown
                        className={`exp-chevron${openExp === exp.id ? ' open' : ''}`}
                      />
                    </div>
                  </div>
                  {openExp === exp.id && exp.bullets && (
                    <div className="exp-details">
                      <ul className="modal-bullets">
                        {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* ── Projects Page ── */}
      {activePage === 'Projects' && (
        <section className="projects-section">
          <h2 className="section-header">Projects</h2>
          <div className="projects-grid">
            {PROJECTS.map(project => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="project-card-image">
                  {project.image
                    ? <img src={project.image} alt={project.title} />
                    : <div className="project-image-placeholder" />
                  }
                </div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-category">{project.category}</p>
                  <p className="project-card-desc">{project.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Blog Page ── */}
      {activePage === 'Blog' && !activeBlogPost && (
        <section className="blog-section">
          <h2 className="section-header">Blog</h2>
          <div className="blog-list">
            {BLOG_POSTS.map(post => (
              <div
                key={post.id}
                className="blog-card"
                onClick={() => setActiveBlogPost(post)}
              >
                <div className="blog-card-main">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-desc">{post.description}</p>
                  <div className="blog-card-tags">
                    {post.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
                  </div>
                </div>
                <span className="blog-card-date">{post.date}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Blog Full Post ── */}
      {activePage === 'Blog' && activeBlogPost && (
        <article className="blog-post-page">
          <button className="blog-back-btn" onClick={() => setActiveBlogPost(null)}>
            ← Back to Blog
          </button>
          <header className="blog-post-header">
            <h1 className="blog-post-title">{activeBlogPost.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">{activeBlogPost.date}</span>
              <div className="blog-card-tags">
                {activeBlogPost.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
              </div>
            </div>
          </header>
          <div className="blog-post-content">
            {activeBlogPost.sections.map((section, i) => {
              if (section.type === 'heading') {
                return <h2 key={i} className="blog-post-heading">{section.content}</h2>
              }
              if (section.type === 'list') {
                return (
                  <ul key={i} className="blog-post-list">
                    {section.content.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )
              }
              return <p key={i} className="blog-post-paragraph">{section.content}</p>
            })}
          </div>
        </article>
      )}

      <div id="list-container"><main /></div>

      {/* ── Project Modal ── */}
      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal" onClick={e => e.stopPropagation()}>
            <div className="modal-image">
              {selectedProject.image
                ? <img src={selectedProject.image} alt={selectedProject.title} />
                : <div className="project-image-placeholder" />
              }
            </div>
            <div className="modal-body">
              <div className="modal-header-row">
                <div>
                  <h2 className="modal-title">{selectedProject.title}</h2>
                  <p className="modal-category">{selectedProject.category}</p>
                </div>
                <div className="modal-actions">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="modal-github"
                  >
                    <FaGithub />
                  </a>
                  <button
                    className="modal-close"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Close"
                  >
                    ×
                  </button>
                </div>
              </div>
              <p className="modal-desc">{selectedProject.fullDesc}</p>
              <ul className="modal-bullets">
                {selectedProject.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <div className="modal-skills">
                {selectedProject.skills.map(s => (
                  <span key={s} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
