import { userService } from '@/components/service/user.route'
import React from 'react'

export default async function userpage() {
  const users = await userService.getusers();

  return (
    <div className="p-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-black">Users</h1>
        <p className="text-gray-500 mt-1">{users.length} total users</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">Email</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-black">Role</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-black">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-sm font-medium text-black">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                      user.role === 'admin'
                        ? 'bg-black text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-4 py-1.5 text-sm border border-gray-300 rounded hover:bg-gray-100 transition">
                      Edit
                    </button>
                    <button className="px-4 py-1.5 text-sm bg-black text-white rounded hover:bg-gray-800 transition">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}