## Ian Wende — Developer Portfolio (React + Vite)

A modern, responsive portfolio showcasing full‑stack (MERN) and cloud work. It highlights my projects, skills, certifications, and includes a contact form that can deliver real messages. Built for performance and clarity with React, Vite, Tailwind CSS, and Framer Motion.

### Live Site
- Deployed on Vercel (iancliff-portfolio.vercel.app).

### Features
- Responsive, accessible UI with dark/light theme
- Smooth animations and micro‑interactions (Framer Motion)
- Optimized scroll performance (content‑visibility, lazy‑loaded images)
- Project cards with tech tags, categories, and optional status badge (e.g., “In Progress”)
- Skills grouped by category with animated proficiency bars and highlight badges
- Certifications grid with external “Verify” links
- Contact form: posts to a provider via env var; graceful mailto fallback

### Tech Stack
- React 19 + Vite 7
- Tailwind CSS 4
- Framer Motion
- Lucide React, React Icons

---

## Project Structure
```
src/
  assets/images/              # Images used across the site
  components/
    Input/TextInput.jsx       # Reusable input component
    Navbar.jsx                # Top navigation (desktop + mobile)
    ProjectCard.jsx           # Project card with status & tags
    Sections/
      HeroSection.jsx         # Intro + roles + headline
      AboutSection.jsx        # Mission, passions, journey timeline
      SkillsSection.jsx       # Skills, tech stack, highlights
      ProjectsSection.jsx     # Projects grid
      CertificationsSection.jsx # Certifications grid
      ContactSection.jsx      # Contact form + contact info
      Footer.jsx              # Footer
  context/ThemeContext.jsx    # Theme state (light/dark)
  utils/
    data.js                   # Content data (projects, skills, certs, etc.)
    helper.js                 # Animation variants & helpers
```

---

## Content Overview

### Projects (selection)
- EdTech Platform — Full‑stack classroom behavior analytics
- Hosting a Static Website on Amazon S3 — Static hosting + policies
- Resume Checker — Python CLI (spaCy + PyPDF2) to extract skills from PDFs
- Cloud Security with AWS IAM — IAM users/groups/policies; EC2
- QuizQuest — Interactive quiz site (HTML/CSS/JS)
- Expense Tracker App — MERN tracker with JWT auth and charts — status: In Progress
- Visualizing Data using Amazon QuickSight — S3‑sourced dashboards & insights

### Skills & Highlights
- Frontend: React, Tailwind, Framer Motion
- Backend: Node.js, Express, Python, REST APIs
- Databases: MongoDB, MySQL, PostgreSQL, Firebase, Amazon S3
- DevOps/Cloud: AWS (EC2, S3, RDS, CloudFront, VPC), Docker, CI/CD
- Highlights: performance‑minded, cloud‑in‑progress (AWS), secure habits, human‑centered UI

### Certifications
- AWS Certified Cloud Practitioner (2025)
- Professional Foundations — ALX Africa (2024)
- AI Career Essentials — ALX Africa (2024)
- Web Development Bootcamp — eMobilis (2024)
- Software Development Scholarship — Power Learn Project (2025)
- See more in `src/utils/data.js`

---

## Contact Form
The contact form opens the user’s mail client prefilled to `iancliff15@gmail.com`, so messages reach me directly without any extra configuration.

---

## A Note from Ian
Thank you for visiting my portfolio. This site reflects my journey—learning in public, building with care, and staying curious. If something here sparks an idea or you’d like to collaborate, I’d love to hear from you.
