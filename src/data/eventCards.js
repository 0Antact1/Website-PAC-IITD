// add data for cosmicon page cards

import starb from "../assets/img/starry-blue.jpg"

const eventCards = [
    {
        head: "Hello",
        image: starb,
        link: "/register?event=dance",      // make this /register?event=hello
        desc: "Give event description here"
    },
    {
        head: "Hello",
        image: starb,
        link: "/register?event=",
        desc: "Give event description here"
    },
]

export default eventCards;