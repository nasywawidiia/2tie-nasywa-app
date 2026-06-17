import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { userAPI } from "../../services/userAPI";

export default function Register() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (dataForm.password !== dataForm.confirmPassword) {
      setError("Password dan Confirm Password tidak sama");
      return;
    }

    try {
      setLoading(true);

      await userAPI.createUser({
        email: dataForm.email,
        password: dataForm.password,
      });

      alert("Registrasi berhasil!");

      navigate("/login");
    } catch (err) {
      setError(err.message || "Registrasi gagal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fffaf5] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-orange-100">

        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Create Your Account ✨
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Join Foodies and start ordering your favorite meals
        </p>

        {error && (
          <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={dataForm.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="
                w-full
                px-4
                py-3
                bg-gray-50
                border
                border-gray-300
                rounded-xl
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>

            <input
              type="password"
              name="password"
              value={dataForm.password}
              onChange={handleChange}
              placeholder="********"
              required
              className="
                w-full
                px-4
                py-3
                bg-gray-50
                border
                border-gray-300
                rounded-xl
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={dataForm.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              required
              className="
                w-full
                px-4
                py-3
                bg-gray-50
                border
                border-gray-300
                rounded-xl
                shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-orange-400
              "
            />
          </div>

          <button
            type="submit"
            disabled={loading}
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
              disabled:opacity-50
            "
          >
            {loading ? "Loading..." : "Register"}
          </button>
        </form>

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