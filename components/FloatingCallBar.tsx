import PhoneIcon from "./PhoneIcon";
export default function FloatingCallBar() {
  return <div className="fixed"><a href="tel:052-254-8306"><PhoneIcon /><span><small>예약 · 문의</small>식당 <b>052-254-8306</b></span></a><a href="tel:052-224-3300"><PhoneIcon /><span><small>흑염소 액기스</small>액기스 <b>052-224-3300</b></span></a></div>;
}
