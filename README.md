# STEP Exam Platform

A comprehensive web application for STEP exam preparation with practice tests, quizzes, analytics, and personalized feedback.

## Features

### 🏠 Core Pages
- **Home Page** - Introduction, key features, and quick navigation
- **Authentication** - Login, Sign Up, and Password Recovery
- **Dashboard** - Performance overview, recent tests, and recommendations
- **Exam Simulator** - Full-length mock exams with timer and question reporting
- **Practice Mode** - Free practice with instant feedback and gamification
- **Results & Analytics** - Detailed performance reports and insights
- **Profile** - User information, study streaks, and achievements
- **Admin Panel** - User management, question management, and system control

### 📊 Additional Pages
- **Pricing** - Subscription plans and payment options
- **Reports & Analytics** - Performance tracking and recommendations
- **Terms & Privacy** - Legal documentation
- **About Us** - Platform mission, team, and vision
- **Contact & Support** - Contact form, FAQ, and troubleshooting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: React Icons (Feather Icons)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
app/
├── api/              # API routes
│   ├── auth/        # Authentication endpoints
│   ├── questions/   # Question management
│   └── results/     # Results endpoints
├── about/           # About Us page
├── admin/           # Admin panel
├── analytics/       # Analytics page
├── contact/         # Contact & Support
├── dashboard/       # User dashboard
├── exam-simulator/  # Mock exam interface
├── login/          # Login page
├── signup/         # Sign up page
├── practice/       # Practice mode
├── pricing/        # Pricing page
├── profile/        # User profile
├── results/        # Results pages
├── terms/          # Terms of Service
├── privacy/       # Privacy Policy
└── layout.tsx     # Root layout

components/
├── Navbar.tsx     # Navigation component
└── Footer.tsx     # Footer component
```

## Key Features Implementation

### Exam Simulator
- Real-time countdown timer
- Section-based navigation (Listening, Reading, Grammar, Vocabulary)
- Question reporting functionality
- Pause/Resume capability
- Progress tracking

### Practice Mode
- Free practice with no timer
- Instant feedback on answers
- Gamification (points, streaks, badges)
- Multiple difficulty levels
- Category-based practice

### Analytics
- Performance trends over time
- Skills breakdown visualization
- Time spent analysis
- Weak areas identification
- Personalized recommendations

## API Routes

- `POST /api/auth/login` - User login
- `POST /api/auth/signup` - User registration
- `GET /api/questions` - Fetch questions
- `POST /api/questions` - Create new question
- `POST /api/results` - Submit exam results
- `GET /api/results` - Fetch user results

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Database (when implemented)
DATABASE_URL=

# Authentication (when implemented)
JWT_SECRET=
NEXTAUTH_SECRET=

# Payment (when implemented)
STRIPE_SECRET_KEY=
```

## Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] Authentication system (NextAuth.js)
- [ ] Payment integration (Stripe)
- [ ] Real-time notifications
- [ ] Mobile app
- [ ] Advanced analytics
- [ ] Social features
- [ ] Study groups

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@stepexam.com or visit our [Contact Page](/contact).

