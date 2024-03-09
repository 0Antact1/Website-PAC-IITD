// add data for cosmicon page cards
import adil1 from "../assets/img_cosmicon/Aditya_L1_Workshop.jpeg"
import astroph from "../assets/img_cosmicon/Astrophotography_Workshop.jpeg"
import ch3 from "../assets/img_cosmicon/Chandrayan3Keynote.jpeg"
import eqnx from "../assets/img_cosmicon/Equinox.jpeg"
import grav from "../assets/img_cosmicon/Gravity.jpeg"
import ibm from "../assets/img_cosmicon/IBM_Quantum_Workshop.jpeg"
import mars from "../assets/img_cosmicon/MartianHabit.jpeg"
import obsses from "../assets/img_cosmicon/Night_Observation_Session.jpeg"
import rad from "../assets/img_cosmicon/Rad@Home.jpeg"


const eventCards = [
    {
        head: "Astrophotography Workshop",
        image: astroph,
        time: "11am, Mar 8, 2024",
        link: "https://unstop.com/o/bxgouEm?lb=HpXRugZ",      // make this https://link_to_google_form or WA invite
        desc: "Interaction with our esteemed guest speaker Soumyadeep Mukherjee."     // chhota sa caption
    },
    {
        head: "Chandrayaan 3 KEYNOTE",
        image: ch3,
        time: "2pm, Mar 8, 2024",
        link: "https://unstop.com/o/moxXUTB?lb=HpXRugZ",
        desc: "Enlightening keynote session featuring the esteemed Project Director of Chandrayaan 3"
    },

    {
        head: "GRAVITY (2013)",
        image: grav,
        time: "5pm, Mar 8, 2024",
        link: "https://unstop.com/o/mLcfDOb?lb=HpXRugZ",
        desc: "Embark on a captivating cinematic journey with Gravity"
    },

    {
        head: "Night Observation Session",
        image: obsses,
        time: "9pm, Mar 8, 2024",
        link: "https://unstop.com/p/observation-session-cosmicon-2024-iit-delhi-924166",
        desc: "Embark on a journey of discovery, exploring the infinite beauty and mystery of the universe."
    },
    {
        head: "IBM Quantum WORKSHOP",
        image: ibm,
        time: "11am, Mar 9, 2024",
        link: "https://unstop.com/o/UhWXKzR?lb=HpXRugZZ",
        desc: "Dive into the quantum realm with Dhiraj Madan, Advisory Research Scientist at IBM Research"
    },

    {
        head: "Aditya L1 KEYNOTE",
        image: adil1,
        time: "2pm, Mar 9, 2024",
        link: "https://unstop.com/o/CVYDZ1k?lb=HpXRugZ",
        desc: "Aditya L1: Celestial Odyssey Unveiled."
    },

    {
        head: "Equinox",
        image: eqnx,
        time: "4pm, Mar 9, 2024",
        link: "https://unstop.com/p/equinox-cosmicon-2024-iit-delhi-921534",
        desc: "Equinox, the ultimate test of lab skills and physics knowledge!"
    },

    {
        head: "Rad@ Home WORKSHOP",
        image: rad,
        time: "11am, Mar108, 2024",
        link: "https://unstop.com/o/WiCIXhO?lb=HpXRugZ",
        desc: "Join RAD@Home workshop and learn to analyze real astronomical data from your own home"
    },

    {
        head: "Martian Habit",
        image: mars,
        time: "4pm, Mar10, 2024",
        link: "https://unstop.com/o/374p6tw?lb=HpXRugZ",
        desc: "ISRU Challenge: Innovate Autonomous Martian Resource Utilization"
    },

]

export default eventCards;