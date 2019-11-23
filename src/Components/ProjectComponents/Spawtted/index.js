import React from 'react'

export default function Spawtted() {
    return (
        <div>
            {/* <p>Spawtted summary</p> */}

            <hr/>
            <p>
                **NOTE: for some reason, the deployed link isn't displaying the missing pet postings on the map, though they still appear
                in the side list - I'll try to investigate what the issue is and get it solved as, at the time of our presentation, it was
                working
            </p>
            <hr/>

            <h6>Background</h6>
            <p>
                Spawtted was project #2 in the bootcamp. One of our group members, Monica, was responsible for the idea.
                She wanted to build an application that could help pet owners who had lost their pets to post location based
                information about their pet and that would allow other users to report likely sightings.
            </p>

            <hr/>

            <h6>Technologies Used</h6>
            <p>
                For this project we were able to utilize the full stack, employing Node/Express on the backend. We got our first
                taste of HTML templating using Handlebars and used MySQL for our database
            </p>

            <hr />

            <h6>Challenges</h6>
            <p>
                Deployment to Heroku gave us issues - 
            </p>

            <h6>Lessons Learned</h6>
            <p>
                In the same way that I had some lightbulb moments about JSON during Carpoolify, I'd say my biggest lightbulb moment here
                was getting really comfortable with how data moves between the front and the back end

                The nature of this bootcamp was such that new knowledge and concepts were being introduced at a fairly rapid pace and initially
                the usage of unified data across the full stack had my head spinning slightly - GETS &amp; POSTS &amp; window.reloads &amp; SQL queries &amp; res.json's -
                it was a lot of new information and protocol to be trying to implement into the project without having a confidently concrete
                grasp of it all.

                But there was a moment I distinctly remember when I was working on the new listing JS code where it all kinda just clicked for me and I saw
                what I needed to send to the back from the front, what I needed to send to the database from the back and what I needed to then return to the front
                to display the new information onscreen. It felt as if I was watching the data flow and I could see really clearly what had been a bit murky to me.

            </p>


        </div>
    )
}
