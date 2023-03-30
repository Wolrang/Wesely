import React, { useEffect } from 'react';
import './MapContainer.css'

const { kakao } = window;

const MapContainer = ({ searchPlace }) => {
    let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(36.32877255687124, 127.42303441225876),
            level: 1
        };
        const map = new kakao.maps.Map(container, options);

        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(searchPlace, placesSearchCB);

        function placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                let bounds = new kakao.maps.LatLngBounds();

                for (let i = 0; i < data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }

                map.setBounds(bounds);
            }
        }

        function displayMarker(place) {
            let marker = new kakao.maps.Marker({
                map: map,
                position: new kakao.maps.LatLng(place.y, place.x)
            });

            kakao.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent('<div style="padding: 5px; font-size:12px;"></div>' + place.place_name + '</div>');
                infowindow.open(map, marker);
            })
        }
    }, [searchPlace]);



    return (
        <div className='MapContainer-box'>
            <div id='myMap'></div>
        </div>
    );
}

export default MapContainer; 