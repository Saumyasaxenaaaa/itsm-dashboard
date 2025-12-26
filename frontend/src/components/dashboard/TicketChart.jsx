import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { format, subDays } from 'date-fns'

const TicketChart = ({ tickets }) => {
  // Generate data for the last 7 days
  const last7Days = Array.from({ length: 7 }, (_, i) => {
    const date = subDays(new Date(), 6 - i)
    const dateStr = format(date, 'yyyy-MM-dd')
    
    return {
      date: format(date, 'MMM dd'),
      fullDate: dateStr,
      Open: 0,
      'In Progress': 0,
      Resolved: 0,
    }
  })

  // Count tickets by date and status
  tickets.forEach(ticket => {
    const ticketDate = format(new Date(ticket.createdAt), 'yyyy-MM-dd')
    const dayData = last7Days.find(d => d.fullDate === ticketDate)
    if (dayData && ticket.status in dayData) {
      dayData[ticket.status]++
    }
  })

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ticket Trends (Last 7 Days)</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={last7Days}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Open" stroke="#f97316" strokeWidth={2} />
            <Line type="monotone" dataKey="In Progress" stroke="#eab308" strokeWidth={2} />
            <Line type="monotone" dataKey="Resolved" stroke="#22c55e" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default TicketChart

