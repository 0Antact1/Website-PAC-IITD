import React from 'react';
import TeamCarousel from '../components/team/teamCarousel';
import teamMembers from "../data/team";

const TeamPage = () => {

  return (
    <div className='bg-[url(https://media.giphy.com/media/3o7btTF6vCPUethgA0/giphy.gif)]
      bg-cover bg-center h-screen text-center overflow-hidden flex flex-col justify-center'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-2 md:mt-0'>
        <h1 className='font-extrabold text-4xl lg:text-4xl 2xl:text-6xl text-white'>Our Team</h1>
      </div>
      <TeamCarousel className='w-full' teamMembers={teamMembers} />
    </div>
  );
};

export default TeamPage;

