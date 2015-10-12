import React, { Component } from 'react';
import Image from '../components/image';
import styles from './schools1.css';

styles.front = 'mdl-grid ' + styles.front;
styles.frontImage = 'mdl-cell mdl-cell--6-col ' + styles.frontImage;
styles.digitised = 'mdl-grid ' + styles.digitised;
styles.digitisedImage = 'mdl-grid mdl-cell--3-col' + styles.digitisedImage;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.schools}>
        <div className={styles.front}>
          <div className={styles.frontImage}>
            <Image src='/img/schools-teacher.png'/>
          </div>
          <h1>Solutions for Schools & Teachers</h1>
          <h2>There’s no EdTech without designing digital content & software that is reliable and easy to use in an actual classroom.</h2>
          <h2>We help you keep students engaged and save time in two ways.</h2>
        </div>
        <div className={styles.digitised}>
          <div className={styles.digitisedImage}>
            <Image src='/img/number-one.png'/>
          </div>
          <h1>Have your content digitised</h1>
          <h2>Designing lessons is part of a teacher’s best work.</h2>
          <h2>Why not having it digitised and used instead of buying expensive paper textbooks? </h2>
        </div>
      </div>
    );
  }
}

Page.displayName = 'LfSchools1';
