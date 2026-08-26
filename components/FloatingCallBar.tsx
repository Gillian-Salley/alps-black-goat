import PhoneIcon from "./PhoneIcon";

export default function FloatingCallBar() {
  return (
    <div className="fixed">
      <a href="tel:052-254-8306">
        <PhoneIcon />
        <span className="!text-[16px] md:!text-[18px] lg:!text-[20px]">
          식당 문의{" "}
          <b className="!text-[16px] md:!text-[18px] lg:!text-[20px] !font-[700]">
            052-254-8306
          </b>
        </span>
      </a>

      <a href="tel:052-224-3300">
        <PhoneIcon />
        <span className="!text-[16px] md:!text-[18px] lg:!text-[20px]">
          액기스 문의{" "}
          <b className="!text-[16px] md:!text-[18px] lg:!text-[20px] !font-[700]">
            052-224-3300
          </b>
        </span>
      </a>
    </div>
  );
}