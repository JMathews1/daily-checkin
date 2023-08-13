import MorningCheckin from '../components/MorningCheckin';
import AfternoonCheckin from '../components/AfternoonCheckin';

function Home() {
  return (
    <div>
      <h1>Daily Checkin 👋</h1>

      <div className='form-container'>
        <MorningCheckin />
      </div>
      <div className='form-container'>
        <AfternoonCheckin />
      </div>
      <button></button>
    </div>
  );
}

export default Home;
