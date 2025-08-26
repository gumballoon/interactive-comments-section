# Interactive Comments Section - Frontend Mentor

A fully interactive comments section built with React and Tailwind CSS, featuring CRUD operations and vote functionality.

## 🎯 Challenge Overview

This project is a Frontend Mentor Junior-level challenge focused on building a dynamic, interactive comments system. Users can create, read, update, and delete comments and replies, upvote/downvote content, and experience a fully responsive interface that adapts to different screen sizes.

## 💼 Portfolio Project

This project also serves as a portfolio demonstration showcasing:
- **Frontend Development**: Modern React development with hooks and state management
- **UI/UX Design**: Responsive design implementation and interactive user interfaces
- **Data Management**: CRUD operations with React state management
- **Component Architecture**: Modular component design and reusable UI elements
- **Styling**: Advanced Tailwind CSS usage with custom components and responsive design

## ✨ Features

- **Interactive Voting**: Upvote and downvote comments with real-time score updates
- **CRUD Operations**: 
  - Create new comments and replies
  - Read and display all comments in a nested structure
  - Edit existing comments with inline editing
  - Delete comments with confirmation modal
- **Reply System**: Nested replies with proper threading and user mention
- **Responsive Design**: Optimal layout across desktop, tablet, and mobile devices

## 🛠️ Built With

- **React 19** - Frontend library for building user interfaces
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **Vite** - Next generation frontend tooling for development and build
- **ESLint** - Code linting and quality assurance

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository and navigate to the project directory
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser to `http://localhost:5173`

## 📁 Project Structure

```
├── index.html           # Main HTML entry point
├── src/
│   ├── App.jsx          # Main application component
│   ├── Comments.jsx     # Comments container component
│   ├── CommentItem.jsx  # Individual comment display
│   ├── CommentSection.jsx # Comment list and form wrapper
│   ├── CommentNewForm.jsx # New comment creation form
│   ├── CommentEditForm.jsx # Comment editing form
│   ├── CommentScore.jsx # Vote component
│   ├── CommentReplyButton.jsx # Reply functionality
│   ├── CommentEditButton.jsx # Edit functionality
│   ├── CommentModal.jsx # Delete confirmation modal
│   ├── main.jsx         # React application entry point
│   └── index.css        # Global styles and Tailwind imports
├── data.json            # Initial comments data
├── images/              # Avatar images and icons
└── package.json         # Project dependencies and scripts
```

## 🎨 Design Features

- **Modern UI**: Clean, card-based design with subtle shadows and borders
- **Interactive Elements**: Hover states for all clickable components
- **Responsive Typography**: Fluid text sizing across different screen sizes
- **Avatar Integration**: User avatars with proper fallbacks and consistent sizing

## 🔧 Functionality

### Core Features Implemented:

- ✅ Create new comments and replies
- ✅ Read and display all comments in nested format
- ✅ Update existing comments with inline editing
- ✅ Delete comments with confirmation modal
- ✅ Upvote and downvote comments with score tracking
- ✅ Responsive design for all device sizes

### User Actions:

1. **Add Comment**: Users can create new top-level comments
2. **Reply to Comment**: Users can reply to any comment, creating nested discussions
3. **Edit Comment**: Users can edit their own comments inline
4. **Delete Comment**: Users can delete their comments with confirmation
5. **Vote on Comments**: Users can upvote or downvote any comment

## 💡 Key Implementation Details

- **State Management**: React hooks for managing comments, user interactions, and UI state
- **Component Composition**: Modular components for reusability and maintainability
- **Responsive Design**: Mobile-first approach with Tailwind CSS responsive utilities

## 🌟 Future Enhancements

- User authentication and profiles
- LocalStorage data persistence across browser sessions
- Comment threading with deeper nesting levels
- Rich text editing with markdown support
- Search and filtering functionality

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for educational purposes as part of the Frontend Mentor challenge.

## Author

- GitHub - [@gumballoon](https://github.com/gumballoon)
- Frontend Mentor - [@gumballoon](https://www.frontendmentor.io/profile/gumballoon)
- CSS Battle - [@gumballoon](https://cssbattle.dev/player/gumballoon)

## 🙏 Acknowledgments

- Frontend Mentor for the design and challenge
- Design assets and requirements provided by Frontend Mentor
- React team for the powerful frontend framework
- Tailwind CSS team for the excellent utility-first framework

---

**Frontend Mentor Challenge**: [Interactive Comments Section](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9)