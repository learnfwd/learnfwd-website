import React, { Component } from 'react';
import styles from './signUpResp.css';
import Image from '../components/image';

styles.requestBox = 'mdl-grid ' + styles.requestBox;
styles.requestTitle = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.requestTitle;
styles.requestImage = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.requestImage;
styles.requestForm = 'mdl-cell mdl-cell--12-col mdl-cell--middle ' + styles.requestForm;

export default class Page extends Component {
  render() {
    return (
      <div className={styles.requestPage}>
        <div className={styles.requestBox}>
          <h1 className={styles.requestTitle}>Sign Up <br></br> for early access</h1>
          <div className={styles.requestImage}>
            <Image src='/img/hand-pointing-down.png' />
          </div>
          <h2>Request sent for</h2>
          <h2>john.fowles@gmail.com</h2>
          <h2>Mill Hill School</h2>
          <div className={styles.tickImage}>
            <Image src='/img/tick.png' />
          </div>
        </div>
      </div>
    );
  }
}
Page.displayName = 'LfpSignUpResp';
