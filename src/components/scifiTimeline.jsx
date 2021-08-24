import React, { Component } from 'react';
import { timeline } from '../utils/timeline';

class ScifiTimeline extends Component {
    state = {  }

    componentDidMount() {
      this.renderTimeline('scifi-timeline');
    }

    renderTimeline = (element) => {
      timeline(element);
    }

    render() { 
        return ( 
            <div id="scifi-timeline">

            </div>
         );
    }
}
 
export default ScifiTimeline;