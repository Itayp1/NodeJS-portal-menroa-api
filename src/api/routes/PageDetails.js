const router = require("express").Router();
const PageDetails = require("../../services/PageDetails");
const looger = require("../../loaders/looger");

router.post("/", async (req, res) => {
  try {
    const { body } = req;
    const pageDetails = new PageDetails(body.pageName);

    const result = await pageDetails.update(body);

    res.json(result);
  } catch (error) {
    res.send(error);
    looger.error(`error in PageDetails ${error.stack}`);
  }
});

router.get("/:pageName", async (req, res) => {
  try {
    const { pageName } = req.params;

    const pageDetails = new PageDetails(pageName);
    const { pageTitle, pageSubTitle, searchBar, applicationList } = await pageDetails.getDetails();

    const applicationListWithNumId = applicationList.map(({ _id, icon, text, link, openInNewTab }) => {
      return { icon, text, link, openInNewTab, idNum: _id };
    });

    res.json({ pageName, pageTitle, pageSubTitle, searchBar, applicationList: applicationListWithNumId });
  } catch (error) {
    res.send(error);
    looger.error(`error in PageDetails ${error.stack}`);
  }
});

module.exports = router;
