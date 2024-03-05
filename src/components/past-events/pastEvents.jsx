import React from 'react';

const PastEvents = ({events}) => {

  return (
    // <div className="bg-gray-900 text-white p-10">
    //   <h2 className="text-4xl font-bold mb-8 text-center text-yellow-300">Past Events</h2>

    //   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    //     {pastEventsData.map(event => (
    //       <div key={event.id} className="relative overflow-hidden rounded-lg shadow-md bg-purple-800">
    //         <img
    //           src={event.image}
    //           alt={event.title}
    //           className="w-full h-48 object-cover rounded-t-lg"
    //         />

    //         <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-transparent to-purple-900 bg-opacity-50 rounded-lg">
    //           <div className="text-center">
    //             <h3 className="text-lg font-bold mb-2 text-slate-400">{event.title}</h3>
    //             <p className="text-sm">{event.caption}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>

    <div class="bg-gray-950 px-4 py-10">
      <div class="max-w-7xl max-md:max-w-lg mx-auto">
        <h2 class="text-5xl mx-auto font-extrabold text-gray-300">Past Events</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">

          {/* --- Event Cards mapped --- */}
          {events.map(event => ( 
            <div class="bg-[#f5fcff] cursor-pointer rounded overflow-hidden group">
              <div class="relative overflow-hidden">
                <img src={event.image} alt="Event Banner" class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
                <div class="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-600 absolute bottom-0 right-0">{event.date}</div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-[#292b8c]">{event.title}</h3>
                <button type="button" class="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-600 hover:bg-orange-600">Read More</button>
              </div>
            </div>
          ))}

          <div class="bg-white cursor-pointer rounded overflow-hidden group">
            <div class="relative overflow-hidden">
              <img src="https://readymadeui.com/hacks-watch.webp" alt="Blog Post 2" class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
              <div class="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">April 20, 2023</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-[#333]">Hacks to Supercharge Your Day</h3>
              <button type="button" class="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
            </div>
          </div>
          <div class="bg-white cursor-pointer rounded overflow-hidden group">
            <div class="relative overflow-hidden">
              <img src="https://readymadeui.com/prediction.webp" alt="Blog Post 3" class="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300" />
              <div class="px-4 py-2.5 text-white text-sm tracking-wider bg-orange-500 absolute bottom-0 right-0">August 16, 2023</div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-[#333]">Trends and Predictions</h3>
              <button type="button" class="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-orange-500 hover:bg-orange-600">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
