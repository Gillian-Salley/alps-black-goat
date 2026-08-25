import PhoneIcon from "./PhoneIcon";
export default function ReservationSection() {
  return <section className="reserve" id="reserve"><div><p className="eyebrow">RESERVATION</p><h2>소중한 분과의 식사,<br />편안하게 준비해 드립니다.</h2><p>가족 모임, 부모님 보양식, 단체 식사와 접대 코스까지<br />전화로 인원과 메뉴를 알려주세요.</p></div><div className="reserveCalls"><a href="tel:052-254-8306"><PhoneIcon /><span>식당 예약 전화<small>052-254-8306</small></span></a><a href="tel:052-224-3300"><PhoneIcon /><span>액기스 문의 전화<small>052-224-3300</small></span></a></div></section>;
}
