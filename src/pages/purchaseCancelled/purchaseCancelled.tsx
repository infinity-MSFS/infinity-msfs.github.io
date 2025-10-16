import { XCircle, Key, Calendar, Home } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface PurchaseCancelledProps {
  product_key?: string
  attempted_at?: string
}

export const PurchaseCancelled = ({
  product_key,
  attempted_at
}: PurchaseCancelledProps): JSX.Element => {
  const nav = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 text-white">
      <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-2xl p-8 text-center shadow-xl backdrop-blur-md">
        <XCircle className="w-16 h-16 mx-auto mb-4 text-red-400" />
        <h1 className="text-3xl font-bold mb-3">Purchase Cancelled</h1>
        <p className="text-white/60 mb-6">
          Your purchase was not completed. No charges have been made to your account.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-left mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Key className="w-5 h-5 text-blue-400" />
            Attempted Product Details
          </h2>

          <div className="space-y-3 text-sm">
            {product_key ? (
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-blue-400" />
                <span className="text-white/60">Product Key:</span>
                <code className="bg-black/30 px-2 py-1 rounded text-blue-300 font-mono">
                  {product_key}
                </code>
              </div>
            ) : (
              <p className="text-white/60 italic">Product key not available.</p>
            )}

            {attempted_at && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span className="text-white/60">Attempted on:</span>
                <span className="text-white">
                  {new Date(attempted_at).toLocaleDateString()}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => nav('/user')}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            <Home className="w-5 h-5" />
            Go to Dashboard
          </button>

          <button
            onClick={() => nav('/aircraft')}
            className="w-full flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Browse Products Again
          </button>
        </div>
      </div>
    </div>
  )
}

export default PurchaseCancelled
