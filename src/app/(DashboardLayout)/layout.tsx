import { Sidebar1 } from '@/components/sidebar1'
import React from 'react'

const DashboardLayout = ({
  admin,
  provider,
  customer,
}: {
  admin: React.ReactNode;
  provider: React.ReactNode;
  customer: React.ReactNode;
}) => {
  const role = "customer"; // later from auth

  return (
    <div className="flex bg-red-700">
      <Sidebar1 role={role} />

      <main className="p-6">
        {role === "admin" && admin}
        {role === "provider" && provider}
        {role === "customer" && customer}
      </main>
    </div>
  );
};

export default DashboardLayout;
