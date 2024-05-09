import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <p>
        The Swachhata app and Portal is to be used by citizens to help Municipal
        corporations spot the waterlogged areas in the city and take necessary
        steps.
      </p>
      <p>
        When any citizen spots a water-related issue in the city, he/she takes a
        picture through the website, uploads its image, and lodges a complaint
        which immediately reflects on the backend, which is to be monitored by
        Municipal corporation’s designated officials.
      </p>
      <p>
        Complaint is then assigned by the nodal officers to the relevant field
        official. The assigned official then goes, resolves the complaint, and
        takes a picture as proof that the complaint is resolved, which is to be
        uploaded on the website while marking the complaint as resolved.
      </p>
      <p>
        The status of the complaint being resolved and the picture as proof is
        then sent back to the website as a notification to the citizen that the
        complaint lodged has been rectified. The citizen can then give feedback
        on how the municipal corporation performed on the complaint lodged by
        giving a happy, neutral, or sad response and can also re-open the
        complaint if the citizen feels the complaint was not resolved at all.
      </p>
      <h2>Swachhata App</h2>
      <p>
        The Hon’ble Minister for Housing and Urban Affairs launched the
        Swachhata App (a grievance redressal tool), on 6th August 2016 for 4,041
        statutory towns of India. The App has been envisioned as an effective
        tool towards enabling citizens to have their grievances addressed by the
        concerned Municipal Corporation where a citizen can click a picture of
        the problem area and have the complaint delegated to the associated ward
        engineer by the Nodal Office of the city. The ward engineer can then
        work on the issue and update the status as ‘resolved’ using the
        Engineer’s version of the App.
      </p>
      <p>
        This way, the overall process makes it transparent for the citizen and
        the officials to track the complaints. The municipal corporations are
        hence engaged with the citizens to get their active support and
        involvement in rectifying the issue.
      </p>
      <h3>Our Motive:</h3>
      <p>Snap it! Map it! Trap it!</p>
      <h3>Features of Swachhata App</h3>
      <ul>
        <li>
          Citizens can report complaints / grievances by clicking and uploading
          a photograph of the issue to be reported.
        </li>
        <li>User-Friendly Interface.</li>
        <li>
          Easy tracking of water-related problems via photos and description.
        </li>
        <li>Geo-Tagged Images for increased credibility.</li>
        <li>Streamline catalogue and management of problems.</li>
        <li>The application is available in English and Hindi Language.</li>
      </ul>
    </div>
  );
};

export default About;
