'use client';

import {
  ChildRoute,
  ParentRoute,
  ROUTE_PATH,
  gnbRootList,
  isParentRoute,
  routes,
} from '@/routes';
import classNames from 'classnames';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { ROUTE } from '../routes';

const ParentGnbItem = ({
  route: { name, link, children },
  currentPath,
}: {
  route: ParentRoute;
  currentPath: ROUTE_PATH;
}) => {
  const open = children.includes(currentPath);

  return (
    <li
      className={classNames('parent', `items-${children.length}`, {
        open,
      })}
    >
      <Link href={link}>{name}</Link>
      <ul className="subRoutes">
        {children.map((r) => {
          const route = routes[r];
          return (
            <GnbItem route={route} currentPath={currentPath} key={route.key} />
          );
        })}
      </ul>
    </li>
  );
};

const ChildGnbItem = ({
  route: { name, link },
  currentPath,
}: {
  route: ChildRoute;
  currentPath: ROUTE_PATH;
}) => {
  return (
    <li className={classNames({ active: link === currentPath })}>
      <Link href={link}>{name}</Link>
    </li>
  );
};

const GnbItem = ({
  route,
  currentPath,
}: {
  route: ROUTE;
  currentPath: ROUTE_PATH;
}) => {
  if (isParentRoute(route))
    return <ParentGnbItem route={route} currentPath={currentPath} />;
  return <ChildGnbItem route={route} currentPath={currentPath} />;
};

const Gnb = () => {
  const { item = [] } = useParams();
  const currentPath = ['', ...item].join('/') as ROUTE_PATH;

  return (
    <aside>
      <h1>
        <Link href="/">
          UI Comp List <sub>coyaSONG</sub>
        </Link>
      </h1>
      <ul className="mainRoutes">
        {gnbRootList.map((r) => (
          <GnbItem route={r} currentPath={currentPath} key={r.key} />
        ))}
      </ul>
    </aside>
  );
};

export default Gnb;