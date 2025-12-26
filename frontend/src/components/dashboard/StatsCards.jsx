import { Ticket, AlertCircle, CheckCircle2, Clock } from 'lucide-react'
import { format } from 'date-fns'

const StatsCards = ({ tickets }) => {
  const totalTickets = tickets.length
  const openTickets = tickets.filter(t => t.status === 'Open').length
  const resolvedTickets = tickets.filter(t => t.status === 'Resolved' || t.status === 'Closed').length
  const inProgressTickets = tickets.filter(t => t.status === 'In Progress').length

  const stats = [
    {
      label: 'Total Tickets',
      value: totalTickets,
      icon: Ticket,
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-700',
    },
    {
      label: 'Open Tickets',
      value: openTickets,
      icon: AlertCircle,
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-700',
    },
    {
      label: 'In Progress',
      value: inProgressTickets,
      icon: Clock,
      color: 'bg-yellow-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-700',
    },
    {
      label: 'Resolved',
      value: resolvedTickets,
      icon: CheckCircle2,
      color: 'bg-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-700',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon
        return (
          <div key={stat.label} className="card hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <Icon className={`w-6 h-6 ${stat.textColor}`} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StatsCards

