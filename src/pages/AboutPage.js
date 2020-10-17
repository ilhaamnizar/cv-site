import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title}/>

            <Content>
            <p>Hello, my name is Ilham. I'm a student who interested in Front End Developer, currently i'm learning React.</p>

            <p>I'm a fast learner person to every given task, passionate on business and technology field, very easy to adapt and blend to a new environment with good communication skill. Experienced in Hospitality service since 2018, and willing to learn a new thing. </p>

            <p>My latest project was build a front end for Document Management System (DMS) in PT Angkasa Pura Kargo called APDT (Angkasa Pura Kargo Document Tracking).</p>

            <p>That is the little brief about my self.</p>
            </Content>
        </div>
    )
}

export default AboutPage;