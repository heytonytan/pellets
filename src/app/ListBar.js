import React from 'react';
import MobileTearSheet from './../../lib/MobileTearSheet';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionInfo from 'material-ui/svg-icons/action/info';

const ListBar = () => (
  <MobileTearSheet>
    <List>
      <Subheader>Pellets</Subheader>
      <ListItem primaryText="Buy Oreos" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Eat Tu Lan" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Go to the Gym" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Code" rightIcon={<ActionInfo />} />
    </List>
  </MobileTearSheet>
);

export default ListBar;