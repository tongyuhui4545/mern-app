import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";
import Button from "../../shared/components/FormElements/Button";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "UNIQLO STORE",
    description: "Best Fast Fashion Apparel Chain Store",
    imageUrl:
      "https://prosple-content-api.global.ssl.fastly.net/sites/default/files/styles/scale_and_crop_center_890x320/public/2019-08/Banner-Uniqlo-Australia-890x320-2019.png?itok=DD1g-Hc-",
    address: "UNIQLO Harbour City, 3231 Canton Rd, Tsim Sha Tsui",
    location: { lat: 22.2812365, lng: 114.1809975 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "EB Games",
    description: "Game Store",
    imageUrl:
      "https://e.dam-img.rfdcontent.com/offers/008/841/553/600x600_smart_fit.jpg",
    address: "27 Harbour Rd, Wan Chai",
    location: { lat: 22.277152, lng: 114.1561324 },
    creator: "u2",
  },
  {
    id: "p3",
    title: "Yarra Rivers",
    description: "Melbourne River",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Melbourne_%28AU%29%2C_Yarra_River_--_2019_--_1431.jpg/1200px-Melbourne_%28AU%29%2C_Yarra_River_--_2019_--_1431.jpg",
    address:
      "10/F Lockhart Road Municipal Services Building, 225 Hennessy Road, Wanchai",
    location: { lat: 22.281354, lng: 114.1675203 },
    creator: "u3",
  },
  {
    id: "p4",
    title: "DFO",
    description: "Cheap Factory Store",
    imageUrl:
      "https://www.shoppingcentrenews.com.au/wp-content/uploads/DFO-Uni-Hill-entry-IIII.jpg",
    address:
      "Wan Chai, Hennessy Rd, 423號, Ka Nin Wah Commercial Building, 16B",
    location: { lat: 22.281354, lng: 114.1675203 },
    creator: "u4",
  },
];

function UserPlaces() {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
}

export default UserPlaces;
