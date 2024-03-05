import styled from '@emotion/styled';
import { useEffect } from 'react';

type MapViewProps = {
  mapInfo?: { x: number; y: number; name: string; id: number }[];
};

const MapView = ({ mapInfo }: MapViewProps) => {
  useEffect(() => {
    if (mapInfo) {
      const mapOptions = {
        center: new naver.maps.LatLng(mapInfo[0].x, mapInfo[0].y),
        zoom: 16,
      };

      const map = new naver.maps.Map('map', mapOptions);

      const markers: naver.maps.Marker[] = [];
      const info: number[] = [];
      if (mapInfo) {
        for (let i = 0; i < mapInfo.length; i++) {
          const { x, y, id } = mapInfo[i];
          const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(x, y),
            map: map,
          });
          markers.push(marker);
          info.push(id);
        }
      }

      const getClickHandler = (seq: number) => {
        return function () {
          const infoKey = info[seq];

          console.log(infoKey); //id값으로 페이지 이동 ㄱㄱ
        };
      };

      for (let i = 0, ii = markers.length; i < ii; i++) {
        naver.maps.Event.addListener(markers[i], 'click', getClickHandler(i));
      }
    }
  }, []);

  return <MapWrap id="map"></MapWrap>;
};

const MapWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  width: 100%;
  height: 600px;
`;

export default MapView;
