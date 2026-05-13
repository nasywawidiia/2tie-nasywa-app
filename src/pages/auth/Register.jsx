import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-orange-100">

        {/* HEADING */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Create Your Account ✨
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Join Foodies and start ordering your favorite meals
        </p>

        {/* FORM */}
        <form>

          {/* EMAIL */}
          <div className="mb-5">

            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              className="
                w-full
                px-4
                py-3
                bg-gray-50
                border
                border-gray-300
                rounded-xl
                shadow-sm
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
              placeholder="you@example.com"
            />

          </div>

          {/* PASSWORD */}
          <div className="mb-5">

            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              className="
                w-full
                px-4
                py-3
                bg-gray-50
                border
                border-gray-300
                rounded-xl
                shadow-sm
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
              placeholder="********"
            />

          </div>

          {/* CONFIRM PASSWORD */}
          <div className="mb-6">

            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              className="
                w-full
                px-4
                py-3
                bg-gray-50
                border
                border-gray-300
                rounded-xl
                shadow-sm
                placeholder-gray-400
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
              placeholder="********"
            />

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              w-full
              bg-orange-500
              hover:bg-orange-600
              text-white
              font-semibold
              py-3
              px-4
              rounded-xl
              transition
              duration-300
            "
          >
            Register
          </button>

        </form>

        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-600 mt-6">

          Already have an account?{" "}

          <Link
            to="/login"
            className="text-orange-500 font-semibold hover:underline"
          >
            Login
          </Link>

        </p>

      </div>
    </div>
  );
}