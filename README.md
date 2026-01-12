# Pulso – Personal Productivity Dashboard

Pulso is a scalable personal productivity dashboard built with React.
It helps users track tasks, mood, and habits, while providing data-driven insights.

Pulso is designed as a long-term project, evolving from a simple dashboard into a full-featured personal LifeOS.

## Features (Planned & Current)

**Phase 1 – Core**
Focus: building the foundation of the app

- Main dashboard layout with a header and content area
- Task management: add tasks, mark them as complete, and delete them
- Reusable modal component for forms and confirmations
- Light and dark theme toggle
- Clean, reusable UI components (TaskList, TaskItem, Modal, ThemeSwitcher)

**Phase 2 – Growth**
Focus: adding usefulness and flexibility

- Habit tracking to monitor daily routines
- Edit tasks and habits directly from the dashboard
- Persistent storage using localStorage
- Dashboard widgets that users can add, remove, or rearrange

**Phase 3 – Advanced**
Focus: polish, performance, and scale

- Drag-and-drop dashboard layout
- Interactive charts that show insights from user data
- Animations and micro-interactions using Framer Motion
- Centralized state management with Context API and reducers

## Folder Structure (Phase 1)

pulso/
├── public/
│ └── index.html
│
├── src/
│ ├── assets/
│ │ └── (images, icons, fonts)
│ │
│ ├── components/
│ │ ├── TaskList/
│ │ ├── TaskItem/
│ │ ├── Modal/
│ │ ├── Button.jsx
│ │ └── ThemeSwitcher.jsx
│ │
│ ├── pages/
│ │ └── Dashboard.jsx
│ │
│ ├── hooks/
│ │ └── (custom React hooks)
│ │
│ ├── utils/
│ │ └── (helper functions)
│ │
│ ├── App.jsx
│ └── index.js
│
├── package.json
└── README.md

> The folder structure is **modular** to allow growth into a full-featured productivity system.

## ⚡ Installation

1. Clone the repo:  
   git clone https://github.com/yourusername/pulso-dashboard.git

2. install dependencies:
   npm install

3. start the development server:
   npm start

The app should open at http://localhost:3000

# Usage

- Add tasks via the Add Task button
- Mark tasks as complete by clicking on them
- Delete tasks with the delete button
- Toggle light/dark mode with the Theme Switcher
- Dashboard and features will expand as new modules are added

# Why Pulso?

Pulso isn’t just another todo app. It’s a personal system dashboard designed for:

- Self-awareness: Track patterns in tasks, habits, and mood
- Productivity: Optimize daily routines
- Portfolio impact: Showcase a scalable, modern React projec

# Author

Nnaukwu Martins Obinna – Aspiring Frontend Developer

# My flow chart

1. Entry flow

```
App Component Structure

   App
   └── Dashboard
      ├── TaskInput
      ├── Filter Buttons
      └── TaskList
         └── TaskItem (multiple)
```

Component Overview

- App: Root component of the application
- Dashboard: The controller and dosen't manage logic directly
- TaskInput: Handles adding new tasks and sends the entered value to the parent (i.e dashboard)
- Filter Buttons: Filters buttons to filter tasks
- TaskList: Renders the list of tasks
- TaskItem: Blueprint of a single taskItem (rendered multiple times)

2. CUSTOM HOOK FLOW (useTasks which owns the source of truth)

```
   useTasks()
   ├── useState(taskArr)
   ├── Derived State
   │     ├── totalTasks
   │     ├── completedTaskCount
   │     └── activeTaskCount
   │
   ├── handleAddTask()
   ├── handleToggleTask()
   └── handleRemoveTask()
```

3. Task creation flow

```
   User types text
         ↓
   Global keydown listener
         ↓
   TaskInput focuses input (useRef)
         ↓
   User presses Enter or clicks Add
         ↓
   submitTaskHandler()
         ↓
   Text normalization
         ↓
   onAddTask(formattedText)
         ↓
   handleAddTask() in useTasks
         ↓
   setTaskArr(prev => [...prev, newTask])
         ↓
   React re-renders
```

4. Responsibility

```
   TaskInput
   - Handles input
   - Keyboard UX
   - Accessibility
   - No state

   TaskItem
   - Displays ONE task
   - Handles clicks
   - No logic

   TaskList
   - Maps tasks
   - Conditional rendering
   - No state

   Dashboard
   - Coordinates components
   - Holds filter state
   - Consumes hook

   useTasks
   - Owns data
   - Owns logic
   - Exposes clean API
```
