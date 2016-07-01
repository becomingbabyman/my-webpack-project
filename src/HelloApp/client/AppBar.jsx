import { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class AppBarExampleIconMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    }
  }

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }

  handleCloseMenu = () => {
    this.setState({
      openMenu: false,
    });
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }

  render() {
    return (
      <AppBar
        title="Title"
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton tooltip="show more" onClick={this.handleOpenMenu}>
                <MoreVertIcon />
              </IconButton>
            }
            open={this.state.openMenu}
            onRequestChange={this.handleOnRequestChange}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            >
            <MenuItem primaryText="Refresh" onClick={this.handleCloseMenu} />
            <MenuItem primaryText="Help" onClick={this.handleCloseMenu} />
            <MenuItem primaryText="Sign out" onClick={this.handleCloseMenu} />
          </IconMenu>
        }
        />
    )
  }
}
