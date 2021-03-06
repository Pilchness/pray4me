import { useState } from 'react';
import { postData } from '../components/postData';
export default function Home() {
  const [prayerContent, updatePrayerContent] = useState('Hear my prayer.');
  const [prayerSender, updatePrayerSender] = useState('Anonymous');

  const submitHandler = () => {
    postData(prayerContent, prayerSender);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h1>Pray for me...</h1>

        <form className="form">
          <div
            contentEditable
            placeholder="Type your prayer here and then press AMEN."
            id="textarea"
            onInput={(e) => updatePrayerContent(e.currentTarget.textContent)}
            style={{
              height: '15vw',
              width: '40vw',
              backgroundColor: 'lightblue',
              color: '#015965',
              textAlign: 'left',
              fontFamily: 'sans-serif',
              fontSize: '1.5vw',
              marginBottom: 2
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '40vw'
            }}
          >
            <input
              type="text"
              placeholder="A name, real or otherwise"
              onChange={() => updatePrayerSender(event.target.value)}
              style={{
                width: '30vw',
                height: '3vw',
                textAlign: 'left',
                fontFamily: 'sans-serif',
                marginRight: 2,
                fontSize: '1.5vw'
              }}
            />
            <button
              type="submit"
              id="login-button"
              onClick={() => {
                submitHandler();
              }}
              style={{
                width: '12vw',
                height: '3vw',
                alignSelf: 'flex-start',
                marginLeft: 2,
                fontSize: '2vw',
                fontFamily: 'Tahoma, sans-serif'
              }}
            >
              Amen
            </button>
          </div>
        </form>
      </div>

      <ul className="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <footer></footer>
    </div>
  );
}
