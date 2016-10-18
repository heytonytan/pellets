import React from 'react';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionInfo from 'material-ui/svg-icons/action/info';

const ListDrawer = () => (
  <Drawer width='200' docked='true' open='true'>
    <List>
      <Subheader>Pellets</Subheader>
      <ListItem primaryText="Buy Oreos" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Eat Tu Lan" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Go to the Gym" rightIcon={<ActionInfo />} />
      <ListItem primaryText="Code" rightIcon={<ActionInfo />} />
    </List>
  </Drawer>
);

export default ListDrawer;