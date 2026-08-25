const mapUrl = "https://map.kakao.com/link/search/울산광역시 울주군 언양읍 정거고중길 2-27";
export default function LocationSection() {
  return <section className="location section" id="location"><div><p className="eyebrow dark">LOCATION</p><h2>알프스 흑염소<br />찾아오시는 길</h2><dl><dt>주소</dt><dd>울산광역시 울주군 언양읍<br />정거고중길 2-27, 1동 2층</dd><dt>예약 문의</dt><dd><a href="tel:052-254-8306">052-254-8306</a></dd></dl><a className="mapBtn" href={mapUrl} target="_blank" rel="noreferrer">카카오맵으로 길찾기 ↗</a></div><a className="map" href={mapUrl} target="_blank" rel="noreferrer"><b>●</b><h3>알프스 흑염소</h3><p>언양읍 정거고중길 2-27</p><small>KAKAO MAP에서 보기 ↗</small></a></section>;
}
