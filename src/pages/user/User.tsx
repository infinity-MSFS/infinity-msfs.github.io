import { useEffect, useState } from 'react'
import { useAuth } from "../../util/AuthContext"
import { Download, Key, Calendar, AlertCircle, X, Paperclip } from 'lucide-react'
//import { useNavigate } from 'react-router-dom'

interface ProductData {
	product_key: string;
	purchased_at: string;
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
		discordName: '',
		subject: '',
		message: '',
		attachments: [] as File[]
	})
	const [attachmentError, setAttachmentError] = useState<string | null>(null)

	// const nav = useNavigate()

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

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAttachmentError(null);
		const files = Array.from(e.target.files || []);

		// Validate total size (2MB = 2 * 1024 * 1024 bytes)
		const maxSize = 2 * 1024 * 1024;
		const totalSize = files.reduce((sum, file) => sum + file.size, 0);

		if (totalSize > maxSize) {
			setAttachmentError('Total file size must be less than 2MB');
			return;
		}

		setSupportForm({ ...supportForm, attachments: files });
	};

	const removeAttachment = (index: number) => {
		const newAttachments = supportForm.attachments.filter((_, i) => i !== index);
		setSupportForm({ ...supportForm, attachments: newAttachments });
		setAttachmentError(null);
	};

	const handleSupportSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const currentUser = TESTING_MODE ? mockUser : user;

		// Note: mailto: protocol doesn't support attachments
		// You'll need to implement a backend API endpoint for proper email sending with attachments
		// This is a temporary solution that opens the email client

		const subject = encodeURIComponent(`[SUPPORT] ${supportForm.subject}`);
		const body = encodeURIComponent(
			`Name: ${supportForm.name}\n` +
			`Discord: ${supportForm.discordName}\n` +
			`Email: ${currentUser?.email || 'No email'}\n\n` +
			`Message:\n${supportForm.message}\n\n` +
			(supportForm.attachments.length > 0
				? `Note: ${supportForm.attachments.length} file(s) attached (see attachment in email client)\n`
				: '')
		);

		// For production, replace this with an API call to your backend
		// Example:
		// const formData = new FormData();
		// formData.append('name', supportForm.name);
		// formData.append('discordName', supportForm.discordName);
		// formData.append('subject', supportForm.subject);
		// formData.append('message', supportForm.message);
		// supportForm.attachments.forEach(file => formData.append('attachments', file));
		// 
		// const response = await fetch('/api/support', {
		//   method: 'POST',
		//   body: formData
		// });

		window.location.href = `mailto:aero.msfs@gmail.com?subject=${subject}&body=${body}`;

		// Reset form and close modal
		setSupportForm({
			name: '',
			discordName: '',
			subject: '',
			message: '',
			attachments: []
		});
		setAttachmentError(null);
		setShowSupportForm(false);
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
										Download Data Cartridge Companion
									</button>
									<button
										type="button"
										className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors text-sm"
									>
										(Manual WIP)
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
										name: '',
										discordName: '',
										subject: '',
										message: '',
										attachments: []
									});
									setAttachmentError(null);
								}}
								className="text-white/60 hover:text-white transition-colors"
							>
								<X className="w-6 h-6" />
							</button>
						</div>

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
									value={supportForm.name}
									onChange={(e) =>
										setSupportForm({ ...supportForm, name: e.target.value })
									}
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
									placeholder="Your full name"
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
									value={supportForm.discordName}
									onChange={(e) =>
										setSupportForm({ ...supportForm, discordName: e.target.value })
									}
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
									value={supportForm.subject}
									onChange={(e) =>
										setSupportForm({ ...supportForm, subject: e.target.value })
									}
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
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
									value={supportForm.message}
									onChange={(e) =>
										setSupportForm({ ...supportForm, message: e.target.value })
									}
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
									placeholder="Describe your issue in detail..."
								/>
							</div>

							<div>
								<label className="block text-sm font-medium mb-2">
									Attachments (max 2MB total)
								</label>
								<div className="relative">
									<input
										type="file"
										id="attachments"
										multiple
										onChange={handleFileChange}
										className="hidden"
									/>
									<label
										htmlFor="attachments"
										className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white hover:bg-white/10 transition-colors cursor-pointer"
									>
										<Paperclip className="w-4 h-4" />
										<span className="text-sm">
											{supportForm.attachments.length > 0
												? `${supportForm.attachments.length} file(s) selected`
												: 'Choose files'}
										</span>
									</label>
								</div>

								{attachmentError && (
									<p className="text-red-400 text-xs mt-1">{attachmentError}</p>
								)}

								{supportForm.attachments.length > 0 && (
									<div className="mt-2 space-y-1">
										{supportForm.attachments.map((file, index) => (
											<div
												key={index}
												className="flex items-center justify-between bg-white/5 rounded px-3 py-2 text-sm"
											>
												<span className="truncate flex-1 text-white/80">
													{file.name} ({(file.size / 1024).toFixed(1)}KB)
												</span>
												<button
													type="button"
													onClick={() => removeAttachment(index)}
													className="text-red-400 hover:text-red-300 ml-2"
												>
													<X className="w-4 h-4" />
												</button>
											</div>
										))}
									</div>
								)}
							</div>

							<div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 text-sm">
								<p className="text-yellow-200 text-xs">
									Note: File attachments may not work with all email clients. For best results, consider uploading files to a cloud service and including the link in your message.
								</p>
							</div>

							<div className="flex gap-3">
								<button
									type="submit"
									className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-semibold"
								>
									Send Message
								</button>
								<button
									type="button"
									onClick={() => {
										setShowSupportForm(false);
										setSupportForm({
											name: '',
											discordName: '',
											subject: '',
											message: '',
											attachments: []
										});
										setAttachmentError(null);
									}}
									className="flex-1 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors"
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