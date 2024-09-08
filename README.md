# LearnSync

## Description

**LearnSync** is a streamlined platform for improving the learning experience from various sources such as YouTube, locally downloaded videos, and other platforms. The application enables users to integrate popular note-taking services like Notion, Evernote, Google Keep, Microsoft OneNote, and GoodNotes, making learning distraction-free and efficient.

With **LearnSync**, you can take notes while watching videos and link those notes to specific timestamps, so they are automatically organized with the videos. Whether you're on the web, desktop, or mobile, this app provides a consistent learning environment across platforms. The application even offers collaborative learning sessions with friends, note synchronization, and AI assistance for enhanced note-taking.

## Key Features

- **Integrated Note-Taking:**
  - Take notes with timestamps linked to the current video/playlist.
  - Organize notes in sync with videos and playlists.
  - Integration with Notion, Evernote, Google Keep, Microsoft OneNote, GoodNotes, and Kindle.
- **Cross-Platform Support:**

  - **Website:** Learn from videos/playlists on the internet.
  - **Desktop Application:** Supports learning from both online and local video files.
  - **Mobile Application:** Learn from both online and local video files on the go.
  - **Browser Extension:** Add current videos/playlists to the application directly from your browser.

- **Collaborative Learning:**

  - Study with friends through real-time collaboration using **Socket.io** for real-time communication.
  - Free accounts allow collaboration for up to 1 hour and 30 minutes.
  - Premium accounts offer extended or unlimited collaboration depending on the plan.

- **AI-Powered Assistance:**

  - AI-driven note generation and suggestions based on your current video and notes.
  - Free access to AI chat for Premium users (AI key required for custom AI services).

- **Premium Plans:**
  - Sync your notes across multiple devices.
  - Unlock unlimited collaborative study sessions and premium AI features.
  - Manage all your notes in one place and sync with Amazon Kindle.

## Future Features

- **Enhanced Collaboration:**

  - Expand collaborative learning sessions with breakout rooms and shared whiteboards.
  - Integrate voice and video chat for enhanced interactive sessions.

- **Advanced AI Support:**

  - Real-time AI transcription for video content, allowing users to create notes from automatically generated transcripts.
  - AI-based video summarization to generate quick notes for each segment of a video.

- **Task and Goal Management:**

  - Add a learning schedule and reminders to track progress.
  - Sync tasks with other platforms such as Google Calendar or Todoist.

- **Gamification:**

  - Add a reward system for consistent learning sessions and collaboration with others.
  - Track learning milestones and achievements.

- **Offline Mode:**

  - Improve offline support for mobile and desktop applications to allow users to download content and access it when disconnected.

- **Browser Integration Enhancements:**
  - Allow for capturing notes directly from web pages and articles (beyond just video content).
  - Integrate with other learning platforms like Coursera, Udemy, etc., for seamless note-taking.

## Installation and Setup

### Prerequisites

- Node.js (for frontend development)
- Rust (for backend development)
- Cargo (Rust package manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/SOUMITRO-SAHA/learn-on-the-go.git
   cd learn-on-the-go
   ```

### Tech Stack

#### Frontend

- Next.js
- React.js
- TailwindCSS

#### Backend

- Rust
- Rocket framework

#### Real-Time Collaboration

- Socket.io

### Contribution

We welcome contributions from the community! Whether you're interested in adding new features, fixing bugs, or enhancing documentation, you're encouraged to collaborate.

### How to Contribute

Fork the repository.
Create a new branch (git checkout -b feature-name).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-name).
Create a pull request.
Feel free to open issues for discussion or ask for guidance on the direction of the project.

### License

This project is licensed under the MIT License.
