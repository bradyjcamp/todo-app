import React from 'react';

export const SettingsContext = React.createContext();

class SettingsProvider extends React.Component {
  constructor(){
    super();
    this.state = {
      displayCompletedItems: false,
      numberOfDisplayedItems: 3,
      defaultSortField: '',
    }
  }

  render(){
    return(
      <SettingsContext.Provider value={this.state}>
        {this.props.children}
      </SettingsContext.Provider>
    )
  }
}

export default SettingsProvider;