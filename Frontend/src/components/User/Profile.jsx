import { motion } from 'framer-motion';

function Profile() {
  const user = {
    fullname: 'Aditya Sharma',
    username: 'adi_codes',
    email: 'aditya@example.com',
    profilePic: 'https://i.pravatar.cc/150?img=12',
  };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white shadow-xl rounded-2xl border border-gray-200 p-8"
      >
        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src={user.profilePic}
            alt="profile"
            className="w-28 h-28 rounded-full border-4 border-purple-500 shadow-md"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-600">
          User Profile
        </h2>

        {/* User Info */}
        <div className="space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Full Name</span>
            <span className="text-gray-800">{user.fullname}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Username</span>
            <span className="text-gray-800">{user.username}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Email</span>
            <span className="text-gray-800">{user.email}</span>
          </div>
        </div>

        {/* Edit Button */}
        <button className="mt-6 w-full py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 hover:opacity-90 transition">
          Edit Profile
        </button>
      </motion.div>
    </div>
  );
}

export default Profile;
