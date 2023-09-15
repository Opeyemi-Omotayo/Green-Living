import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-[60vh]">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500"></div>
  </div>
  )
}

export default LoadingSpinner
