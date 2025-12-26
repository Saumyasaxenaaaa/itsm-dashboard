# AI-Powered IT Service Management (ITSM) Dashboard

A comprehensive IT Service Management dashboard built with React.js and Tailwind CSS, designed to replicate enterprise-grade platforms like ServiceNow or Jira Service Management.

## 📁 Project Structure

```
ITSM/
├── frontend/          # React.js frontend application
│   ├── src/          # Source code
│   ├── package.json  # Frontend dependencies
│   └── vite.config.js
├── backend/          # Express.js backend API (to be developed)
│   ├── server.js    # Main server file
│   └── package.json # Backend dependencies
└── README.md         # This file
```

## 🚀 Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **React Hook Form** - Form management and validation
- **Recharts** - Chart library for analytics
- **Lucide React** - Icon library
- **date-fns** - Date formatting utilities

### Backend (Planned)
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing

## ✨ Features

### ✅ Implemented
- **Dashboard Layout**
  - Responsive sidebar navigation
  - Top navigation bar with search
  - Profile section
  
- **Ticket Management**
  - View all tickets in a table format
  - Filter by status and priority
  - Sort by date or priority
  - Interactive ticket status updates
  - Ticket creation modal with form validation
  
- **Analytics Widgets**
  - Summary cards (Total, Open, In Progress, Resolved)
  - Ticket trends chart (Line chart)
  - Priority distribution (Pie chart)
  - Status breakdown (Bar chart)
  
- **Responsive Design**
  - Mobile-friendly layout
  - Tablet and desktop optimized
  - Collapsible sidebar for mobile

### 🔄 To Be Implemented (Backend Integration)
- RESTful API endpoints
- Database integration
- Authentication & authorization
- Real-time updates
- File uploads for tickets

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```
**This is where you access the ITSM Dashboard UI.**

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```
PORT=5000
```

4. Start the development server:
```bash
npm run dev
```

The backend API will be available at:
```
http://localhost:5000          # Root endpoint (API info)
http://localhost:5000/api/health  # Health check endpoint
```
**Note: This is the API server. The frontend dashboard runs on port 3000.**

## 📖 Usage

### Dashboard
- View overall statistics and ticket trends
- Monitor ticket status distribution
- Quick access to recent tickets

### Tickets Page
- **View Tickets**: Browse all tickets in a table format
- **Filter**: Use the filter dropdowns to filter by status or priority
- **Sort**: Sort tickets by date (newest/oldest) or priority
- **Create Ticket**: Click the "+ Add Ticket" button to create a new ticket
- **Update Status**: Click on the status badge in any ticket row to update it

### Reports Page
- View comprehensive analytics and charts
- Analyze ticket trends over time
- Monitor priority and status distributions

### Settings Page
- Manage account preferences
- Configure notification settings

## 🎨 UI Components

### Layout Components
- `DashboardLayout` - Main layout wrapper
- `Sidebar` - Navigation sidebar
- `TopNav` - Top navigation bar

### Dashboard Components
- `StatsCards` - Summary statistics cards
- `TicketChart` - Line chart for ticket trends
- `PriorityDistribution` - Pie chart for priority breakdown
- `StatusBreakdown` - Bar chart for status analysis
- `RecentTickets` - Table of recent tickets

### Ticket Components
- `TicketList` - Main ticket listing table
- `TicketRow` - Individual ticket row component
- `TicketModal` - Modal for creating new tickets

## 📝 API Documentation

### Frontend API (Mock Data)
Currently using mock data stored in `frontend/src/data/mockData.js`. The frontend is ready for backend integration.

### Backend API (To Be Developed)
The backend structure is set up. API endpoints will be documented here once implemented.

**Planned Endpoints:**
- `GET /api/tickets` - Get all tickets
- `GET /api/tickets/:id` - Get a specific ticket
- `POST /api/tickets` - Create a new ticket
- `PUT /api/tickets/:id` - Update a ticket
- `DELETE /api/tickets/:id` - Delete a ticket

## 🔧 Development

### Frontend Development
```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Development
```bash
cd backend
npm run dev      # Start with nodemon (auto-reload)
npm start        # Start production server
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md, lg)
- **Desktop**: > 1024px (xl)

## 🎯 Learning Objectives

This project demonstrates:
- Professional React component architecture
- Enterprise-grade UI/UX design patterns
- Responsive design with Tailwind CSS
- Form handling and validation
- State management with React Context
- Data visualization with charts
- Mock data management
- Preparation for backend integration

## 🤝 Contributing

This is a learning project. Feel free to:
- Add new features
- Improve existing components
- Enhance the UI/UX
- Implement backend integration
- Add tests

## 📄 License

This project is created for educational purposes.

## 👥 Team Members

[Add your team members here if this is a group project]

---

**Note**: This is the frontend prototype. Backend integration will be implemented in the next milestone.
