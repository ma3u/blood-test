# Contributing to Blood Test Oracle

Thank you for your interest in contributing to the Blood Test Oracle project! We welcome contributions of all kinds, including bug reports, feature requests, documentation improvements, and code contributions.

## How to Contribute

### 1. Fork the Repository
- Click the "Fork" button at the top right of this repository's GitHub page.
- Clone your fork to your local machine:
  ```sh
  git clone https://github.com/<your-username>/blood-test.git
  ```

### 2. Set Up Your Development Environment
- Install dependencies:
  ```sh
  npm install
  ```
- Copy `.env.example` to `.env` and update the variables as needed.
- Start the development server:
  ```sh
  npm run dev
  ```

### 3. Make Your Changes
- Follow the code style enforced by `.eslintrc.json`, `.prettierrc`, and `.editorconfig`.
- Keep functions concise and avoid files over 200-300 lines.
- Avoid duplicating code and introducing new patterns unless necessary.
- Write or update tests for new features or bug fixes.

### 4. Commit and Push
- Create a new branch for your changes:
  ```sh
  git checkout -b my-feature-branch
  ```
- Commit your changes with a clear message:
  ```sh
  git commit -m "Add feature/fix bug/update docs: <short description>"
  ```
- Push to your fork:
  ```sh
  git push origin my-feature-branch
  ```

### 5. Open a Pull Request
- Go to the original repository on GitHub.
- Click "Compare & pull request" for your branch.
- Fill out the pull request template and describe your changes.

## Guidelines
- **Respect existing code patterns.** Iterate on existing code where possible.
- **No mock/stub data in dev/prod.** Only use mocks for tests.
- **Test your changes.** Ensure the dev environment runs and passes tests before submitting.
- **Document your changes.** Update documentation and the decision log as needed.
- **Link related issues.** Reference any relevant issues or decisions in your pull request.

## Reporting Bugs or Suggesting Features
- Use GitHub Issues to report bugs or request features.
- Provide as much detail as possible, including steps to reproduce, screenshots, and environment details.

## Code of Conduct
Please be respectful and constructive in all interactions. See `CODE_OF_CONDUCT.md` for details.

---
Thank you for helping improve Blood Test Oracle!
