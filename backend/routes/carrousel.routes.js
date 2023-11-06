const express = require('express');
const carrouselRouter = express.Router();
const { S3Client, ListObjectsV2Command } = require('@aws-sdk/client-s3');

const bucketName = process.env.S3_BUCKET_NAME || 'default-bucket-name';

async function getS3ObjectUrls() {
  const client = new S3Client({}); // Voeg eventueel je AWS-regio toe: { region: "us-west-2" }
  const command = new ListObjectsV2Command({ Bucket: bucketName });

  try {
    const result = await client.send(command);
    return result.Contents.map((obj) => `https://${bucketName}.s3.amazonaws.com/${obj.Key}`);
  } catch (err) {
    console.error("Error fetching S3 objects:", err);
    return [];
  }
}

carrouselRouter.get('', async (req, res) => {
    const imageUrls = await getS3ObjectUrls();
    res.json(imageUrls.map(url => ({ url })));
});

module.exports = carrouselRouter;
