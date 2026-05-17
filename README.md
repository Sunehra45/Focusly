(Note : Deployed app link & app code will be updated the following week)
## Live Demo

🔗 Coming Soon

## Focuso
Focuso helps users track focus sessions, analyze productivity trends, and build consistent study habits.

https://github.com/user-attachments/assets/ee3452c2-b63a-4e2f-971b-5bb272c72569
## Responsive Design
<p align="center gap-8">
  <img width="200" hspace="2"  src="https://github.com/user-attachments/assets/e6f52520-9bca-494d-90b9-b13c456ce19e" />
 <img width="200" hspace="2" alt="image" src="https://github.com/user-attachments/assets/488826a5-c13a-43b5-90cf-d345db7e4477" />
  <img width="200" hspace="2"  src="https://github.com/user-attachments/assets/11d48e10-7bb0-4b7c-bf28-23c1d2a4b688" />
  <img width="200" hspace="2" src="https://github.com/user-attachments/assets/03a3849c-a406-442d-a0b7-f9695789088f" />
</p>

## Why I Built It
Focuso was inspired by my own struggle with maintaining consistent study routines and managing time effectively. I wanted to create a productivity platform that combines Pomodoro-based focus tracking with visual analytics to help users better understand and improve their learning habits.

## Features
- Customizable Pomodoro timer with focus, short break, and long break sessions
- Personalized user profile with overall productivity statistics and weekly activity tracking
- Interactive analytics dashboard for visualizing focus and break trends
- Real-time focus tracking to monitor daily productivity
- Productivity score system to measure consistency and study performance
- Session history tracking with completed Pomodoro records
- Dark mode inspired modern UI designed for distraction-free studying
- Responsive fullstack application optimized for desktop and mobile devices
- Secure authentication and protected routes
- REST API built with modular backend architecture

## Tech Stack

### Frontend
- ```React```
- ```Next.js```
- ```TypeScript```
- ```Tailwind CSS```
- ```Redux```

### Backend
- ```Node.js```
- ```Express```
- ``` MongoDB```

### Authentication
- ```JWT```

### Deployment
- ```Vercel```

 ## Project Structure

## Frontend Architecture
The frontend is built using a scalable App Router architecture with route-based organization, reusable type-safe components, and a clean separation of concerns to ensure maintainability and future scalability.

```bash
app/
├── analytics/
├── dashboard/
├── profile/
├── settings/
└── ...

components/
└── ui/
     └── reusable components 

utils/
└── helper functions and reusable utilities

types/
└── shared TypeScript interfaces and type definitions
```
## Backend Architecture
The backend follows a modular REST API architecture designed for scalability, maintainability, and clean separation of concerns.
```bash
src/
├── config/
│   └── Database and third-party service configuration
│
├── controllers/
│   └── Request handling and application business logic
│
├── models/
│   └── Scalable MongoDB schemas designed with Mongoose
│
├── routes/
│   └── API route definitions for authentication and user operations
│
├── services/
│   └── Reusable business logic and core application services
│
├── types/
│   └── Shared TypeScript interfaces and type definitions
│
└── utility/
    └── Reusable helper functions and utility modules
```

## Future Improvements
- Build a supporting Chrome extension to enable Pomodoro tracking and sync focus sessions with the main application.
- Improve session reliability by persisting timer state across navigation and refresh events
- Introduce streaks and long-term productivity tracking features to enhance user engagement
- Add automated testing using Jest and React Testing Library to improve code reliability and maintainability
- Implement CI/CD pipelines using GitHub Actions for automated testing and deployment workflows
- Containerize the application using Docker to improve development consistency and deployment portability

