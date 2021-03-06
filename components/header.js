import React, { Component, PropTypes } from 'react';
import Sticky from 'react-sticky';

import { Link } from 'react-router';

import styles from './header.css';

import Jumbotron from './jumbotron';
import Menu from './menu';

export default class Header extends Component {
  render() {
    let jumbotron;
    const offset = (this.props.path === 'home') ? 230 : -1;

    if (this.props.path === 'home') {
      jumbotron = <Jumbotron />;
    }
    return (
      <header>
        {jumbotron}
        <Sticky className={styles.sticky} topOffset={offset} type={React.DOM.header}>
          <div className={'mdl-grid ' + styles.bar}>
            <Link className={'mdl-cell mdl-cell--3-col mdl-cell--3-col-tablet ' + styles.logo} to='/'>Learn Forward</Link>
            <Menu className={'mdl-cell mdl-cell--9-col mdl-cell--9-col-tablet ' + styles.nav} items={this.props.menu}/>
            <div className={styles.burger}>
              <div className={styles.burgericon}></div>
              <ul className={styles.burgerContent}>
                <li><Link to='/'>Home</Link></li>
                <li>Products:</li>
                <li><Link to='/authoring-tool'> &nbsp;&nbsp;- Learn Forward Author</Link></li>
                <li><a href="https://hypersay.com/" target="_blank"> &nbsp;&nbsp;-&nbsp;<span className="hyper">hyper</span><span className="say">say</span></a></li>
                <li>Solutions:</li>
                <li><Link to='/publishers'> &nbsp;&nbsp;- For Educational Publishers</Link></li>
                <li><Link to='/schools'> &nbsp;&nbsp;- For Schools and Teachers</Link></li>
                <li><Link to='/corporate'> &nbsp;&nbsp;- For Corporate Training</Link></li>
                <li><Link to='/team'>Team</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
              </ul>
            </div>
          </div>
        </Sticky>
      </header>
    );
  }
}

Header.displayName = 'LfHeader';
Header.propTypes = {
  menu: PropTypes.array,
  path: PropTypes.string,
};
