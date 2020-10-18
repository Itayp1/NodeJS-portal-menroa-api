const { Schema, model } = require("mongoose");

const PageTitleSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  fontSize: {
    type: String,
    required: true,
  },
  fontColor: {
    type: String,
    required: true,
  },
});

const PageSubTitleSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  fontSize: {
    type: String,
    required: true,
  },
  fontColor: {
    type: String,
    required: true,
  },
});

const SearchBarSchema = new Schema({
  engineSearch: {
    type: String,
    required: true,
  },
  placeHolder: {
    type: String,
    required: true,
  },
});

const ApplicationSchema = new Schema({
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  openInNewTab: {
    type: Boolean,
    required: true,
  },
});

const PageDetailschema = new Schema({
  pageName: {
    type: String,
    required: false,
  },
  pageTitle: {
    type: PageTitleSchema,
    required: true,
  },
  pageSubTitle: {
    type: PageSubTitleSchema,
    required: true,
  },
  searchBar: {
    type: SearchBarSchema,
    required: true,
  },
  applicationList: {
    type: [ApplicationSchema],
    required: true,
  },
});

model("PageDetails", PageDetailschema);
