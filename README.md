# Welcome to PollyGlot 🌎

## Project Overview

**PollyGlot** is a language translation app that leverages **OpenAI** for high-quality translations.  
The UI was initially built using **Lovable**, and I integrated the OpenAI API myself to handle the core translation logic as part of my **Scrimba AI Engineer Certification** assessment.

**Live URL**: [PollyGlot Project](https://lovable.dev/projects/7eceb861-6eea-40c6-86f9-ac0c404e9467)

---

## How to Edit and Work with the Code

You have several options for editing or contributing to PollyGlot:

### 1. Use Lovable
Head over to the [PollyGlot Project](https://lovable.dev/projects/7eceb861-6eea-40c6-86f9-ac0c404e9467) on Lovable and start prompting and editing visually.  
Changes made through Lovable will automatically be committed to the repository.

### 2. Work Locally (Your IDE)
Prefer coding in your own environment? Follow these steps:

```bash
# Step 1: Clone the repository using the project's Git URL
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd pollyglot

# Step 3: Install all project dependencies
npm install

# Step 4: Start the development server
npm run dev
```

### 3. Important: OpenAI API Key Setup

To successfully run PollyGlot locally, you must add your **OpenAI API key**.

- Open the `useOpenAI.ts` hook located in the project.
- Replace the placeholder or configure it to use your real OpenAI API key.

> Without a valid API key, translations will not work.

### 4. Edit Directly on GitHub
- Navigate to the file you want to change.
- Click the ✏️ **Edit** button.
- Make your changes and commit them.

### 5. Use GitHub Codespaces
- Go to your repository.
- Click the green **Code** button and select **Codespaces**.
- Create a new Codespace to launch a full dev environment in your browser.
- Edit, commit, and push directly from there.

---

## Tech Stack 🛠

PollyGlot is built with:

- **Vite** (Fast build tool)
- **React** (Frontend framework)
- **TypeScript** (Typed JavaScript)
- **shadcn-ui** (Beautiful UI components)
- **Tailwind CSS** (Utility-first styling)
- **OpenAI API** (Translation engine)

---

## Deployment

Publishing is simple!  
Just open the project on [Lovable](https://lovable.dev/projects/7eceb861-6eea-40c6-86f9-ac0c404e9467), then click **Share → Publish**.

---

## Custom Domain

You can connect PollyGlot to your own domain:

1. Open **Project → Settings → Domains** in Lovable.
2. Click **Connect Domain**.
3. Follow the steps [here](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide).

---

> Built with ❤️, curiosity, and a love for languages — PollyGlot bridges the world one translation at a time.
