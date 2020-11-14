import { useState } from 'react';
import { connectToDatabase } from '../util/mongodb';

export default function PrayerList(props) {
  const [hover, setHover] = useState(false);
  const prayerAcceptHandler = () => {
    console.log('prayer accepted');
  };
  return (
    <>
      <main id="maincontent">
        <h1 id="pagetitle">Prayer List</h1>
        <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto', marginTop: '170px' }}>
          <div
            style={{
              position: 'fixed',
              width: '100%',
              height: '200px',
              backgroundColor: 'white',
              top: 0,
              left: 0,
              zIndex: 50
            }}
          ></div>
          <ul>
            {props.posts.map((prayer) => (
              <div key={prayer._id} style={{ display: 'flex', flexDirection: 'row', position: 'relative' }}>
                <card
                  onMouseEnter={() => setHover({ [prayer._id]: true })}
                  onMouseLeave={() => setHover({ [prayer._id]: false })}
                  style={{ margin: 1 }}
                >
                  {prayer.status === 'new' ? (
                    <button style={{ backgroundColor: 'purple', color: 'white', marginBottom: 5, padding: 2 }}>
                      New
                    </button>
                  ) : (
                    <div></div>
                  )}

                  <h6 style={{ justifyContent: 'left' }}>{prayer.sender}</h6>
                  {hover[prayer._id] ? (
                    <p>{prayer.prayer}</p>
                  ) : (
                    <p>{prayer.prayer ? prayer.prayer.slice(0, 120) + '...' : prayer.prayer}</p>
                  )}
                  <div style={{ position: 'absolute', top: 0, right: 0 }}>
                    <button
                      onClick={() => prayerAcceptHandler()}
                      style={{ margin: 10, backgroundColor: '#36bbee', padding: 3 }}
                    >
                      Yes {prayer.sender}, I'll pray
                    </button>
                  </div>
                </card>
                <br></br>
              </div>
            ))}
            <div style={{ height: 100 }}></div>
          </ul>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const posts = await db.collection('prayers').find({}).limit(20).toArray();
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts))
    }
  };
}
