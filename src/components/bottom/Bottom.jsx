import Post from './post-cards/Post.jsx'


function Bottom() {
  return (
    <div className='bg-gray-900 bg-cover p-[3%]'>
      <h2 className='font-bold text-gray-300 justify-center text-4xl'>Faculty Team</h2>
      <div className='flex justify-center text-gray-300 pt-[5%] mb-30'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
    
  );
}

export default Bottom;
