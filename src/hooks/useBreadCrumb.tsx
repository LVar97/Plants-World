import React from 'react';
import { Link, useLocation } from "react-router-dom";

interface IBreadcrumbItem {
  title: React.ReactNode;
  key: string;
}

export function useBreadCrumb(breadcrumbNameMap: Record<string, string>) {
	const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

	const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });

  const breadcrumbItems: Array<IBreadcrumbItem> = [
    {
      title:	<Link to="/">Home</Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);


  return { breadcrumbItems };
}