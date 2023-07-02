import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

export default function Page() {
	return (
		<form>
			<div className="space-y-12">
				<div className="pb-12 border-b border-gray-900/10">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Sign up for an account
					</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						Signup for an account to make your workplace safer.
					</p>

					<div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-4">
							<label
								htmlFor="username"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Username
							</label>
							<div className="mt-2">
								<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
									<input
										type="text"
										name="username"
										id="username"
										autoComplete="username"
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										placeholder="username"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="pb-12 border-b border-gray-900/10">
					<h2 className="text-base font-semibold leading-7 text-gray-900">
						Personal Information
					</h2>
					<p className="mt-1 text-sm leading-6 text-gray-600">
						Enter your personal information.
					</p>

					<div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-8 sm:grid-cols-6">
						<div className="sm:col-span-3">
							<label
								htmlFor="first-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								First name
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="first-name"
									id="first-name"
									autoComplete="given-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-3">
							<label
								htmlFor="last-name"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Last name
							</label>
							<div className="mt-2">
								<input
									type="text"
									name="last-name"
									id="last-name"
									autoComplete="family-name"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div className="sm:col-span-4">
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-end mt-6 gap-x-6">
				<button
					type="button"
					className="text-sm font-semibold leading-6 text-gray-900"
				>
					Cancel
				</button>
				<button
					type="submit"
					className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>
					Save
				</button>
			</div>
		</form>
	);
}
