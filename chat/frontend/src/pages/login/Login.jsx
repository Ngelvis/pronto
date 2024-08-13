import { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const { loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(username, password);
	};

	return (
		
		<div className="bg-slate-100 w-lvw h-screen flex justify-center item-center">
			<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
				<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
					<h1 className='text-3xl font-semibold text-center text-gray-600'>
						<span className='text-indigo-600'>  Pronto</span>
						<br />Login
					</h1>
					<form onSubmit={handleSubmit}>
						<div>
							<label className='label p-2'>
								<span className='text-base label-text text-gray-600'>Username</span>
							</label>
							<input
								type='text'
								placeholder='Enter username'
								className='w-full input input-bordered h-10'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</div>
						<div>
							<label className='label'>
								<span className='text-base label-text text-gray-600'>Password</span>
							</label>
							<input
								type='password'
								placeholder='Enter Password'
								className='w-full input input-bordered h-10'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<Link to='/signup' className='text-sm  hover:underline hover:text-indigo-600 mt-2 inline-block'>
							{"Don't"} have an account?
						</Link>
						<div>
							<button
							type="submit"
							className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}`}
							disabled={loading}
						>
							{loading ? <span className="loading loading-spinner"></span> : "Login"}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
export default Login;

// STARTER CODE FOR THIS FILE
// const Login = () => {
// 	return (
// 		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
// 			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
// 				<h1 className='text-3xl font-semibold text-center text-gray-600'>
// 					Login
// 					<span className='text-blue-500'> ChatApp</span>
// 				</h1>

// 				<form>
// 					<div>
// 						<label className='label p-2'>
// 							<span className='text-base label-text'>Username</span>
// 						</label>
// 						<input type='text' placeholder='Enter username' className='w-full input input-bordered h-10' />
// 					</div>

// 					<div>
// 						<label className='label'>
// 							<span className='text-base label-text'>Password</span>
// 						</label>
// 						<input
// 							type='password'
// 							placeholder='Enter Password'
// 							className='w-full input input-bordered h-10'
// 						/>
// 					</div>
// 					<a href='#' className='text-sm  hover:underline hover:text-blue-600 mt-2 inline-block'>
// 						{"Don't"} have an account?
// 					</a>

// 					<div>
// 						<button className='btn btn-block btn-sm mt-2'>Login</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
// export default Login;
