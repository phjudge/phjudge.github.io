const Gootenberg = require("gootenberg");
const credentials = require(`${process.env.PWD}/credentials.json`);
const seed = require(`${process.env.PWD}/src/utils/save-seed`);

const MY_SHEET_ID = "10YkpIfRy7Bj3TzsE-7-IreYsADhxBFAJEFcYhZpKnYc";

module.exports = async function() {
  const goot = new Gootenberg();
  await goot.auth.jwt(credentials);

  const response = await goot.parse.table(MY_SHEET_ID);

  response.data = response.data.filter(d => !d.private);

  // key tags so that projects can easily be filtered
  response.data.forEach(e => {
    e.tags = e.tags.split(/,\s*/g);
  });

  seed(JSON.stringify(response), `${__dirname}/../dev/googleSheet.json`);
};
