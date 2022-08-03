const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Uniqlo Store",
    description: "One of the best international apparel chain stores",
    location: {
      lat: 37.8112497,
      lng: 144.8140554,
    },
    address: "269/321 Lonsdale St, Melbourne VIC 3000, Australia",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    const error = new Error("Could not find a place for the provided id");
    error.code = 404;
    throw error;
  }
  res.json({ place });
});
router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    const error = new Error("Could not find a place for the provided id");
    error.code = 404;
    next(error);
  }
  res.json({ place });
});

module.exports = router;
