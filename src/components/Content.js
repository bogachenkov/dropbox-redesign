import React, { Component } from 'react';
import ScrollArea from 'react-scrollbar';

import View from './View';
import Panel from './Panel';

class Content extends Component {

  state = {
    selectedItems: []
  }

  selectItemHandler = e => {

  }
  
  render() {
    return (
      <div>
        <Panel selectedItems={this.state.selectedItems} />
        <ScrollArea speed={1} horizontal={false} smoothScrolling={true} className="scroll" contentClassName="content">
          <View />  
        </ScrollArea>
      </div>
    )
  }
};



export default Content;