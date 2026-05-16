import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, FileSpreadsheet, FolderOpen, ShieldAlert, Key } from 'lucide-react';
import { cn } from '../lib/utils';

export const Layout: React.FC = () => {
  const { user, userRole, logOut } = useAuth();

  return (
    <div className="w-full h-screen bg-slate-100 flex font-sans text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col border-r border-slate-800">
        <div className="p-6 flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center font-bold text-white shadow-sm shadow-blue-500/20">
            R
          </div>
          <span className="text-xl font-bold text-white tracking-tight">RFx Engine</span>
        </div>
        
        <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2 mt-4">Dashboard</div>
          
          <NavLink
            to="/"
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 transition-colors rounded-md cursor-pointer",
              isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800"
            )}
          >
            {({ isActive }) => (
              <>
                <div className={cn("w-4 h-4 rounded border flex items-center justify-center", isActive ? "bg-blue-400/20 border-blue-400/50" : "border-slate-600")}>
                  {isActive && <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm" />}
                </div>
                Overview
              </>
            )}
          </NavLink>
          
          <NavLink
            to="/opportunities"
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 transition-colors rounded-md cursor-pointer",
              isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800"
            )}
          >
            {({ isActive }) => (
              <>
                <div className={cn("w-4 h-4 rounded border flex items-center justify-center", isActive ? "bg-blue-400/20 border-blue-400/50" : "border-slate-600")}>
                  {isActive && <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm" />}
                </div>
                My Opportunities
              </>
            )}
          </NavLink>

          <NavLink
            to="/drive"
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 transition-colors rounded-md cursor-pointer",
              isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800"
            )}
          >
            {({ isActive }) => (
              <>
                <div className={cn("w-4 h-4 rounded border flex items-center justify-center", isActive ? "bg-blue-400/20 border-blue-400/50" : "border-slate-600")}>
                  {isActive && <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm" />}
                </div>
                Document Drive
              </>
            )}
          </NavLink>

          <div className="mt-8 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 px-2">System</div>
          
          <NavLink
            to="/insights"
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 transition-colors rounded-md cursor-pointer",
              isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800"
            )}
          >
            {({ isActive }) => (
              <>
                <div className={cn("w-4 h-4 rounded border flex items-center justify-center", isActive ? "bg-blue-400/20 border-blue-400/50" : "border-slate-600")}>
                  {isActive && <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm" />}
                </div>
                GEMS Analysis
              </>
            )}
          </NavLink>

          <NavLink
            to="/auth"
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-3 py-2 transition-colors rounded-md cursor-pointer",
              isActive ? "bg-slate-800 text-white" : "hover:bg-slate-800"
            )}
          >
            {({ isActive }) => (
              <>
                <div className={cn("w-4 h-4 rounded border flex items-center justify-center", isActive ? "bg-blue-400/20 border-blue-400/50" : "border-slate-600")}>
                  {isActive && <div className="w-1.5 h-1.5 bg-blue-400 rounded-sm" />}
                </div>
                Authentication
              </>
            )}
          </NavLink>
        </nav>
        
        {/* User Profile Footer */}
        <div className="p-6 border-t border-slate-800">
          <div className="flex items-center gap-3">
            {user?.photoURL ? (
               <img src={user.photoURL} alt="User avatar" className="w-10 h-10 rounded-full border border-slate-600 object-cover" referrerPolicy="no-referrer" />
            ) : (
               <div className="w-10 h-10 bg-slate-700 rounded-full border border-slate-600 flex items-center justify-center font-bold text-white">
                 {user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U'}
               </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">{user?.displayName || 'User'}</div>
              <div className="text-xs text-slate-400 truncate capitalize">{userRole || 'Loading...'}</div>
            </div>
            <button onClick={logOut} className="p-1.5 text-slate-500 hover:text-white rounded-md hover:bg-slate-800 transition-colors" title="Log out">
              <svg xmlns="http://www.000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col p-6 overflow-hidden gap-6 h-full relative">
        <Outlet />
      </main>
    </div>
  );
};
