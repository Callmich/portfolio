import React from "react";
import styled from "styled-components";

function Projects(){


    return (
        <div>
            <h3>Projects</h3>
            <section>
                <h4>DVST3 Calculator Landing Page</h4>
                <p>A Landing Page for a calculator intended to be used by victims of domestic violence to tally the cost of moving away from their current situation.</p>
                <p>Used HTML, CSS, & LESS</p>
                <a href="https://dvst3landingpage.netlify.com/"> Go to Landing Page</a>
                <a href="https://github.com/DVST3/dvst3-ui-landing-page">GitHub Repo</a>
                <ul>
                    <li>Responsible for building attractive and informative landing page for the team.</li>
                    <li>Also created a team page outlining our responsibilities and linked to our Github repos.</li>
                </ul>
            </section>
            <section>
                <h4>NASA APOD Viewer</h4>
                <p>A React Page displaying NASA's Astronomy Picture of the Day. It includes a search function to pull up previous dates.</p>
                <p>Used React, ReactStrap/BootStrap, & API Calls</p>
                <a href="https://github.com/Callmich/nasa-photo-of-the-day">GitHub Repo</a>
            </section>
            <section>
                <h4>Insta-Clone</h4>
                <p>A project utulizing React to mirror the look of Instagram</p>
                <p>Used React</p>
                <a href="https://github.com/Callmich/React-Components-Insta-Clone/tree/Michael-Callahan">GitHub Repo</a>
            </section>

        </div>

    )
}

export default Projects