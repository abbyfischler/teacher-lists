const AirtablePlus = require("airtable-plus");

const airtable = new AirtablePlus({
  baseID: "appR7um8HOVQxsYWq",
  apiKey: process.env.AIRTABLE_API_KEY,
  tableName: "Table 1",
  camelCase: true,
  transform: (r) => {
    r.fields["id"] = r.id;
    delete r.id;
    return r.fields;
  },
});

export default async (_, res) => {
  const teacherInfo = await airtable.read({
    sort: [{ field: "time", direction: "desc" }],
  });
  res.json(teacherInfo);
};
