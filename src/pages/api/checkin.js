// pages/api/checkin.js
import { MongoClient } from 'mongodb';

export default async (req, res) => {
  const uri = process.env.MONGODB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    await client.connect();
    const db = client.db('dailyCheckinDb'); // Reference to your database
    const checkins = db.collection('checkins'); // Reference to your collection

    // Inserting a document for both morning and afternoon check-ins
    if (req.method === 'POST') {
      const checkinData = req.body;
      const result = await checkins.insertOne(checkinData);
      res.status(201).json({ success: true, _id: result.insertedId });
    } else {
      res.status(405).json({ success: false, error: 'Method not allowed.' });
    }
  } catch (error) {
    // Handle errors
    console.error('An error occurred:', error);
    res.status(500).json({ success: false, error: 'An error occurred while processing your request.' });
  } finally {
    await client.close();
  }
};
