import React from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionInfo from 'material-ui/svg-icons/action/info';
import ContentCreate from 'material-ui/svg-icons/content/create';
import TextField from 'material-ui/TextField';

const iconStyles = {
  marginRight: 24,
};

class ListDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  addItem() {
    if (this.state.text !== '') {
      console.log(this.state.text);
      this.props.newItem(this.state.text);
      this.setState({
        text: ''
      });      
    }
  }

  //Ref: http://stackoverflow.com/questions/29791721/how-get-data-from-material-ui-textfield-dropdownmenu-components
  _handleTextFieldChange(e) {
    this.setState({
      text: e.target.value
    });

  render() {
    return(
      <Drawer width={200} open={true}>
        <List>
          <Subheader>Pellets</Subheader>
          {this.props.list.map((item) => 
            (<ListItem primaryText={item.text} rightIcon={<ActionInfo />} />)
          )}
          <ListItem rightIcon={<ContentCreate onClick={this.addItem.bind(this)}/>}>
            <TextField hintText="New item" value={this.state.text} onChange={this._handleTextFieldChange.bind(this)} />
          </ListItem>
        </List>
      </Drawer>);
  }
}

export default ListDrawer;