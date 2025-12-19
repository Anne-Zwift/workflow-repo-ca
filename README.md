# 💫 Workflow Repository

This project is part of a workflow course assignment.  
The objective is to apply workflow tools and testing strategies to improve code quality, reliability, and development efficiency in a vanilla JavaScript project.

The project focuses on linting, formatting, automated testing, and Git workflows.

## ℹ️ Overview

The project repository is forked from the official
[Noroff workflow repository](https://github.com/NoroffFEU/workflow-repo),
which provides the initial project structure and base files.

## 🖥️ Tech Stack

### Language:

- Vanilla JavaScript

### Frameworks & Libraries:

- **Vitest** - Unit testing
- **Playwright** - End-to-end (E2E) testing
- **ESLint** – Code quality and linting
- **Prettier** – Code formatting
- **Husky** – Pre-commit hooks

### Out of Scope:

- No front-end frameworks (React, Vue, Angular)
- No build tools or bundlers

### ✍️ Author

I'm a Front-End Development student,
[@Anne-Zwift](https://github.com/Anne-Zwift/).
This repository is my [project](https://github.com/Anne-Zwift/workflow-repo-ca) focusing on automated testing and Git workflows.

## 💻 Getting Started

Follow these steps to run the project locally:

### Clone the repository

```bash
# Clone the repository
git clone [YOUR-REPO-URL]

# Navigate to the project folder
cd workflow-repo-ca

```

### Install dependencies

Install all required dependencies, including ESLint, Prettier, Husky:

```bash
npm install
```

## ▶️ Running the project

```bash
npm run start

```

This uses `live-server` and serves the project on `'http://localhost:5500'`.

#### 🛠️ Troubleshooting: Port 5500 already in use

If you see the following message:
`http://0.0.0.0:5500 is already in use. Trying another port.`
This means another process is already using port `5500` (commonly the VS Code Live Server extension).

Solution:

- Stop any running local servers
- Disable or stop the VS Code Live Server extension
- Restart the project using:
  `npm run start`
  The application will then run on `http://localhost:5500`.

## 🧪 Testing

### Unit Tests (Vitest)

Run unit tests with:

```bash
npm run test:unit
```

Vitest is used to test individual functions and logic in isolation.

### End-to-End Tests (Playwright)

Run E2E tests with:

```bash
npm run test:e2e
```

Playwright tests simulate real user interactions in the browser, such as:

- Navigation
- Authentication
- Venue listing
- Venue details pages

## 🔐 Environment Variables

- Sensitive data is stored in a `.env` file, which is ignored by Git.
- An `.env.example` file is included to document required environment variables.

**Note:**
The API base url is hardcoded in config.js.
Environment variables are used for **test credentials only**.

Example:

```bash

BASE_URL=

TEST_USER_EMAIL=
TEST_USER_PASSWORD=
```

## 💭 Feedback and Contributing

#### 🎓 This project for educational purpose only.
