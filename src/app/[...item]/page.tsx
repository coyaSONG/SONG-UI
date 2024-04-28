import React from "react";

interface ItemPageProps {
  params: {
    item: string[];
  };
  searchParams: any;
}
const ItemPage: React.FC<ItemPageProps> = ({ params, searchParams }) => {
  // nextjs의 url을 이용하여 [...item]/page.tsx을 출력하면 아래와 같은 결과가 나옴.
  // localhost:3000/a/b/c?name=1&age=2
  // params: { item: ['a','b','c']},
  // searchParams: { name: '1', p: '2'}
  const path = ["", ...params.item].join("/");
  console.log(path);
  return <div>Item Page {path}</div>;
};

export default ItemPage;
