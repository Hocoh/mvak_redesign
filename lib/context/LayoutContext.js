import React, { Component, createContext} from "react";

const LayoutContext = createContext();

export default class LayoutContextProvider extends Component {
  state={
    topPageVisible:""
  }
  isVisible= (element) => {
      var boundingClientRect = element.getBoundingClientRect();
      // window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body.clientHeight
      var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      console.log("boundingClientRect.top - viewHeight: ", boundingClientRect.top - viewHeight)
      let visibilityStatus= !(boundingClientRect.bottom < 0 || boundingClientRect.top - viewHeight >= 0);
      return this.updateDisplayingStatus("topPageVisible", visibilityStatus)
  }
  updateDisplayingStatus=(element,status)=>{
    this.setState({
      [element]:status
    }, () => console.log("in LayoutContextProvider, state update: ", this.state))
  }

  render() {
    let {isVisible, updateDisplayingStatus}=this;
    console.log("isVisible: ",isVisible)
    let {children}=this.props; 
    return (
      <LayoutContext.Provider
        value={{isVisible, ...this.state}}
      >
        {children}
      </LayoutContext.Provider>
    );
  }
}

export {LayoutContext}
