import { useEffect, useState } from 'react'
import { useAuth } from "../../util/AuthContext"
import { Key, Calendar, AlertCircle, X, Download } from "lucide-react";
//import { useNavigate } from 'react-router-dom'

interface ProductData {
	product_key: string;
	purchased_at: string;
}

type DownloadFile = {
	attributes: {
		variant_id: number;
		download_url: string;
		createdAt: string;
	};
};

export function getLatestDownloadForVariant(data: any[], variantId: number) {
	let filtered = data.filter(
		(file) => file.attributes.variant_id === variantId,
	);

	if (filtered.length === 0) return null;

	filtered = filtered.filter(
		(file) =>
			!file.attributes.name?.includes("Infinity_Manager") &&
			!file.attributes.name?.includes("Infinity Manager"),
	);

	if (filtered.length === 0) return null;

	filtered.sort(
		(a, b) =>
			new Date(b.attributes.createdAt).getTime() -
			new Date(a.attributes.createdAt).getTime(),
	);

	return filtered[0];
}

function getLemonSqueezyExpiry(url: string): Date | null {
	try {
		const parsed = new URL(url);
		const expiresStr = parsed.searchParams.get("expires");
		if (!expiresStr) return null;

		const expires = Number(expiresStr);
		if (Number.isNaN(expires)) return null;

		return new Date(expires * 1000);
	} catch {
		return null;
	}
}

export const UserDashboard = (): JSX.Element => {
	const { user, isAuthenticated, isLoading, getAccessToken } = useAuth()

	// TEMPORARY: Mock authentication for local testing
	const TESTING_MODE = false; // Set to false when done testing
	const mockUser = {
		name: 'Test User',
		email: 'test@example.com',
		picture: 'https://via.placeholder.com/150'
	};

	const [productData, setProductData] = useState<ProductData | null>(null)
	const [fetchLoading, setFetchLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)
	const [showSupportForm, setShowSupportForm] = useState(false)
	const [supportForm, setSupportForm] = useState({
		name: '',
		email: '',
		discordName: '',
		subject: '',
		message: ''
	})
	const [submitLoading, setSubmitLoading] = useState(false)
	const [submitError, setSubmitError] = useState<string | null>(null)
	const [submitSuccess, setSubmitSuccess] = useState(false)
	const [showDownloadButton, setShowDownloadButton] = useState(false);
	const [downloadLink, setDownloadLink] = useState<string | null>(null);
	const [downloadExpiry, setDownloadExpiry] = useState<Date | null>(null);
	const [validationVariantId, setValidationVariantId] = useState<number | null>(
		null,
	);
	const [managerDownloadLink, setManagerDownloadLink] = useState<string | null>(
		null,
	);
	const [managerDownloadExpiry, setManagerDownloadExpiry] =
		useState<Date | null>(null);
	const [managerShowDownloadButton, setManagerShowDownloadButton] =
		useState(false);

	// const nav = useNavigate()

	async function fetchDownloadLink(variantId: number) {
		try {
			const downloadLinkResponse = await fetch(
				"https://api.lemonsqueezy.com/v1/files",
				{
					method: "GET",
					headers: {
						Accept: "application/vnd.api+json",
						"Content-Type": "application/vnd.api+json",
						Authorization: `Bearer ${import.meta.env.VITE_LEMONSQUEEZY_API_KEY}`,
					},
				},
			);

			if (!downloadLinkResponse.ok) {
				console.error("Failed to fetch download link");
				return;
			}

			const downloadLinkData = await downloadLinkResponse.json();
			const latest = getLatestDownloadForVariant(
				downloadLinkData.data,
				variantId,
			);

			if (!latest) return;

			const expiry = getLemonSqueezyExpiry(latest.attributes.download_url);
			setDownloadLink(latest.attributes.download_url);
			setDownloadExpiry(expiry);
			setShowDownloadButton(true);

			console.log(
				"Updated download link",
				latest.attributes.download_url,
				"Expires:",
				expiry,
			);
		} catch (err) {
			console.error("Error refreshing download link:", err);
		}
	}

	async function refreshManagerDownload() {
		try {
			const res = await fetch("https://api.lemonsqueezy.com/v1/files", {
				method: "GET",
				headers: {
					Accept: "application/vnd.api+json",
					"Content-Type": "application/vnd.api+json",
					Authorization: `Bearer ${import.meta.env.VITE_LEMONSQUEEZY_API_KEY}`,
				},
			});

			if (!res.ok) {
				console.error("Failed to refresh manager download link");
				return;
			}

			const data = await res.json();

			const manager = data.data.find((file: any) =>
				file.attributes.name.includes("Infinity_Manager"),
			);

			if (!manager) {
				console.warn("No Infinity Manager file found during refresh");
				return;
			}

			const expiryDate = getLemonSqueezyExpiry(manager.attributes.download_url);

			setManagerDownloadLink(manager.attributes.download_url);
			setManagerDownloadExpiry(expiryDate);
			setManagerShowDownloadButton(true);

			console.log(
				"Updated Manager Download link:",
				manager.attributes.download_url,
				"Expires:",
				expiryDate,
			);
		} catch (err) {
			console.error("Manager refresh error:", err);
		}
	}

	useEffect(() => {
		const fetchProductKey = async () => {
			if (TESTING_MODE) {
				// Mock product data for testing
				setProductData({
					product_key: 'TEST-KEY-1234-5678',
					purchased_at: new Date().toISOString()
				});
				setFetchLoading(false);
				return;
			}

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

						const valodationKeyResponse = await fetch(
							"https://api.lemonsqueezy.com/v1/licenses/validate",
							{
								method: "POST",
								headers: {
									"Content-Type": "application/json",
									Accept: "application/json",
								},
								body: JSON.stringify({
									license_key: data.product_key,
								}),
							},
						);

						if (!valodationKeyResponse.ok) {
							console.error("Failed to validate license key");
						} else {
							const validationData = await valodationKeyResponse.json();
							if (validationData.valid) {
								let variantId = validationData.meta.variant_id;
								setValidationVariantId(variantId);
								let downloadLinkResponse = await fetch(
									"https://api.lemonsqueezy.com/v1/files",
									{
										method: "GET",
										headers: {
											Accept: "application/vnd.api+json",
											"Content-Type": "application/vnd.api+json",
											Authorization: `Bearer ${import.meta.env.VITE_LEMONSQUEEZY_API_KEY}`,
										},
									},
								);

								if (!downloadLinkResponse.ok) {
									console.error("Failed to fetch download link");
								} else {
									const downloadLinkData = await downloadLinkResponse.json();
									// Find the manager download link
									let managerDownload = downloadLinkData.data.find(
										(file: any) =>
											file.attributes.name.includes("Infinity_Manager"),
									);

									if (managerDownload) {
										const expiryDate = getLemonSqueezyExpiry(
											managerDownload.attributes.download_url,
										);
										setManagerDownloadExpiry(expiryDate);
										setManagerDownloadLink(
											managerDownload.attributes.download_url,
										);
										setManagerShowDownloadButton(true);
									}

									console.log("Download link:", downloadLinkData);

									const latest = getLatestDownloadForVariant(
										downloadLinkData.data,
										variantId,
									);

									if (latest) {
										const expiryDate = getLemonSqueezyExpiry(
											latest.attributes.download_url,
										);

										console.log(
											"Latest download file:",
											latest.attributes.download_url,
											"Made at:",
											latest.attributes.createdAt,
											"Expires at:",
											expiryDate,
										);
										setDownloadLink(latest.attributes.download_url);
										setShowDownloadButton(true);
										setDownloadExpiry(expiryDate);
									} else {
										console.log(
											"No download links found for variant",
											variantId,
										);
									}
								}
							} else {
								console.error("License key is invalid");
							}
						}
					}
				}
			} catch (err) {
				console.error("Failed to fetch product data:", err);
				setError("Unable to load your product information");
			} finally {
				setFetchLoading(false);
			}

	const handleSupportSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitLoading(true);
		setFetchLoading(false);
	};
		};

		fetchProductKey();
	}, [isAuthenticated, user, getAccessToken]);



	useEffect(() => {
		if (!downloadExpiry) return;
		if (!validationVariantId) return;

		const now = Date.now();
		const expiry = downloadExpiry.getTime();

		const refreshTime = expiry - now - 2 * 60 * 1000;

		if (refreshTime <= 0) {
			console.log("Download link expired — refreshing immediately");
			if (productData) {
				fetchDownloadLink(validationVariantId);
			}
			return;
		}

		console.log(`Scheduling download link refresh in ${refreshTime}ms`);

		const timer = setTimeout(() => {
			if (productData) {
				console.log("Refreshing download link due to expiry");
				fetchDownloadLink(validationVariantId);
			}
		}, refreshTime);

		return () => clearTimeout(timer);
	}, [downloadExpiry]);

	useEffect(() => {
		if (!managerDownloadExpiry) return;

		const now = Date.now();
		const expiry = managerDownloadExpiry.getTime();

		const refreshTime = expiry - now - 2 * 60 * 1000;

		if (refreshTime <= 0) {
			console.log("Manager download link expired — refreshing immediately");
			refreshManagerDownload();
			return;
		}

		console.log(`Scheduling manager link refresh in ${refreshTime}ms`);

		const timer = setTimeout(() => {
			console.log("Refreshing manager download link due to expiry");
			refreshManagerDownload();
		}, refreshTime);

		return () => clearTimeout(timer);
	}, [managerDownloadExpiry]);


	const handleSupportSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitLoading(true);
		setSubmitError(null);
		setSubmitSuccess(false);

		const currentUser = TESTING_MODE ? mockUser : user;

		try {
			// For testing mode, use localhost backend
			const API_URL = TESTING_MODE
				? 'http://localhost:3000'
				: 'https://userbackend-nameless-fog-3967.fly.dev';

			// Only get access token if not in testing mode
			const headers: Record<string, string> = {
				'Content-Type': 'application/json',
			};

			if (!TESTING_MODE) {
				const access_token = await getAccessToken();
				headers['Authorization'] = `Bearer ${access_token}`;
			}

			const response = await fetch(
				`${API_URL}/api/support`,
				{
					method: 'POST',
					headers,
					body: JSON.stringify({
						name: supportForm.name,
						email: supportForm.email,
						discordName: supportForm.discordName,
						subject: supportForm.subject,
						message: supportForm.message,
						userEmail: currentUser?.email || 'No email provided'
					})
				}
			);

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({ error: 'Failed to send message' }));
				throw new Error(errorData.error || 'Failed to send message');
			}

			// Success
			setSubmitSuccess(true);

			// Reset form after 2 seconds
			setTimeout(() => {
				setSupportForm({
					name: '',
					email: '',
					discordName: '',
					subject: '',
					message: ''
				});
				setShowSupportForm(false);
				setSubmitSuccess(false);
			}, 2000);

		} catch (err) {
			console.error('Failed to send support message:', err);
			setSubmitError(err instanceof Error ? err.message : 'Failed to send message. Please try again.');
		} finally {
			setSubmitLoading(false);
		}
	};

	if (!TESTING_MODE && (isLoading || fetchLoading)) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
					<p className="text-white/60">Loading your account...</p>
				</div>
			</div>
		)
	}

	if (!TESTING_MODE && !isAuthenticated) {
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

	const currentUser = TESTING_MODE ? mockUser : user;

	return (
		<div className="min-h-screen text-white px-4 py-12">
			<div className="max-w-4xl mx-auto">
				{/* User Profile Section */}
				<div className="bg-white/5 border border-white/10 rounded-xl p-8 mb-8">
					<h1 className="text-3xl font-bold mb-6">Account Dashboard</h1>

					<div className="flex items-center gap-4 mb-6">
						{currentUser?.picture && (
							<img
								src={currentUser.picture}
								alt={currentUser.name || "User"}
								className="w-16 h-16 rounded-full"
							/>
						)}
						<div>
							<h2 className="text-xl font-semibold">{currentUser?.name}</h2>
							<p className="text-white/60">{currentUser?.email}</p>
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
											T-38 Talon Professional
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
									{showDownloadButton && downloadLink && (
										<a
											href={downloadLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<button
												type="button"
												className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
											>
												<Download className="w-4 h-4" />
												Download
											</button>
										</a>
									)}
									{managerShowDownloadButton && managerDownloadLink && (
										<a
											href={managerDownloadLink}
											target="_blank"
											rel="noopener noreferrer"
										>
											<button
												type="button"
												className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm"
											>
												<Download className="w-4 h-4" />
												Download Data Cartridge Companion
											</button>
										</a>
									)}
									{/*<button
										type="button"
										className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm"
									>
										(Manual WIP)
									</button> */}
								</div>
							</div>

							{/* Installation Instructions */}
							<div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mt-6">
								<h4 className="font-semibold mb-2 flex items-center gap-2">
									<AlertCircle className="w-5 h-5" />
									Installation Instructions
								</h4>
								<ol className="text-sm text-white/80 space-y-2 ml-6 list-decimal">
									<li>Download the aircraft package</li>
									<li>Extract the ZIP file to your MSFS Community folder</li>
									<li>Restart Microsoft Flight Simulator</li>
									<li>Find the T-38 Talon in your aircraft selection</li>
								</ol>
							</div>
						</div>
					)}
				</div>

				{/* Support Section */}
				<div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-6">
					<h3 className="text-xl font-semibold mb-4">Need Help?</h3>
					<p className="text-white/60 mb-4">
						If you have any issues with your purchase or need technical support,
						please reach out to us on Discord or via email.
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
						<button
							type="button"
							onClick={() => setShowSupportForm(true)}
							className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-lg transition-colors text-sm"
						>
							Email Support
						</button>
					</div>
				</div>
			</div>

			{/* Support Form Modal */}
			{showSupportForm && (
				<div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 overflow-y-auto">
					<div className="bg-gray-900 border border-white/10 rounded-xl p-6 max-w-md w-full my-8">
						<div className="flex items-center justify-between mb-4">
							<h3 className="text-xl font-semibold">Contact Support</h3>
							<button
								type="button"
								onClick={() => {
									setShowSupportForm(false);
									setSupportForm({
										name: "",
										email: "",
										discordName: "",
										subject: "",
										message: "",
									});
									setSubmitError(null);
									setSubmitSuccess(false);
								}}
								className="text-white/60 hover:text-white transition-colors"
							>
								<X className="w-6 h-6" />
							</button>
						</div>

						{submitSuccess && (
							<div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-4">
								<p className="text-green-200">
									Message sent successfully! We'll get back to you soon.
								</p>
							</div>
						)}

						{submitError && (
							<div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
								<p className="text-red-200">{submitError}</p>
							</div>
						)}

						<form onSubmit={handleSupportSubmit} className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-medium mb-2"
								>
									Name <span className="text-red-400">*</span>
								</label>
								<input
									type="text"
									id="name"
									required
									disabled={submitLoading}
									value={supportForm.name}
									onChange={(e) =>
										setSupportForm({ ...supportForm, name: e.target.value })
									}
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
									placeholder="Your full name"
								/>
							</div>

							<div>
								<label
									htmlFor="email"
									className="block text-sm font-medium mb-2"
								>
									Email <span className="text-red-400">*</span>
								</label>
								<input
									type="email"
									id="email"
									required
									disabled={submitLoading}
									value={supportForm.email}
									onChange={(e) =>
										setSupportForm({ ...supportForm, email: e.target.value })
									}
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
									placeholder="your.email@example.com"
								/>
							</div>

							<div>
								<label
									htmlFor="discordName"
									className="block text-sm font-medium mb-2"
								>
									Discord Name
								</label>
								<input
									type="text"
									id="discordName"
									disabled={submitLoading}
									value={supportForm.discordName}
									onChange={(e) =>
										setSupportForm({
											...supportForm,
											discordName: e.target.value,
										})
									}
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
									placeholder="username#1234"
								/>
							</div>

							<div>
								<label
									htmlFor="subject"
									className="block text-sm font-medium mb-2"
								>
									Subject <span className="text-red-400">*</span>
								</label>
								<input
									type="text"
									id="subject"
									required
									disabled={submitLoading}
									value={supportForm.subject}
									onChange={(e) =>
										setSupportForm({ ...supportForm, subject: e.target.value })
									}
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
									placeholder="Brief description of your issue"
								/>
							</div>

							<div>
								<label
									htmlFor="message"
									className="block text-sm font-medium mb-2"
								>
									Message <span className="text-red-400">*</span>
								</label>
								<textarea
									id="message"
									required
									rows={6}
									disabled={submitLoading}
									value={supportForm.message}
									onChange={(e) =>
										setSupportForm({ ...supportForm, message: e.target.value })
									}
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:opacity-50"
									placeholder="Describe your issue in detail..."
								/>
							</div>

							<div className="flex gap-3">
								<button
									type="submit"
									disabled={submitLoading}
									className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
								>
									{submitLoading ? (
										<>
											<div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
											Sending...
										</>
									) : (
										"Send Message"
									)}
								</button>
								<button
									type="button"
									disabled={submitLoading}
									onClick={() => {
										setShowSupportForm(false);
										setSupportForm({
											name: "",
											email: "",
											discordName: "",
											subject: "",
											message: "",
										});
										setSubmitError(null);
										setSubmitSuccess(false);
									}}
									className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
								>
									Cancel
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}

export default UserDashboard