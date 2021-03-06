import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './publishers.css';
import Image from '../components/image';
styles.maxwidth = 'mdl-grid ' + styles.maxwidth;
styles.front = 'mdl-grid ' + styles.front;
styles.frontImage = 'mdl-cell mdl-cell--6-col ' + styles.frontImage;
// styles.evolving = 'mdl-grid ' + styles.evolving;
styles.evolvingLeft = 'mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet ' + styles.evolvingLeft;
styles.evolvingRight = 'mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet ' + styles.evolvingRight;
// styles.fluid = 'mdl-grid ' + styles.fluid;
styles.fluidLeft = 'mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet ' + styles.fluidLeft;
styles.fluidRight = 'mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.fluidRight;
styles.collaborative = 'mdl-grid ' + styles.collaborative;
styles.collaborativeLeft = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--middle ' + styles.collaborativeLeft;
styles.collaborativeRight = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet mdl-cell--middle ' + styles.collaborativeRight;
// styles.embedded = 'mdl-grid ' + styles.embedded;
styles.assessmentImage = 'mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet ' + styles.assessmentImage;
styles.assessmentText = 'mdl-cell mdl-cell--7-col mdl-cell--8-col-tablet mdl-cell--middle ' + styles.assessmentText;
styles.classroomM = 'mdl-grid ' + styles.classroomM;
styles.classroomMleft = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet ' + styles.classroomMleft;
styles.classroomMright = 'mdl-cell mdl-cell--6-col mdl-cell--12-col-tablet ' + styles.classroomMright;
styles.kat = 'mdl-grid ' + styles.kat;
styles.katImage = 'mdl-cell mdl-cell--4-col mdl-cell--8-col-phone mdl-cell--middle ' + styles.katImage;
styles.katContent = 'mdl-cell mdl-cell--8-col ' + styles.katContent;
styles.control = 'mdl-grid ' + styles.control;
styles.controlLeft = 'mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet ' + styles.controlLeft;
styles.controlRight = 'mdl-cell mdl-cell--6-col mdl-cell--8-col-tablet ' + styles.controlRight;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.publishers}>
        <div className={styles.front}>
          <div className={styles.frontImage}>
            <Image src='/img/solutions-for-educational-publishers@2x.png'/>
          </div>
          <h1>Solutions for Educational Publishers</h1>
          <h2>You have the content.</h2>
          <h2>We add digitisation services, real-time technology and proven expertise.</h2>
          <h2>Together we create the best digital textbooks.</h2>
        </div>
        <div className={styles.evolving}>
          <div className={styles.maxwidth}>
          <div className={styles.evolvingLeft}>
            <h1>Textbooks are evolving.</h1>
            <h2>PDFs & ePubs are not genuine digital textbooks and your customers know that.</h2>
          </div>
          <div className={styles.evolvingRight}>
            <div className={styles.evolvingRightElementContainer}>
              <div className={styles.evolvingRightElement}>
                <Image src='/img/pdf-icon.png'/>
                <Image src='/img/tricky-arrow.png'/>
              </div>
              <div className={styles.evolvingRightElement} id='second-arrow'>
                <Image src='/img/epub-icon.png' />
                <Image src='/img/tricky-arrow.png'/>
              </div>
              <div className={styles.evolvingRightElement}>
                <Image src='/img/lfa-icon.png' />
              </div>
            </div>
            <div className={styles.evolvingRightElementContainer}>
              <div className={styles.evolvingRightElementBottom}>
                <span>static layout</span>
              </div>
              <div className={styles.evolvingRightElementBottom}>
                <span>no digital exercises only fit for individual studying</span>
              </div>
              <div className={styles.evolvingRightElementBottom}>
                <span>collaborative classroom-ready context-aware</span>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.fluid}>
          <div className={styles.maxwidth}>
          <div className={styles.fluidLeft}>
            <Image src='/img/publishers-fluid-image@2x.png'/>
          </div>
          <div className={styles.fluidRight}>
            <Image src='/img/publishers-fluid-layout@2x.png'/>
            <h1>Fluid Layout</h1>
            <h2>Your content can retain 90% of the print layout.</h2>
            <h2>And still adapt for all screen sizes.</h2>
          </div>
          </div>
        </div>
        <div className={styles.collaborative}>
          <div className={styles.maxwidth}>
          <div className={styles.collaborativeLeft}>
            <h1>Collaborative</h1>
            <h2>Education is a social process.</h2>
            <h2> We create textbooks that benefit from technologies, making them fit for modern classrooms where people learn together.</h2>
          </div>
          <div className={styles.collaborativeRight}>
            <Image src='/img/publishers-collaborative@2x.png' />
          </div>
          </div>
        </div>
        <div className={styles.embedded}>
          <div className={styles.maxwidth}>
          <div className={styles.assessmentImage}>
            <Image src='/img/publisher-embedded-image@2x.png'/>
          </div>
          <div className={styles.assessmentText}>
            <h1>Embedded assessments</h1>
            <h2>On average, the textbooks we digitise have 250+ exercises.</h2>
            <br></br>
            <h2>We think all should be digital and this is why we created 15+ types of digital assessments to cover your needs. </h2>
          </div>
          </div>
        </div>
        <div className={styles.classroomM}>
          <div className={styles.maxwidth}>
          <div className={styles.classroomMleft}>
            <div className={styles.vcenter}>
              <h1>Classroom management</h1>
              <h2>Embedded tools for creating and joining virtual classrooms. </h2>
              <h2>From inside the textbook!</h2>
            </div>
          </div>
          <div className={styles.classroomMright}>
            <Image src='/img/publishers-classroom-management-image@2x.png'/>
          </div>
          </div>
        </div>
        <div className={styles.kat}>
          <div className={styles.maxwidth}>
          <div className={styles.katImage}>
            <Image src='/img/publishers-meet-kat@2x.png'/>
          </div>
          <div className={styles.katContent}>
            <h1>Meet Kat</h1>
            <h2>Learning should be fun!</h2>
            <h2>We have added Kat, the teaching assistant. She knows when you struggle with an exercise, can offer suggestions and congratulates you when you make progress.</h2>
            <br/>
            <h2>Careful, though, she also gets mad! </h2>
          </div>
          </div>
        </div>
        <div className={styles.control}>
          <div className={styles.maxwidth}>
          <div className={styles.controlLeft}>
            <h1>Stay in control</h1>
            <h2>Most solution-providers tie you into their proprietary software. We use open-source standards and give you the largest possible degree of freedom. </h2>
          </div>
          <div className={styles.controlRight}>
            <h1>Custom developments</h1>
            <h2>We are open to making the integration with your LMS (i.e. for account management) or any other custom developements. </h2>
          </div>
          </div>
        </div>
        <div className={styles.getDemo}>
          <h1>We work with publishers big and small</h1>
          <h2>If you like what you see don’t hesitate to contact us.</h2>
          <h2>We’ll discuss your needs and our services, plus we can do a proper demo for you. </h2>
          <span className={styles.getDemoButton}>
            <Link to='/request'>GET A DEMO</Link>
          </span>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfPublishers';

