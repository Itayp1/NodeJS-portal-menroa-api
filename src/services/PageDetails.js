const mongoose = require("mongoose"),
  PageDetailsDB = mongoose.model("PageDetails");

class PageDetails {
  constructor(pageName) {
    this.pageName = pageName;
  }
  async update(obj) {
    let result = await PageDetailsDB.findOneAndUpdate({ pageName: this.pageName }, obj);
    if (result == null) {
      const pageDetails = new PageDetailsDB(obj);
      result = await pageDetails.save();
    }

    return result;
  }

  async getDetails() {
    const result = await PageDetailsDB.findOne({ pageName: this.pageName });
    return result;
  }
}

module.exports = PageDetails;
