'use client';

export default function AdminDashboardPage() {
    // Demo statistics data
    const stats = [
        { title: 'Total Team Members', value: '24', change: '+2 this month', icon: '👥', color: 'bg-blue-50 text-blue-600' },
        { title: 'Active Programs', value: '08', change: 'All running', icon: '🚀', color: 'bg-amber-50 text-[#D97706]' },
        { title: 'Lives Impacted', value: '52,400', change: '+12% growth', icon: '❤️', color: 'bg-emerald-50 text-emerald-600' },
        { title: 'Pending Requests', value: '05', change: 'Requires review', icon: '⏳', color: 'bg-purple-50 text-purple-600' },
    ];

    // Demo member data
    const recentMembers = [
        { name: 'Dr. Anisur Rahman', role: 'Executive Director', email: 'anisur@clcebd.org', status: 'Active', joined: 'Jan 2021' },
        { name: 'Nusrat Jahan', role: 'Head of Programs', email: 'nusrat@clcebd.org', status: 'Active', joined: 'Mar 2022' },
        { name: 'Tanvir Hossain', role: 'Youth Coordinator', email: 'tanvir@clcebd.org', status: 'Active', joined: 'Jun 2023' },
        { name: 'Sabrina Islam', role: 'Finance Lead', email: 'sabrina@clcebd.org', status: 'Active', joined: 'Sep 2023' },
    ];

    return (
        <div className="space-y-8">
            
            {/* Stat Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
                        <div className="space-y-1">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{stat.title}</p>
                            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">{stat.value}</h3>
                            <p className="text-xs font-medium text-emerald-600">{stat.change}</p>
                        </div>
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl ${stat.color}`}>
                            {stat.icon}
                        </div>
                    </div>
                ))}
            </div>

            {/* Leadership Team Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-gray-900">Leadership Team Directory</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Manage team roles and member details</p>
                    </div>
                    <button className="bg-[#D97706] hover:bg-[#b86404] text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-xl transition-colors shadow-sm">
                        + Add Member
                    </button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 text-[11px] font-bold text-gray-400 uppercase tracking-wider border-b border-gray-100">
                                <th className="py-3 px-6">Name & Role</th>
                                <th className="py-3 px-6">Email Address</th>
                                <th className="py-3 px-6">Status</th>
                                <th className="py-3 px-6">Joined Date</th>
                                <th className="py-3 px-6 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {recentMembers.map((member, i) => (
                                <tr key={i} className="hover:bg-gray-50/60 transition-colors">
                                    <td className="py-4 px-6">
                                        <p className="font-bold text-gray-900">{member.name}</p>
                                        <p className="text-xs text-[#D97706] font-medium">{member.role}</p>
                                    </td>
                                    <td className="py-4 px-6 text-gray-600 text-xs font-medium">{member.email}</td>
                                    <td className="py-4 px-6">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                            {member.status}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-gray-500 text-xs">{member.joined}</td>
                                    <td className="py-4 px-6 text-right">
                                        <button className="text-gray-400 hover:text-gray-900 font-semibold text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors">
                                            Edit
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
}