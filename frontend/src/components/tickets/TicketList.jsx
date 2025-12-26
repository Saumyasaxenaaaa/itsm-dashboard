import TicketRow from './TicketRow'

const TicketList = ({ tickets }) => {
  if (tickets.length === 0) {
    return (
      <div className="card text-center py-12">
        <p className="text-gray-500 text-lg">No tickets found matching your filters.</p>
      </div>
    )
  }

  return (
    <div className="card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Ticket ID</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Title</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Priority</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Assignee</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket) => (
              <TicketRow key={ticket.id} ticket={ticket} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default TicketList

