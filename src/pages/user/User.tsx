import { useEffect, useState } from 'react'
import { useAuth } from "../../util/AuthContext"
import { Download, Key, Calendar, AlertCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

interface ProductData {
  product_key: string
  purchased_at: string
}

export const UserDashboard = (): JSX.Element => {
  const { user, isAuthenticated, isLoading, getAccessToken } = useAuth()
  const [productData, setProductData] = useState<ProductData | null>(null)
  const [fetchLoading, setFetchLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const nav = useNavigate()

  useEffect(() => {
			const fetchProductKey = async () => {
				if (!isAuthenticated || !user) {
					setFetchLoading(false);
					return;
				}

				try {
					const access_token = await getAccessToken();

					const response = await fetch(
						"https://userbackend-polished-morning-9484.fly.dev/api/user/products",
						{
							headers: {
								Authorization: `Bearer ${access_token}`,
							},
						},
					);

					if (response.ok) {
						const data = await response.json();
						if (data.product_key == null) {
							setProductData(null);
						} else {
							setProductData(data);
						}
					}
				} catch (err) {
					console.error("Failed to fetch product data:", err);
					setError("Unable to load your product information");
				} finally {
					setFetchLoading(false);
				}
			};

			fetchProductKey();
		}, [isAuthenticated, user, getAccessToken]);

  if (isLoading || fetchLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-white/60">Loading your account...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white/5 border border-white/10 rounded-xl p-8 text-center">
          <AlertCircle className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-2xl font-bold mb-2 text-white">Login Required</h2>
          <p className="text-white/60 mb-6">
            Please log in to view your account dashboard and purchased products.
          </p>
        </div>
      </div>
    )
  }

  return (
			<div className="min-h-screen text-white px-4 py-12">
				<div className="max-w-4xl mx-auto">
					{/* User Profile Section */}
					<div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
						<h1 className="text-3xl font-bold mb-6">Account Dashboard</h1>

						<div className="flex items-center gap-4 mb-6">
							{user?.picture && (
								<img
									src={user.picture}
									alt={user.name || "User"}
									className="w-16 h-16 rounded-full"
								/>
							)}
							<div>
								<h2 className="text-xl font-semibold">{user?.name}</h2>
								<p className="text-white/60">{user?.email}</p>
							</div>
						</div>
					</div>

					{/* Products Section */}
					<div className="bg-white/5 border border-white/10 rounded-xl p-8">
						<h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
							<Key className="w-6 h-6" />
							Your Products
						</h2>

						{error && (
							<div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
								<p className="text-red-200">{error}</p>
							</div>
						)}

						{!productData ? (
							<div className="text-center py-12">
								<div className="bg-white/5 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
									<Key className="w-10 h-10 text-white/40" />
								</div>
								<h3 className="text-xl font-semibold mb-2">No Products Yet</h3>
								<p className="text-white/60 mb-6">
									You haven't purchased any products. Browse our store to get
									started!
								</p>
								{/** biome-ignore lint/a11y/noStaticElementInteractions: needed */}
								{/** biome-ignore lint/a11y/useKeyWithClickEvents: not needed*/}
								{/** <div
									onClick={() => nav("/aircraft")}
									className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
								>
									Browse Products
								</div> */}
							</div>
						) : (
							<div className="space-y-4">
								{/* T-38C Product Card */}
								<div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
									<div className="flex items-start justify-between mb-4">
										<div>
											<h3 className="text-xl font-semibold mb-1">
												T-38C Talon
											</h3>
											<p className="text-white/60 text-sm">
												Microsoft Flight Simulator 2024
											</p>
										</div>
										<span className="bg-green-900/30 text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
											Owned
										</span>
									</div>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
										<div className="flex items-center gap-2 text-sm">
											<Key className="w-4 h-4 text-blue-400" />
											<span className="text-white/60">Product Key:</span>
											<code className="bg-black/30 px-2 py-1 rounded text-blue-300 font-mono">
												{productData.product_key}
											</code>
										</div>

										{productData.purchased_at && (
											<div className="flex items-center gap-2 text-sm">
												<Calendar className="w-4 h-4 text-purple-400" />
												<span className="text-white/60">Purchased:</span>
												<span className="text-white">
													{new Date(
														productData.purchased_at,
													).toLocaleDateString()}
												</span>
											</div>
										)}
									</div>

									<div className="flex gap-3">
										<button
											type="button"
											className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
										>
											<Download className="w-4 h-4" />
											Download
										</button>
										<button
											type="button"
											className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm"
										>
											<Download className="w-4 h-4" />
											Download Data Cartridge companion
										</button>
										<button
											type="button"
											className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm"
										>
											View Manual
										</button>
									</div>
								</div>

								{/* Installation Instructions */}
								<div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-6">
									<h4 className="font-semibold mb-2 flex items-center gap-2">
										<AlertCircle className="w-5 h-5" />
										Installation Instructions
									</h4>
									<ol className="text-sm text-white/80 space-y-2 ml-6 list-decimal">
										<li>
											Download the aircraft package using the button above
										</li>
										<li>Extract the ZIP file to your MSFS Community folder</li>
										<li>Restart Microsoft Flight Simulator</li>
										<li>Find the T-38C Talon in your aircraft selection</li>
									</ol>
								</div>
							</div>
						)}
					</div>

					{/* Support Section */}
					<div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
						<h3 className="text-xl font-semibold mb-4">Need Help?</h3>
						<p className="text-white/60 mb-4">
							If you have any issues with your purchase or need technical
							support, please reach out to us on Discord or via email.
						</p>
						<div className="flex gap-4">
							<a
								href="https://discord.gg/9kVXgjccXa"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg transition-colors text-sm font-semibold"
							>
								Join Discord
							</a>
							<a
								href="mailto:support@example.com"
								className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors text-sm"
							>
								Email Support
							</a>
						</div>
					</div>
				</div>
			</div>
		);
}

export default UserDashboard