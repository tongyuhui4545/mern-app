const axios = require("axios");

const HttpError = require("../models/http-error");

const API_KEY = "AIzaSyBJbZcPfZhLeCi5WB8r7TBKKHYXEW4ntyw";

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )},+Mountain+View,+CA&key=${API_KEY}`
  );

  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specific address",
      404
    );
    throw error;
  }

  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAddress;
