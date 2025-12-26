import { createContext, useContext, useState, useEffect } from 'react'
import { mockTickets } from '../data/mockData'

const TicketContext = createContext()

export const useTickets = () => {
  const context = useContext(TicketContext)
  if (!context) {
    throw new Error('useTickets must be used within a TicketProvider')
  }
  return context
}

export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      setTickets(mockTickets)
      setLoading(false)
    }, 500)
  }, [])

  const addTicket = (newTicket) => {
    const ticket = {
      id: `TKT-${Date.now()}`,
      ...newTicket,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }
    setTickets([ticket, ...tickets])
    return ticket
  }

  const updateTicket = (id, updates) => {
    setTickets(tickets.map(ticket => 
      ticket.id === id 
        ? { ...ticket, ...updates, updatedAt: new Date().toISOString() }
        : ticket
    ))
  }

  const deleteTicket = (id) => {
    setTickets(tickets.filter(ticket => ticket.id !== id))
  }

  const value = {
    tickets,
    loading,
    addTicket,
    updateTicket,
    deleteTicket,
  }

  return (
    <TicketContext.Provider value={value}>
      {children}
    </TicketContext.Provider>
  )
}

