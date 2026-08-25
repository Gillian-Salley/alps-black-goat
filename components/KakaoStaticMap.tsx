"use client";

import Script from "next/script";
import { useCallback, useRef } from "react";

type KakaoMaps = {
  load: (callback: () => void) => void;
  LatLng: new (latitude: number, longitude: number) => unknown;
  StaticMap: new (
    container: HTMLElement,
    options: {
      center: unknown;
      level: number;
      marker: {
        position: unknown;
        text: string;
      };
    },
  ) => unknown;
};

declare global {
  interface Window {
    kakao?: {
      maps: KakaoMaps;
    };
  }
}

const LATITUDE = 35.596375;
const LONGITUDE = 129.1350684;

export default function KakaoStaticMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

  const initializeMap = useCallback(() => {
    if (!mapRef.current || !window.kakao?.maps) return;

    window.kakao.maps.load(() => {
      if (!mapRef.current || !window.kakao?.maps) return;

      // 개발 환경에서 중복 생성되는 것을 방지합니다.
      mapRef.current.replaceChildren();

      const position = new window.kakao.maps.LatLng(
        LATITUDE,
        LONGITUDE,
      );

      const marker = {
        position,
        text: "알프스 흑염소",
      };

      const options = {
        center: position,
        level: 3,
        marker,
      };

      new window.kakao.maps.StaticMap(mapRef.current, options);
    });
  }, []);

  if (!appKey) {
    return (
      <div className="flex h-[470px] items-center justify-center bg-[#e8e0d0] text-sm text-[#716c64]">
        카카오맵 API 키를 확인해 주세요.
      </div>
    );
  }

  return (
    <>
      <Script
        id="kakao-map-sdk"
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`}
        strategy="afterInteractive"
        onReady={initializeMap}
      />

      <div
        ref={mapRef}
        id="staticMap"
        className="h-[470px] w-full overflow-hidden max-md:h-[350px]"
        aria-label="알프스 흑염소 위치 지도"
      />
    </>
  );
}