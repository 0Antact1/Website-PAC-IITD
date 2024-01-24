import Post from './post-cards/Post.jsx'
import './bottom.css'
import Footer from './footer/Footer.jsx';

function Bottom() {
  return (
    <>
      <h2 className='heading'>Faculty Team</h2>
      <div className='idk'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      <Footer/>
    </>
    
  );
}

export default Bottom;
