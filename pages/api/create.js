const AirtablePlus = require("airtable-plus");
const axios = require("axios");

const airtable = new AirtablePlus({
    baseID: "appR7um8HOVQxsYWq",
    apiKey: process.env.AIRTABLE_API_KEY,
    tableName: "Table 1",
});

export const config = {
    api: {
      bodyParser: false,
    },
  }

export default async (req, res) => {
    if (req.query && req.body?.image) {
        const record = await airtable.create({
            "Teacher Name": req.query.teachername,
            Location: req.query.location,
            Bio: req.query.bio,
            Link: req.query.wishlist,
        });
        console.log(JSON.stringify(req.body))
        uploadImage(req.body.image, record.id);
        
        res.status(200).send(
            `Created record ${record.id}. Data inputed was ${JSON.stringify(
                req.query
            )}`
        );
    } else {
        res.status(400).send(`Couldn't create record.`);
    }
};


const AWS = require("aws-sdk");
const BUCKET_NAME = "teacher-lists";

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_CLIENT_ID,
    secretAccessKey: process.env.AWS_CLIENT_SECRET,
});

function uploadImage(binary, id) {
    s3.putObject(
        {
            Bucket: BUCKET_NAME,
            Key: `image-${id}.png`,
            Body: binary,
            ContentType: 'image/png',
            ACL: "public-read",
        },
        function (err, data) {
            if (err) console.log("error in aws function");
            console.log(err, data);
        }
    );
}