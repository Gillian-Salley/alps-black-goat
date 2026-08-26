"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

type KakaoMapInstance = {
  setCenter: (position: unknown) => void;
  setLevel: (level: number) => void;
};

type KakaoMarkerInstance = {
  setMap: (map: KakaoMapInstance) => void;
};

type KakaoMaps = {
  load: (callback: () => void) => void;

  LatLng: new (latitude: number, longitude: number) => unknown;

  Map: new (
    container: HTMLElement,
    options: {
      center: unknown;
      level: number;
    },
  ) => KakaoMapInstance;

  Marker: new (options: {
    position: unknown;
  }) => KakaoMarkerInstance;
};

declare global {
  interface Window {
    kakao?: {
      maps: KakaoMaps;
    };
  }
}

// 실제 알프스 흑염소 위치
const LATITUDE = 35.596375;
const LONGITUDE = 129.1350684;

// 반응형 지도 중심 좌표
const MOBILE_CENTER = {
  lat: 35.59665,
  lng: 129.13565,
};

const TABLET_CENTER = {
  lat: 35.59665,
  lng: 129.13545,
};

const DESKTOP_CENTER = {
  lat: 35.59665,
  lng: 129.13525,
};

export default function KakaoMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const kakaoMapRef = useRef<KakaoMapInstance | null>(null);

  const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;

  const getResponsiveMapOptions = useCallback(() => {
    const width = window.innerWidth;

    if (width < 768) {
      return {
        center: MOBILE_CENTER,
        level: 3,
      };
    }

    if (width < 1024) {
      return {
        center: TABLET_CENTER,
        level: 3,
      };
    }

    return {
      center: DESKTOP_CENTER,
      level: 4,
    };
  }, []);

  const initializeMap = useCallback(() => {
    if (!mapRef.current || !window.kakao?.maps) return;

    window.kakao.maps.load(() => {
      if (!mapRef.current || !window.kakao?.maps) return;

      // 개발 환경에서 중복 생성 방지
      mapRef.current.replaceChildren();

      const position = new window.kakao.maps.LatLng(
        LATITUDE,
        LONGITUDE,
      );

      const responsiveOptions = getResponsiveMapOptions();

      const center = new window.kakao.maps.LatLng(
        responsiveOptions.center.lat,
        responsiveOptions.center.lng,
      );

      const map = new window.kakao.maps.Map(mapRef.current, {
        center,
        level: responsiveOptions.level,
      });

      kakaoMapRef.current = map;

      // 매장 위치 마커
      const marker = new window.kakao.maps.Marker({
        position,
      });

      marker.setMap(map);
    });
  }, [getResponsiveMapOptions]);

  useEffect(() => {
    const handleResize = () => {
      if (!window.kakao?.maps || !kakaoMapRef.current) return;

      const responsiveOptions = getResponsiveMapOptions();

      const center = new window.kakao.maps.LatLng(
        responsiveOptions.center.lat,
        responsiveOptions.center.lng,
      );

      kakaoMapRef.current.setCenter(center);
      kakaoMapRef.current.setLevel(responsiveOptions.level);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getResponsiveMapOptions]);

  if (!appKey) {
    return (
      <div className="flex h-[470px] items-center justify-center bg-[#e8e0d0] text-sm text-[#716c64] max-md:h-[350px]">
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
        id="kakaoMap"
        className="h-[470px] w-full overflow-hidden max-md:h-[350px]"
        aria-label="알프스 흑염소 위치 지도"
      />
    </>
  );
}