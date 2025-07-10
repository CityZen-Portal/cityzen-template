
export default function SignInClient({ onBack }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-white dark:bg-navy-900 px-4 py-8 transition-colors duration-300">
      <div className="w-full max-w-4xl bg-white dark:bg-navy-800 rounded-3xl shadow-2xl border-2 border-blue-200 dark:border-navy-700 p-0 flex flex-row overflow-hidden">
        {/* Left: Form */}
        <div className="flex flex-col justify-center flex-1 p-10">
          <button onClick={onBack} className="self-start mb-4 text-blue-600 hover:underline">← Back</button>
          <h4 className="mb-2.5 text-3xl font-bold text-navy-700 dark:text-white">Citizen Sign In</h4>
          <p className="mb-8 text-base text-gray-600 dark:text-gray-300">Enter your email and password to sign in!</p>
          <form className="w-full flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email*</label>
              <input type="email" required placeholder="citizen@example.com" className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Password*</label>
              <input type="password" required placeholder="Min. 8 characters" className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <div className="flex items-center mb-2">
              <input id="remember" type="checkbox" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-600 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Sign In</button>
          </form>
          <div className="mt-4">
            <span className="text-sm text-navy-700 dark:text-gray-600">Not registered yet?</span>
            <a className="ml-1 text-sm font-medium text-blue-600 dark:text-blue-300 hover:underline" href="#">Create an account</a>
          </div>
        </div>
        {/* Right: SVG Illustration */}
        <div className="hidden md:flex flex-1 items-center justify-center bg-blue-50 dark:bg-navy-700 p-8">
          <img src={require('../../assets/svg/citizen-signup.svg').default} alt="Citizen Illustration" className="max-h-96 w-auto" />
        </div>
      </div>
    </div>
  );
}
