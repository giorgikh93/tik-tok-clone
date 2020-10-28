import React, { useState, useEffect, useContext } from 'react'
import './App.css';
import Video from './Video'
import db from './firebase'
import Login from './Login'
import { useConsumer } from './Context'
// rsf snippet functinal component

function App() {
  const [{user},dispatch] =useConsumer()

  const [videos, setVideos] = useState([])

  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => setVideos(snapshot.docs.map(doc => doc.data())))
  }, [])


  function handleLogout(){
    dispatch({type:'DELETE_USER', payload:null})
  }


  function handleToggle(){
    let logout = document.getElementById('logout')
    if(logout.classList.contains('none')){
      logout.classList.remove('none')
    }else{
      logout.classList.add('none')
    }
  }
  return (
    //BEM convention
    <div className="app">
      {user ?
      <>
        <div className='user'>
      <h1>{user?.user.displayName}</h1>
        <div className='imgWrapper'>
      <img className='profileImg' src={user?.user.photoURL} onClick={handleToggle}/>
      <div id='logout' className='none' onClick={handleLogout}>Logout</div>
        </div>
      </div>
        <div className='app__videos'>
          {videos.length > 0 && videos.map(
            (item) =>
              <Video
                key={item.song + item.channel}
                url={item.url}
                channel={item.channel}
                song={item.song}
                likes={item.likes}
                messages={item.messages}
                shares={item.shares}
                description={item.description}
              />
          )}
        </div>
</>
        : <Login />}
    </div>
  );
}

export default App;
