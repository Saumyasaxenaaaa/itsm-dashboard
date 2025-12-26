import { useTickets } from '../context/TicketContext'
import TicketChart from '../components/dashboard/TicketChart'
import PriorityDistribution from '../components/dashboard/PriorityDistribution'
import StatusBreakdown from '../components/dashboard/StatusBreakdown'

const Reports = () => {
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
        <h1 className="text-3xl font-bold text-gray-900">Reports & Analytics</h1>
        <p className="text-gray-600 mt-1">Comprehensive insights into your IT service management</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TicketChart tickets={tickets} />
        <PriorityDistribution tickets={tickets} />
      </div>

      <StatusBreakdown tickets={tickets} />
    </div>
  )
}

export default Reports

