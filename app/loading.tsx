export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-700 mx-auto mb-4"></div>
        <h2 className="text-2xl font-serif text-amber-700 mb-2">Oswal Alankar</h2>
        <p className="text-stone-600">Loading your jewellery experience...</p>
      </div>
    </div>
  )
} 