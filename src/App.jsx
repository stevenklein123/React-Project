import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPassword, setSubmittedPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {
      setSubmittedEmail(email);
      setSubmittedPassword(password);

      setEmail("");
      setPassword("");

      setIsLoading(false);
    }, 2000); // 2 seconds
  };

  return (
    <div className="bg-slate-900 text-white font-sans min-h-screen flex items-center justify-center p-4">
      <div className="bg-slate-800 p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-700">
        <h2 className="text-2xl font-bold text-center mb-6 text-emerald-400">
          Login Account
        </h2>

        <form
          method="post"
          className="flex flex-col gap-5"
          onSubmit={handleForm}
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="name@company.com"
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="••••••••"
              className="bg-slate-700 border border-slate-600 rounded-lg px-4 py-2.5 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-2 bg-emerald-500 hover:bg-emerald-400 disabled:bg-gray-500 disabled:cursor-not-allowed text-slate-950 font-semibold py-2.5 rounded-lg transition-all"
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {submittedEmail && (
          <div className="mt-6 p-4 bg-slate-900/50 border border-emerald-500/30 rounded-xl animate-fade-in">
            <div className="flex items-center gap-2 mb-3 text-emerald-400 text-sm font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Submitted Data
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-700/50 pb-1.5">
                <span className="text-slate-400">Email:</span>
                <span className="font-mono text-emerald-300 break-all">
                  {submittedEmail}
                </span>
              </div>
              <div className="flex justify-between pt-0.5">
                <span className="text-slate-400">Password:</span>
                <span className="font-mono text-slate-300">
                  {"•".repeat(submittedPassword.length) || "None"}
                  <span className="text-xs text-slate-500 ml-2 font-sans">
                    ({submittedPassword})
                  </span>
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
