# Marriott Digital Analyst Interview Prep App

A React-based flashcard application designed to help prepare for Marriott Digital Services (MDS) interview questions using the STAR method.

## Features

- **Interactive Flashcards**: 25 interview questions with detailed STAR responses
- **3D Card Flip Animation**: Smooth flip animation to reveal answers
- **Progress Tracking**: Visual progress bar showing completion status
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interview Details**: Shows interview date, time, location, and number of interviewers
- **Tips Section**: Key MDS-relevant skills and interview reminders

## Technology Stack

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **CSS3** - Custom animations and 3D transforms

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm run dev
```

The application will open automatically in your default browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## How to Use

1. **Navigate Cards**: Use the "Previous" and "Next" buttons to move between questions
2. **Flip Cards**: Click on any card to flip it and reveal the STAR answer
3. **Track Progress**: The progress bar shows how many cards you've reviewed
4. **Reset Progress**: Use the "Reset" button to start over
5. **Review Tips**: Check the tips section at the bottom for key interview reminders

## STAR Method Structure

Each flashcard answer follows the STAR method:

- **Situation**: Context and background of the scenario
- **Task**: Specific responsibilities and objectives
- **Action**: Steps taken to address the situation
- **Result**: Outcomes and measurable achievements

## Interview Questions Covered

The app includes 25 comprehensive questions covering:

- Budget management and accountability
- Technology integration and platform management
- Team training and process improvement
- Client relationship management
- Data analysis and problem-solving
- Stakeholder coordination
- Conflict resolution
- Technical problem-solving
- Project ownership and success measurement
- Quality assurance and accuracy
- Process optimization
- Initiative and going above expectations
- Working under pressure
- Learning new technologies
- Communication and presentation skills
- Attention to detail
- Adaptability and change management
- Decision-making with incomplete information
- Influence without authority

## Customization

To customize the application:

1. **Add/Remove Questions**: Edit the `flashcards` array in `src/components/InterviewPrepApp.jsx`
2. **Update Interview Details**: Modify the interview information in the header section
3. **Change Styling**: Update Tailwind classes or modify `src/index.css`
4. **Add Features**: Extend the component with additional functionality

## Browser Support

The application uses modern CSS features including:
- CSS Grid and Flexbox
- CSS Transforms and 3D animations
- CSS Custom Properties

Supported browsers:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## License

This project is for educational and interview preparation purposes.

## Contributing

Feel free to submit issues, feature requests, or pull requests to improve the application.