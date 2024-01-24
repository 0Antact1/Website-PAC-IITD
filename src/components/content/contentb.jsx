import React from 'react';

const ContentB = () => {
    return (
        <div class="bg-white pt-16 pr-4 pb-16 pl-4 md:px-24 lg:px-8 lg:py-20">
            <div class="mr-auto ml-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
                <div class="mr-auto mb-10 ml-auto md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 flex flex-col max-w-xl">
                <div>
                    <p class="mb-2 pt-3 pr-3 pb-3 pl-3 text-center text-white font-semibold bg-blue-700 tracking-wider text-xs
                        rounded-full inline-block uppercase">Latest Package</p>
                </div>
                <div class="mt-6 mr-auto mb-6 ml-auto text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl
                    max-w-lg font-sans">
                    <div class="inline relative">
                    <span class="items-center justify-center w-32 text-blue-300 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block flex absolute
                        top-0 left-0 z-0 -mt-8 -ml-20">
                        <svg viewbox="0 0 52 24" fill="currentColor" class="w-full h-full"><defs><pattern
                            id="9ef1ff62-feb2-41fe-8163-772b4c79de7b" x="0" y="0" width=".135" height=".30"><circle cx="1" cy="1"
                            r=".7"/></pattern></defs><rect fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)" width="52"
                            height="24"/></svg>
                    </span>
                    <p class="font-bold text-3xl tracking-tight sm:text-4xl sm:leading-none inline font-sans">Improve</p>
                    </div>
                    <p class="font-bold text-3xl tracking-tight ml-1 sm:text-4xl sm:leading-none inline font-sans">your day</p>
                    <p class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none font-sans">to the MAX with Music</p>
                </div>
                <p class="text-base text-center text-gray-700 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div class="mr-auto ml-auto lg:max-w-2xl relative">
                <div class="w-full relative transition-shadow duration-300 hover:shadow-xl">
                    <img
                        src="https://images.unsplash.com/photo-1524508762098-fd966ffb6ef9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" class="rounded object-cover w-full h-56 shadow-lg sm:h-64 md:h-80 lg:h-96"/>
                    <a class="items-center justify-center w-full h-full bg-gray-900 absolute inset-0 flex transition-colors
                        duration-300 bg-opacity-50 group hover:bg-opacity-25">
                    <div class="items-center justify-center w-16 h-16 bg-gray-900 shadow-2xl flex rounded transition duration-300
                        transform group-hover:scale-110">
                        <span class="items-center justify-center w-10 text-white flex">
                        <svg class="w-full h-full" fill="currentColor" viewbox="0 0 24 24"><path
                            d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10
                            c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"/></svg>
                        </span>
                    </div>
                    </a>
                </div>
                </div>
            </div>
        </div>
    );
}

export default ContentB;
