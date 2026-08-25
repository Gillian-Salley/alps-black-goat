"use client";

import { useState } from "react";
import PhoneIcon from "./PhoneIcon";

const navigation = [["식당소개", "#story"], ["메뉴", "#menu"], ["예약하기", "#reserve"], ["찾아오시는 길", "#location"]];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className={menuOpen ? "menuOpen" : ""}>
    <a className="brand" href="#top" onClick={closeMenu} aria-label="알프스 흑염소 홈"><img src="/goatlogo.svg" alt="알프스 흑염소" /></a>
    <nav className={menuOpen ? "open" : ""} aria-label="주요 메뉴">{navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="lg:text-[24px] md:text-[20px] text-[18px]  ">{label}</a>)}</nav>
    <a className="headcall" href="tel:052-254-8306"><PhoneIcon /> 예약 문의</a>
    <button className="menuToggle" type="button" aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
      {menuOpen ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>}
    </button>
  </header>;
}
