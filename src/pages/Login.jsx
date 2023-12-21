export default function Login() {
  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-5xl font-semibold text-slate-800 text-center">
        Login
      </h1>
      <form className="flex flex-col gap-6 bg-slate-700 p-12 rounded-lg my-12">
        <input
          className="w-3/4 mx-auto px-4 py-3 focus:outline-none rounded-md"
          type="email"
          name="email"
          id="email"
          placeholder="Email.."
        />
        <input
          className="w-3/4 mx-auto px-4 py-3 focus:outline-none rounded-md"
          type="password"
          name="password"
          id="password"
          placeholder="Password.."
        />
        <input
          type="submit"
          value="Login"
          className="w-3/4 mx-auto px-4 py-3 rounded-lg font-bold uppercase text-2xl cursor-pointer bg-slate-900 text-white"
        />
      </form>
    </div>
  );
}