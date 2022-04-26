const AirtablePlus = require("airtable-plus")

const airtable = new AirtablePlus({
    baseID: 'appR7um8HOVQxsYWq',
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Table 1",
    camelCase: true,
    transform: r => {
        delete r.id
        return r.fields
    }
})

export default async (_, res) => {
    const teacherInfo = await airtable.read();
    res.json(teacherInfo)
}