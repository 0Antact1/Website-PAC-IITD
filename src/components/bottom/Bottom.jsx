import Post from './post-cards/Post.jsx'


function Bottom() {
  return (
    // <div className='bg-gray-900 bg-cover p-[3%]'>
    //   {/* <div className="absolute inset-0 bg-[url('assets/img/ship-interior.jpg')]" /> */}
    //   <h2 className='font-bold text-gray-300 justify-center text-4xl'>Faculty Team</h2>
    //   <div className='flex justify-center text-gray-300 pt-[5%] mb-30'>
    //     <Post/>
    //     <Post/>
    //     <Post/>
    //     <Post/>
    //   </div>
    // </div>

    <div className='relative bg-gray-900 bg-cover bg-[url("assets/img/ship-interior.jpg")] p-[3%]'>
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <h2 className='font-bold text-gray-300 text-4xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        Faculty Team
      </h2>

      <div className='flex justify-center text-gray-300 pt-[5%] mb-30'>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
    
  );
}

export default Bottom;
