const router = require("express").Router(),
  PAGEDETAILS = require("./routes/PageDetails");

router.use("/pageDetails", PAGEDETAILS);

module.exports = router;
