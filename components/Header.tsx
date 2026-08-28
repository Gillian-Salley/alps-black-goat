"use client";

import { useState } from "react";
import PhoneIcon from "./PhoneIcon";

const navigation = [["식당소개", "#story"], ["메뉴", "#menu"], ["예약하기", "#reserve"], ["찾아오시는 길", "#location"]];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className={menuOpen ? "menuOpen" : ""}>
    <a className="brand" href="#top" onClick={closeMenu} aria-label="알프스 흑염소 홈"><img src="/goatlogo.svg" alt="알프스 흑염소" /></a>
    <nav className={menuOpen ? "open" : ""} aria-label="주요 메뉴">{navigation.map(([label, href]) => <a key={href} href={href} onClick={closeMenu} className="lg:text-[24px] md:text-[20px] text-[18px] tracking-[-1.5px] ">{label}</a>)}</nav>
    <div className="headcallWrap flex gap-2">
    <a className="headcall" href="tel:052-254-8306"><PhoneIcon /> 예약 문의</a>
    <a
      className="headcall"
      href="https://smartstore.naver.com/alpsgoat?NaPm=ct%3Dmtcpn1ho%7Cci%3Dshopn%7Ctr%3Dnslsl%7Chk%3D3201eaad50a4df8d0a0670b407a47086d258a234%7Ctrx%3Dundefined"
      target="_blank"
      rel="noopener noreferrer"
    >
      네이버 스토어
    </a>
    </div>
    <button className="menuToggle" type="button" aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
      {menuOpen ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19" /></svg> : <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>}
    </button>
  </header>;
}
