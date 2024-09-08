# LearnSync: Application

It offers a centralized codebase that powers its web, desktop, and mobile versions, ensuring a consistent user experience across platforms.

## Getting Started

### Prerequisites

- Node.js (version 16 or later) and npm (bundled with Node.js) installed: `https://nodejs.org/en`
- Rust (version 1.60 or later) and Cargo (Rust package manager) installed: `https://www.rust-lang.org/tools/install`

## Development Server

### Start Desktop Application

```sh
cargo tauri dev
# or
cargo tauri dev --platform linux # windows, macos, linux
```

### Build Desktop Application

```sh
cargo tauri build
```
