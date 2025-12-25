# CMDLine Command Generator

Generate command line commands for any operating system without any knowledge of the tool or framework. Simply select your OS, choose a category, pick an action, and get the exact command you need.

## Features

- **Multi-OS Support**: Generate commands for macOS, Linux, and Windows
- **12 Command Categories**:
  - File Operations
  - Directory Operations
  - System Information
  - Networking
  - Process Management
  - Package Management
  - Git Commands
  - Docker Commands
  - Permissions & Ownership
  - Search & Find
  - Compression & Archives
  - Text Processing
- **Auto OS Detection**: Automatically detects your operating system
- **Copy to Clipboard**: One-click copy for generated commands
- **Command Explanations**: Learn what each command does
- **Responsive Design**: Works on desktop and mobile devices
- **Quick Examples**: Common command examples for quick reference

## Live Demo

Visit the live website: [https://mantreshkhurana.github.io/cmdline-command-generator/](https://mantreshkhurana.github.io/cmdline-command-generator/)

## Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/mantreshkhurana/cmdline-command-generator.git
   ```

2. Open the website:

   ```bash
   cd cmdline-command-generator/website
   open index.html  # macOS
   # or
   xdg-open index.html  # Linux
   # or
   start index.html  # Windows
   ```

## Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `stable` branch.

### Manual Setup for GitHub Pages

1. Go to your repository Settings
2. Navigate to Pages section
3. Under "Build and deployment", select "GitHub Actions" as the source
4. Push changes to the `stable` branch
5. The website will be available at `https://<username>.github.io/cmdline-command-generator/`

## Project Structure

```text
cmdline-command-generator/
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Pages deployment workflow
├── website/
│   ├── index.html          # Main HTML file
│   ├── styles/
│   │   └── style.css       # Styling with CSS variables
│   ├── scripts/
│   │   ├── commands.js     # Command database
│   │   └── app.js          # Application logic
│   └── assets/
│       ├── macos.png       # macOS icon
│       ├── linux.png       # Linux icon
│       ├── windows.png     # Windows icon
│       └── bg.jpeg         # Background image
├── README.md
├── CHANGELOG.md
└── LICENSE
```

## Contributing

Contributions are welcome! You can contribute to this project by forking it and making a pull request.

After forking:

```bash
git clone https://github.com/<your-username>/x-toxicity-detection-flask.git
cd x-toxicity-detection-flask
git checkout -b <your-branch-name>
# after adding your changes
git add .
git commit -m "your commit message"
git push origin <your-branch-name>
```

## Author

- [Mantresh Khurana](https://github.com/mantreshkhurana)
