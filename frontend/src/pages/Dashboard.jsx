import { useTickets } from '../context/TicketContext'
import StatsCards from '../components/dashboard/StatsCards'
import TicketChart from '../components/dashboard/TicketChart'
import RecentTickets from '../components/dashboard/RecentTickets'
import PriorityDistribution from '../components/dashboard/PriorityDistribution'

const Dashboard = () => {
  const { tickets, loading } = useTickets()

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening with your IT services.</p>
      </div>

      {/* Stats Cards */}
      <StatsCards tickets={tickets} />

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TicketChart tickets={tickets} />
        <PriorityDistribution tickets={tickets} />
      </div>

      {/* Recent Tickets */}
      <RecentTickets tickets={tickets} />
    </div>
  )
}

export default Dashboard

