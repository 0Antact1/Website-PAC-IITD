import React from 'react';

import starb from "../../assets/img/starry-blue.jpg"

const SectionCard = () => {
    return (
    <section class="mx-20 items-center">
        <div class="flex flex-wrap mx-auto md:flex-nowrap p-12 justify-center">

            <a href="">
            <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={starb} alt="blog" />
                <div class="px-6 py-8">
                    <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                    <span class="">Entry</span>
                    </h4>
                    <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you.</p>
                </div>
                </div>
            </div>
            </a>

            <a href="">
            <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/assets/images/placeholders/neon-4.jpg" alt="blog" />
                <div class="px-6 py-8">
                    <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                    <span class="">Entry</span>
                    </h4>
                    <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you.</p>
                </div>
                </div>
            </div>
            </a>

            <a href="">
            <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src="/assets/images/placeholders/neon-2.jpg" alt="blog" />
                <div class="px-6 py-8">
                    <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                    <span class="">Entry</span>
                    </h4>
                    <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you.</p>
                </div>
                </div>
            </div>
            </a>

            <a href="">
            <div class="flex w-full">
                <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
                <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={starb} alt="blog" />
                <div class="px-6 py-8">
                    <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                    <span class="">Entry</span>
                    </h4>
                    <p class="mt-4 text-base font-normal text-gray-500 leading-relax">Install Tailwind CSS without any Javascript Framewrok locally with purgeCSS, enable the dark mode option, prefferences or class is upt to you.</p>
                </div>
                </div>
            </div>
            </a>

        </div>
    </section>
    );
}

export default SectionCard;
