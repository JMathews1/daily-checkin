import MorningCheckin from '../components/MorningCheckin';
import AfternoonCheckin from '../components/AfternoonCheckin';

function Home() {
  return (
    <div>
      <h1>Daily Checkin</h1>
      <MorningCheckin />
      <AfternoonCheckin />
    </div>
  );
}

export default Home;
