import { MessageCircle } from "lucide-react"

function WhatssappButton() {
  return (
      <a 
      href="https://wa.me/1234567890" 
      target="_blank" 
      rel="noopener noreferrer"  
      aria-label="Order via WhatsApp"
      className='fixed bottom-5 right-5 z-50 bg-green-500 p-4 rounded-full
                 shadow-lg hover:bg-green-600 transition-colors duration-300'
      >
        <MessageCircle color="white"/>
      </a>
  )
}

export default WhatssappButton