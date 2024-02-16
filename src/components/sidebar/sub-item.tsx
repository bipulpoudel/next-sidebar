"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useMemo } from "react";

interface ISubItem {
  name: string;
  path: string;
}

const SubMenuItem = ({ item }: { item: ISubItem }) => {
  const { name, path } = item;
  const router = useRouter();
  const pathname = usePathname();

  const onClick = () => {
    router.push(path);
  };

  const isActive = useMemo(() => path === pathname, [path, pathname]);

  return (
    <div
      className={`text-sm hover:text-sidebar-active hover:font-semibold cursor-pointer ${
        isActive ? "text-sidebar-active font-semibold" : ""
      }`}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default SubMenuItem;
