import { ROUTE_PATH, isParentRoute, routes } from "@/routes";

interface ItemPageProps {
  params: Promise<{
    item: string[];
  }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const ItemPage = async ({ params }: ItemPageProps) => {
  // nextjs의 url을 이용하여 [...item]/page.tsx을 출력하면 아래와 같은 결과가 나옴.
  // localhost:3000/a/b/c?name=1&age=2
  // params: { item: ['a','b','c']},
  // searchParams: { name: '1', p: '2'}
  const { item } = await params;
  const path = ["", ...item].join("/") as ROUTE_PATH;
  const route = routes[path];

  if (!route || isParentRoute(route)) return null;

  const { children: Component } = route;

  return Component ? <Component /> : null;
};

export default ItemPage;
