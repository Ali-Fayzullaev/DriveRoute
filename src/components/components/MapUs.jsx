import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function MapSection() {
  const position = [51.132438, 71.402994];

  return (
    <section id='contact' className="map-section py-5 position-relative">
      <div className="container">
        <h2 className="display-5 fw-bold text-center mb-5">НАШИ ОФИСЫ</h2>

        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="pe-lg-4">
              <h3 className="h4 fw-bold mb-4">Контакты</h3>
              <ul className="list-unstyled contact-list">
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-geo-alt-fill text-custom fs-5 me-3"></i>
                  <div>
                    <h4 className="h6 fw-bold mb-1">Главный офис</h4>
                    <p className="mb-0">г. Астана, ул. Узбекали Жанибек, 4</p>
                  </div>
                </li>
                <li className="mb-3 d-flex align-items-start">
                  <i className="bi bi-telephone-fill text-custom fs-5 me-3"></i>
                  <div>
                    <h4 className="h6 fw-bold mb-1">Телефон</h4>
                    <p className="mb-0">+775 110 18 00</p>
                  </div>
                </li>
                <li className="d-flex align-items-start">
                  <i className="bi bi-envelope-fill text-custom fs-5 me-3"></i>
                  <div>
                    <h4 className="h6 fw-bold mb-1">Email</h4>
                    <p className="mb-0">info@driveroute.kz</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="map-wrapper rounded-4 overflow-hidden shadow-lg">
              <MapContainer
                center={position}
                zoom={13}
                style={{ height: "400px", width: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                  <Popup>
                    <div className="map-popup ">
                      <h5 className="fw-bold mb-2">DriveRoute</h5>
                      <p className="small mb-1">
                        г. Астана, ул. Узбекали Жанибек, 4
                      </p>
                      <p className="small mb-0">+775 110 18 00</p>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
