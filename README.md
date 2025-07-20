# Smart Goal Planner

A simple React application for tracking and managing financial savings goals.

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
- npm or yarn

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

4. Start the JSON server (for backend data)
```bash
npx json-server --watch db.json --port 3001
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
│   ├── Header.js
│   ├── Footer.js
│   ├── Overview.js
│   ├── AddGoalForm.js
│   ├── DepositForm.js
│   ├── GoalList.js
│   └── GoalCard.js
├── App.js
├── App.css
└── index.js
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## Technologies Used

- React 19.1.0
- Create React App
- JSON Server (for mock backend)
- CSS

## License

This project is private and all rights reserved.
