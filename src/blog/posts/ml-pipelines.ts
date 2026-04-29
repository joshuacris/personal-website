import type { BlogPost } from '../index'

const post: BlogPost = {
  id: 1,
  title: 'What I Learned about Industry ML Pipelines',
  date: 'April 2026',
  description: 'What I learned about how industry ML pipelines work after my 8-month co-op at RBC.',
  tags: ['LLMs', 'Production', 'Machine Learning'],
  sections: [
    {
      type: 'paragraph',
      content: 'I completed my first work term of 8 months at the Royal Bank of Canada (RBC) as a Data Scientist Co-op. Within RBC, I worked under the Global Security Division in the Security Insights & AI team. Since I worked within Cybersecurity, the majority of the work is confidential — but on a high level, my role entailed improving the performance of a risk classification machine learning model and engineering and deploying an end-to-end ML pipeline for it to be used by stakeholders.',
    },
    { type: 'heading', content: 'The Pipeline' },
    {
      type: 'paragraph',
      content: 'The goal of my co-op was to orchestrate an end-to-end ML pipeline split into three distinct phases: data engineering and processing, model improvement and fine-tuning, and pipeline orchestration and deployment.',
    },
    { type: 'heading', content: 'Data Engineering' },
    {
      type: 'paragraph',
      content: 'The data engineering step is essential to clean and prepare all the data the ML model needs. It utilizes technologies such as Spark (a distributed processing tool for working with big data) and AWS (for data storage) to extract, transform, and load up to millions of records. The data I prepared included text and labelled data describing security risks.',
    },
    { type: 'heading', content: 'Model Experiments' },
    {
      type: 'paragraph',
      content: 'I spent the majority of my work term running experiments to improve the performance of the existing risk classification model. Here is how they progressed:',
    },
    {
      type: 'list',
      content: [
        'Experiment 1 — Fine-tuning an LLM to predict based solely on the new text data. This failed to produce an improvement over the baseline.',
        'Experiment 2 — Combining the existing model features with the new text data using another LLM and word embeddings (representing words as numbers). This outperformed Experiment 1 but still fell short of the existing model.',
        'Experiment 3 — Pivoted away from LLMs entirely, introducing a new ML model with new features built from the labelled data I processed. This finally resulted in a measurable accuracy improvement by building on top of the strengths of the existing model.',
      ],
    },
    { type: 'heading', content: 'Deployment' },
    {
      type: 'paragraph',
      content: 'The final phase of my work term was deploying the improved model into production so that the reports it generates could be used by stakeholders. I used Airflow to orchestrate and automate the ML pipeline, AWS for data storage, and Python for execution scripts and model training. After successful testing, the pipeline went live — marking a strong end to my first industry co-op.',
    },
    { type: 'heading', content: 'What I Took Away' },
    {
      type: 'paragraph',
      content: "Not every experiment works — and that's fine. The value of a structured experimentation process is that even failed attempts teach you something about the data and the problem. Experiment 3 only succeeded because Experiments 1 and 2 ruled out the approaches that didn't fit the data. In industry, iteration speed and good instrumentation matter as much as the model itself.",
    },
  ],
}

export default post
