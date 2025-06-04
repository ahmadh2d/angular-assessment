# Angular Devcontainer Setup

This project includes a devcontainer configuration for developing your Angular v19 application with Node.js 22.

## Getting Started

### Prerequisites
- Visual Studio Code
- Docker Desktop
- Dev Containers extension for VS Code

### Using the Devcontainer

1. **Open in Container**: 
   - Open the project in VS Code
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS)
   - Type "Dev Containers: Reopen in Container"
   - Select the command and wait for the container to build

### What's Included

- **Node.js 19**: Latest LTS version for optimal Angular v19 support
- **Angular CLI 19**: Pre-installed globally

### Development Commands

Once inside the container, you can use standard Angular CLI commands:

```bash
# Start development server (accessible at http://localhost:4200)
npm start

# Build the project
npm run build

# Run tests
npm test

# Generate new components/services/etc
ng generate component my-component
```

### Port Forwarding

The container automatically forwards port 4200 to your local machine, so you can access your Angular app at `http://localhost:4200` from your host browser.

### File Synchronization

Your source code is mounted as a volume, so changes you make in VS Code will be immediately reflected in the container and vice versa.

### Troubleshooting

- If you encounter permission issues, ensure Docker Desktop is running with appropriate permissions
- If the container fails to build, try rebuilding without cache: `Dev Containers: Rebuild Container`
- For performance issues on macOS/Windows, consider using the docker-compose setup which uses named volumes for node_modules 