import { format } from 'date-fns'
import { useTickets } from '../../context/TicketContext'

const TicketRow = ({ ticket }) => {
  const { updateTicket } = useTickets()

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Critical':
        return 'bg-red-100 text-red-800'
      case 'High':
        return 'bg-orange-100 text-orange-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-blue-100 text-blue-800'
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800'
      case 'Resolved':
        return 'bg-green-100 text-green-800'
      case 'Closed':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4">
        <span className="font-mono text-sm font-medium text-primary-600">{ticket.id}</span>
      </td>
      <td className="py-4 px-4">
        <div>
          <p className="font-medium text-gray-900">{ticket.title}</p>
          <p className="text-sm text-gray-500 line-clamp-1">{ticket.description}</p>
        </div>
      </td>
      <td className="py-4 px-4">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
          {ticket.priority}
        </span>
      </td>
      <td className="py-4 px-4">
        <select
          value={ticket.status}
          onChange={(e) => updateTicket(ticket.id, { status: e.target.value })}
          className={`text-xs font-medium px-2.5 py-0.5 rounded-full border-0 ${getStatusColor(ticket.status)} cursor-pointer focus:ring-2 focus:ring-primary-500`}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Resolved">Resolved</option>
          <option value="Closed">Closed</option>
        </select>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-gray-700">{ticket.assignee}</span>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-gray-600">{ticket.category}</span>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm text-gray-600">
          {format(new Date(ticket.createdAt), 'MMM dd, yyyy')}
        </span>
      </td>
    </tr>
  )
}

export default TicketRow

