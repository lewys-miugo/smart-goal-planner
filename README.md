# Smart Goal Planner

A simple React application for tracking and managing financial savings goals.

**[Live Demo](https://smart-goal-tracker.netlify.app/)**

## Features

- Add new savings goals with target amounts and deadlines
- Make deposits to existing goals
- Track progress with visual progress bars
- View overview statistics (total goals, total saved, completed goals)
- Get alerts for urgent goals (30 days or less) and overdue goals
- Edit and delete existing goals


## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone git@github.com:lewys-miugo/smart-goal-planner.git
cd smart-goal-planner
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Usage

1. **Add a Goal**: Fill out the "Add New Goal" form with name, target amount, category, and deadline
2. **Make Deposits**: Use the "Make a Deposit" form to add money to existing goals
3. **Track Progress**: View your goals in the main list with progress bars and completion status
4. **Edit Goals**: Click the "Edit" button on any goal card to modify details
5. **Delete Goals**: Click the "Delete" button to remove goals

## Project Structure

```
src/
├── components/
│   ├── Header.js          # App header with title and GitHub link
│   ├── Footer.js          # App footer with copyright
│   ├── Overview.js        # Statistics and alerts dashboard
│   ├── AddGoalForm.js     # Form to create new goals
│   ├── DepositForm.js     # Form to add money to goals
│   ├── GoalList.js        # Container for goal cards
│   └── GoalCard.js        # Individual goal display and editing
├── App.js                 # Main app component and state management
├── App.css               # Application styles
└── index.js              # React app entry point
```

## Available Scripts

- `npm start` - Runs the app in development mode.

## Technologies Used

- **React 19.1.0** - Frontend framework
- **Create React App** - Build tooling and development setup
- **CSS** - Styling and responsive design
- **Netlify** - Hosting and deployment

## Goal Categories

The app supports the following goal categories:
- Travel
- Emergency
- Electronics
- Real Estate
- Vehicle
- Education
- Shopping
- Retirement
- Home

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and all rights reserved.

## Contact

**Lewys Miugo** - [GitHub Profile](https://github.com/lewys-miugo)

Project Link: [https://github.com/lewys-miugo/smart-goal-planner](https://github.com/lewys-miugo/smart-goal-planner)

Live Demo: [https://smart-goal-tracker.netlify.app/](https://smart-goal-tracker.netlify.app/)
