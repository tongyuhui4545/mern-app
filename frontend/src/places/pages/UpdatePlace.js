import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import Card from "../../shared/components/UIElements/Card";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./PlaceForm.css";

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [isLoading, setIsLoading] = useState(true);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: true,
      },
      description: {
        value: "",
        isValid: true,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
    }

    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button
        type="submit"
        disabled={!formState.isValid}
        onSubmit={placeUpdateSubmitHandler}
      >
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
