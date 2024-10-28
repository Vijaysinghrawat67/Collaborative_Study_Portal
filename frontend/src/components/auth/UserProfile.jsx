import React from 'react'

function UserProfile() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4">User Profile</h2>
                <div>
                    <p><strong>Username:</strong> johndoe</p>
                    <p><strong>Email:</strong> johndoe@example.com</p>
                    {/* You can add more details here */}
                </div>
                <div className="mt-6">
                    <a href="/" className="text-blue-500">Back to Home</a>
                </div>
            </div>
        </div>
    );
}

export default UserProfile