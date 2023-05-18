import React from 'react'

const ErrorInform = ({ title, message }: { title: string, message: string }) => {
    return (
        <div className="p-4 w-full bg-red-100 text-red-800 rounded">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p>{message}</p>
        </div>
    )
}

export default ErrorInform