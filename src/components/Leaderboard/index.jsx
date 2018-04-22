import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faMap from '@fortawesome/fontawesome-free-solid/faMapMarker';
import faFlag from '@fortawesome/fontawesome-free-solid/faFlag';
import faGlobe from '@fortawesome/fontawesome-free-solid/faGlobe';
import styles from './stylesheet.scss';
import { classes } from '/common/util';
import { Link } from "react-router-dom";

class Leaderboard extends React.Component {
  constructor(props) {
      super(props);
      this.hi = this.hi.bind(this);
      this.hi2 = this.hi2.bind(this);
      this.hi3 = this.hi3.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
  };
  handleScroll(e) {
    alert("hi");
  }
  hi() {
      for(var r = 2; r < document.getElementById("table").rows.length; r++)
      {
        var x = document.getElementById("table").rows[r].cells;
        x[0].innerHTML = "Syed Pervaiz";
        x[1].innerHTML = "Richardson, TX";
        x[2].innerHTML = "10,000";
      }
   }
  hi2() {
      for(var r = 2; r < document.getElementById("table").rows.length; r++)
      {
        var x = document.getElementById("table").rows[r].cells;
        x[0].innerHTML = "Some dood in California";
        x[1].innerHTML = "Palo Alto, CA";
        x[2].innerHTML = "50,000";
      }
   }
  hi3() 
  {
    for(var r = 2; r < document.getElementById("table").rows.length; r++)
    {
      var x = document.getElementById("table").rows[r].cells;
      x[0].innerHTML = "Jason Park";
      x[1].innerHTML = "Korea";
      x[2].innerHTML = "99,000";
    }
  }
  
  render() {
    return (
      <div onScroll={this.handelScroll} className={styles.task_list}>
        <div className={styles.cover}>
          <div className={styles.overlay}>
            <div className={styles.detail}>
              <span className={styles.name}>Leaderboard</span>
              <span className={styles.points}>Up to 37 LTB</span>
            </div>
          </div>
        </div>
          <table onScroll={this.scroll} id="table">
            <tbody className={styles.table}>
              <tr className={styles.tr}>
                <th onClick={this.hi} className={styles.button}><FontAwesomeIcon style={{color: 'black'}} fixedWidth icon={faMap} className={styles.icon} /></th>
                <th onClick={this.hi2} className={styles.button}><FontAwesomeIcon style={{color: 'black'}} fixedWidth icon={faFlag} className={styles.icon} /></th> 
                <th onClick={this.hi3} className={styles.button}><FontAwesomeIcon style={{color: 'black'}} fixedWidth icon={faGlobe} className={styles.icon} /></th>
              </tr>
              <tr className={styles.tr}>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Location</th> 
                <th className={styles.th}>Litterbugs</th>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Syed Pervaiz</td>
                <td className={styles.td}>Richardson, TX</td> 
                <td className={styles.td}>10,000</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Jason Park</td>
                <td className={styles.td}>Dallas, TX</td> 
                <td className={styles.td}>9,000</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>James Rayman</td>
                <td className={styles.td}>Garland, TX</td> 
                <td className={styles.td}>8,500</td>
              </tr>
            </tbody>
          </table>
      </div>
    );
  }
}

export default Leaderboard; 