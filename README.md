# OZ Design Website

A modern, responsive web application for OZ Design - a professional design and development company with offices across Australia.

## 🌟 Overview

This is a full-stack web application showcasing OZ Design's services, portfolio, and contact information. The website features beautiful animations, modern UI/UX design, and a fully functional contact form system.

## 🚀 Live Demo

- **Frontend**: [Coming Soon]
- **Backend API**: [Coming Soon]

## 🎨 Features

### Frontend

- ✨ **Modern UI/UX**: Clean, professional design with purple gradient theme
- 🎭 **Smooth Animations**: Framer Motion powered transitions and parallax effects
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- 🎯 **Interactive Components**:
  - 3D flip service cards
  - Animated design principles tags
  - Glassmorphism navbar with scroll effects
  - Multi-column footer with social links
- 🌐 **Multi-Page Navigation**:
  - Home: Company overview and services
  - About: Company history and values
  - Contact: Multi-location information and contact form
  - Book Online: Service booking interface
  - FAQ: Comprehensive Q&A section

### Backend

- 📧 **Contact Form API**: Express.js powered email handling
- 🔐 **Secure**: Environment variable configuration
- 📨 **Email Integration**: Resend API for reliable email delivery
- 🚀 **Vercel Ready**: Configured for serverless deployment

## 🛠️ Technology Stack

### Frontend

- **Framework**: React 18.3.1
- **Routing**: React Router DOM 6.28.0
- **UI Library**: React Bootstrap 2.10.6
- **Animations**: Framer Motion 11.13.5
- **Styling**: CSS3 with custom designs
- **Build Tool**: Create React App

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js 4.21.2
- **Email Service**: Resend 4.0.1
- **Middleware**:
  - CORS for cross-origin requests
  - Body Parser for JSON handling
  - Express Validator for input validation

## 📦 Project Structure

```
oz-design/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   │   ├── OZLogo.png      # Company logo
│   │   └── index.html      # HTML template
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Header.js   # Navigation bar
│   │   │   ├── Footer.js   # Footer with locations
│   │   │   ├── ServiceCard.js      # 3D flip cards
│   │   │   └── DesignPrinciples.js # Tag grid
│   │   ├── pages/           # Page components
│   │   │   ├── Home.js
│   │   │   ├── About.js
│   │   │   ├── Contact.js
│   │   │   ├── BookOnline.js
│   │   │   └── FAQ.js
│   │   ├── assets/          # Images and resources
│   │   ├── App.js           # Main app component
│   │   └── index.js         # Entry point
│   └── package.json
├── backend/                  # Express backend API
│   ├── api/
│   │   └── contact.js       # Contact form handler
│   ├── index.js             # Server entry point
│   ├── vercel.json          # Vercel configuration
│   └── package.json
├── .gitignore
└── README.md

```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/rrroy5640/oz-design.git
cd oz-design
```

2. **Install Frontend Dependencies**

```bash
cd frontend
npm install
```

3. **Install Backend Dependencies**

```bash
cd ../backend
npm install
```

4. **Configure Environment Variables**

Create a `.env` file in the `backend` directory:

```env
RESEND_API_KEY=your_resend_api_key_here
PORT=5000
```

### Running the Application

#### Development Mode

**Frontend** (runs on http://localhost:3000):

```bash
cd frontend
npm start
```

**Backend** (runs on http://localhost:5000):

```bash
cd backend
node index.js
```

#### Production Build

**Frontend**:

```bash
cd frontend
npm run build
```

The optimized production build will be in the `frontend/build` folder.

## 📍 Office Locations

OZ Design has offices in four major Australian cities:

- **Sydney**: Level 6, 8 Help Street, Chatswood NSW 2067
- **Melbourne**: Level 8, 699 Collins Street, Docklands VIC 3008
- **Brisbane**: Level 1, 7 Clunies Ross Court, Eight Miles Plains QLD 4113
- **Hobart**: Level 5, 24 Davey Street, Hobart TAS 7000

## 🎯 Key Features Showcase

### Design Principles

The home page features an interactive tag grid showcasing our core design principles:

- User-Centric Design
- Responsive Layouts
- Clean Code
- Performance Optimization
- Accessibility First
- And more...

### Service Cards

Interactive 3D flip cards displaying our services:

- **Branding**: Logo design, brand identity, style guides
- **Web Development**: Full-stack solutions, responsive design, SEO
- **Visual Communication**: Graphic design, marketing materials
- **Motion Design**: Animations, video editing, motion graphics

### Smooth Animations

- Parallax scrolling effects
- Fade-in animations on scroll
- Hover effects and transitions
- Glassmorphism navbar with backdrop blur
- Stagger children animations

## 🚢 Deployment

### Frontend (Vercel/Netlify)

**Vercel**:

```bash
cd frontend
npm run build
vercel --prod
```

**Netlify**:

```bash
cd frontend
npm run build
# Then drag the build folder to Netlify
```

### Backend (Vercel Serverless)

The backend is configured for Vercel serverless deployment with `vercel.json`:

```bash
cd backend
vercel --prod
```

## 🔧 Configuration

### API Endpoints

**Contact Form**:

- **Endpoint**: `POST /api/contact`
- **Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "0412345678",
  "subject": "Service Inquiry",
  "message": "Your message here"
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors

- **Primary Purple**: `#6A1B9A` to `#5C6BC0` (gradient)
- **Background**: `#0A0118` (dark) to `#FFFFFF` (light)
- **Accent**: Purple gradients throughout

### Typography

- **Headings**: System fonts with gradient effects
- **Body**: Clean, readable sans-serif
- **Sizes**: Fluid typography with `clamp()`

### Animations

- **Transition Duration**: 0.3s - 0.6s
- **Easing**: Custom cubic-bezier curves
- **Parallax**: Scroll-based transforms
- **Hover Effects**: Scale and shadow changes

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is proprietary and confidential. © 2025 OZ Design. All rights reserved.

## 📞 Contact

- **Website**: [Coming Soon]
- **Email**: [Contact through website form]
- **Phone**: [Multiple office locations]

## 🙏 Acknowledgments

- React Bootstrap for UI components
- Framer Motion for animations
- Resend for email services
- Create React App for project setup

---

Built with ❤️ by OZ Design Team
