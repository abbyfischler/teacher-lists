const AWS = require("aws-sdk");
const BUCKET_NAME = "teacher-lists";
const axios = require("axios");

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_CLIENT_ID,
    secretAccessKey: process.env.AWS_CLIENT_SECRET,
});

export default function uploadImage(req, res) {
    s3.upload(
        {
            Bucket: BUCKET_NAME,
            Key: `image-${req.body.id}.png`,
            Body: req.body.photoBuffer,
            ContentType: 'image/png',
            ACL: "public-read",
        },
        function (err, data) {
            if (err) console.log("error in aws function");
            console.log(err, data);
            res_data = data;
        }
    );
    res.send("uploaded!!!!!!");
}
