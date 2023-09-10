import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef } from 'react';
import './BaseMap.scss';

export const BaseMap: React.FC = () => {
    const mapRef = useRef(null);

    useEffect(() => {
        if (!mapRef.current) { return; }

        const map = new maplibregl.Map({
            container: mapRef.current,
            zoom: 5,
            center: [138, 37],
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
        })
    }, []);




    return (
        <div className='map-wrap'>
            <div ref={mapRef} className='map'></div>
        </div>
    )
};