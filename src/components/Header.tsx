'use client';

import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface HeaderProps {
  breadcrumbs: Breadcrumb[];
  userName?: string;
}

export default function Header({ breadcrumbs, userName }: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Logo / School Name */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-xl font-bold text-indigo-700">ECA</span>
          <span className="text-sm font-medium text-gray-500 hidden sm:block">Study Guide</span>
        </Link>

        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1 text-sm overflow-hidden flex-1 justify-center">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1 min-w-0">
              {i > 0 && <span className="text-gray-400 shrink-0">/</span>}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-indigo-600 hover:text-indigo-800 hover:underline truncate font-medium"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-semibold truncate">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* User badge */}
        {userName && (
          <div className="shrink-0 bg-indigo-50 text-indigo-700 text-sm font-medium px-3 py-1.5 rounded-full border border-indigo-200">
            Hi, {userName}
          </div>
        )}
      </div>
    </header>
  );
}
