const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appR7um8HOVQxsYWq",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "Table 1",
});

export default async (req, res) => {
  if (req.query) {
    const record = await airtable.create({
      "Teacher Name": req.query.teachername,
      Location: req.query.location,
      Bio: req.query.bio,
      Link: req.query.wishlist,
    });
    res
      .status(200)
      .send(
        `Created record ${record.id}. Data inputed was ${JSON.stringify(
          req.query
        )}`
      );
  } else {
    res.status(400).send(`Couldn't create record.`);
  }
};
