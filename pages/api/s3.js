
const AWS = require("aws-sdk");
const BUCKET_NAME = "teacher-lists";

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_CLIENT_ID,
    secretAccessKey: process.env.AWS_CLIENT_SECRET,
});

function uploadFile(id, type) {
    s3.putObject(
        {
            Bucket: BUCKET_NAME,
            Key: `image-${id}.png`,
            Body: binary,
            ContentType: type,
            ACL: "public-read",
        },
        function (err, data) {
            if (err) console.log("error in aws function");
            console.log(err, data);
        }
    );
}