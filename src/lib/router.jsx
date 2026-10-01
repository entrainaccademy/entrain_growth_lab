'use client';

import React, { useCallback, useEffect, useMemo } from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export function useLocation() {
  const pathname = usePathname() || '/';
  return useMemo(() => ({ pathname }), [pathname]);
}

export function useNavigate() {
  const router = useRouter();
  return useCallback((to, options = {}) => {
    if (!to) return;
    if (options.replace) router.replace(to, { scroll: false });
    else router.push(to, { scroll: false });
  }, [router]);
}

export function useParams() {
  const pathname = usePathname() || '/';
  return { slug: pathname.split('/').filter(Boolean).at(-1) };
}

export function Link({ to, children, ...props }) {
  return <NextLink href={to} scroll={false} {...props}>{children}</NextLink>;
}

export function NavLink({ to, className, children, ...props }) {
  const pathname = usePathname() || '/';
  const isActive = pathname === to || (to !== '/' && pathname.startsWith(`${to}/`));
  const resolvedClassName = typeof className === 'function' ? className({ isActive }) : className;

  return (
    <NextLink href={to} scroll={false} className={resolvedClassName} aria-current={isActive ? 'page' : undefined} {...props}>
      {children}
    </NextLink>
  );
}

export function Navigate({ to, replace = false }) {
  const navigate = useNavigate();
  useEffect(() => { navigate(to, { replace }); }, [navigate, replace, to]);
  return null;
}
