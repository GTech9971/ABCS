import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './BaseMap.scss';

export const BaseMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const map = useRef<maplibregl.Map>();
    const [maker, setMaker] = useState<maplibregl.Marker>();


    useEffect(() => {
        if (!mapRef.current) { return; }

        console.log('render');

        map.current = new maplibregl.Map({
            container: mapRef.current,
            zoom: 20,
            center: [133.8409660201574, 34.339689006967006],
            minZoom: 5,
            maxZoom: 18,
            maxBounds: [122, 20, 154, 50],
            style: {
                version: 8,
                sources: {
                    osm: {
                        // 背景地図ソース
                        type: 'raster',
                        tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                        maxzoom: 19,
                        tileSize: 256,
                        attribution:
                            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    }
                },
                layers: [
                    // 背景地図レイヤー
                    {
                        id: 'osm-layer',
                        source: 'osm',
                        type: 'raster',
                    },
                ]
            }
        });

        map.current.on('click', (e) => {
            console.log(e);
            setMaker((prev) => {
                if (prev) {
                    prev.remove();
                }
                return new maplibregl.Marker().setLngLat(e.lngLat).addTo(map.current!);
            });
        });

        // 初期描画時にMapが小さくならないように対応
        map.current.on('load', (e) => {
            e.target.resize();
        });
    }, []);


    return (
        <div className='map-wrap'>
            <div ref={mapRef} className='map'></div>
        </div>
    )
};