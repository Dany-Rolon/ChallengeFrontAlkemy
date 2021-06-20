export default function Alert({setShowingAlert, message}) {
    return (
        <div className={`w-full bg-${message.color}-500 p-2 mb-4 flex justify-between fixed top-0 left-0 mt-14`}>
            <h1 className="font-semibold">{message.message}</h1>
            {/* Este es el icono */}
            <button onClick={() => setShowingAlert(false)} className="border-2 border-black rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    )
}