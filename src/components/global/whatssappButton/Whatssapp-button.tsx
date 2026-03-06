import { MessageCircle } from "lucide-react"

function WhatssappButton() {
  return (
    <div className='fixed bottom-5 right-5 z-50 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300'>
      <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
        <MessageCircle color="white"/>
      </a>
    </div>
  )
}

export default WhatssappButton