"use client";

import { useState } from "react";
import { menuItems } from "@/data/menu";

const categories = ["전체", "구이", "탕", "세트", "코스"] as const;
type Category = (typeof categories)[number];

export default function MenuSection() {
  const [filter, setFilter] = useState<Category>("전체");
  const visibleItems = filter === "전체" ? menuItems : menuItems.filter((item) => item.category === filter);
  return <section className="menu section" id="menu">
    <div className="heading"><div><p className="eyebrow dark">MENU</p><h2>정성으로 차린 알프스의 한 상</h2></div><p>구이부터 보양탕, 가족 세트와 접대 코스까지<br />자리에 맞게 골라보세요.</p></div>
    <div className="filters">{categories.map((category) => <button key={category} className={filter === category ? "on" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <div className="grid">{visibleItems.map((item) => <article key={item.name}><div><h3>{item.name} <small>{item.unit}</small>{item.badge && <i>{item.badge}</i>}</h3><p className="whitespace-pre-line">
  {item.description}
</p></div><strong>{item.price}</strong></article>)}</div>
    <p className="note">※ 코스 B·C는 예약제로 운영됩니다. 원활한 준비를 위해 미리 전화해 주세요.</p>
  </section>;
}
