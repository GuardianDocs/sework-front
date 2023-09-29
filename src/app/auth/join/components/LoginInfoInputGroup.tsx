import useJoinFormStore from '../hooks/useJoinFormStore';

export default function LoginInfoInputGroup() {
	const { email, password, setEamil, setPassword } = useJoinFormStore(
		state => ({
			email: state.email,
			password: state.password,
			setEamil: state.actions.setEmail,
			setPassword: state.actions.setPassword,
		}),
	);

	return (
		<>
			<h3 className="mb-4 text-lg">로그인 정보</h3>

			<div className="mb-4">
				<label className="block mb-2" htmlFor="email">
					이메일
				</label>
				<input
					type="email"
					name="email"
					id="email"
					autoComplete="username"
					className="w-full p-2 border rounded"
					value={email}
					onChange={e => setEamil(e.target.value)}
				/>
			</div>

			<div className="mb-4">
				<label className="block mb-2" htmlFor="password">
					비밀번호
				</label>
				<input
					type="password"
					name="password"
					id="password"
					autoComplete="current-password"
					className="w-full p-2 border rounded"
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>
			</div>
		</>
	);
}
