export default function Footer() {
  return (
    <footer>
      <div>
        <img
          src="/goatlogo.svg"
          alt="알프스염소"
          className="
            !w-[240px]
            md:!w-[320px]
            lg:!w-[400px]
            !h-auto
            brightness-0 invert
          "
        />

      </div>

      <div>
        <p>
          <b>영농조합법인알프스</b> · 대표 김재호
        </p>
        <p>사업자등록번호 515-11-08359</p>
        <p>울산광역시 울주군 언양읍 정거고중길 2-27, 1동 2층</p>
        <p>대표전화 052-264-8306</p>
      </div>

      <div className="footerCredit">
        <small>© ALPS AGRICULTURAL UNION CORPORATION.</small>

        <span>Designed by Giryeong Kim</span>

        <a
          href="https://app.notion.com/p/3a6bc63c9c93809ead5adb727fc9e9ce?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="!text-inherit !underline "
        >
          디자인 문의 ↗
        </a>
      </div>
    </footer>
  );
}