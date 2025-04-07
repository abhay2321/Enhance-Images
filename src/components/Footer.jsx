import React from 'react'

const Footer = () => {
  return (
    <div className=" text-gray-900 py-6 text-center mt-auto">
      <div className="container mx-auto px-4">
      <p> Powered By Abhay Chaurasia </p>
        <div className="border-t border-gray-700 mt-1 pt-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} Enhance Image. All rights reserved.</p>
        </div>
      </div>
    </div>

    
  )
}

export default Footer
