import { MongoClient } from 'mongodb';
import AfternoonCheckin from '../components/AfternoonCheckin';

export async function getServerSideProps(context) {
  // Connect to your database
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  
  // Retrieve the morningData (modify this as needed for your schema)
  const db = client.db('yourDatabaseName');
  const morningData = await db.collection('yourMorningCollection').findOne({/* query to find the right data */});
  
  await client.close();

  return {
    props: { morningData }
  };
}

function AfternoonPage({ morningData }) {
  return (
    <div>
      <h1>Afternoon Checkin</h1>
      <AfternoonCheckin morningData={morningData} />
    </div>
  );
}

export default AfternoonPage;
