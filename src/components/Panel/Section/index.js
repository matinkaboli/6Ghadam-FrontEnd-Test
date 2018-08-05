import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import grey from '@material-ui/core/colors/grey';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import Favorite from '@material-ui/icons/Favorite';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';

const styles = theme => ({
  list: {
    display: 'flex',
    alignItems: 'center',
  },
  span: {
    paddingTop: 5,
    paddingLeft: 15,
  },
  icon: {
    marginLeft: 5,
  },
  info: {
    fontSize: 14,
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.common.black,
  },
  avatar: {
    margin: 20,
  },
  user: {
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: green[100],
  },
  version: {
    fontSize: 12,
  },
  toolbar: theme.mixins.toolbar,
  userInfo: {
    fontSize: 14,
  },
  homePage: {
    color: green[800],
  },
  mainMenu: {
    padding: 5,
    paddingLeft: 15,
    fontWeight: 600,
    backgroundColor: grey[200],
  },
  arrowDown: {
    marginTop: 15,
    marginLeft: 10,
    cursor: 'pointer',
  },
  activeLink: {
    color: green[500],
  },
  drawerPaper: {
    width: 300,
    position: 'relative',
  },
});

function Link(props) {
  return (
    <NavLink
      to={props.to}
      className={props.classes.link}
      activeClassName={props.classes.activeLink}>
      <ListItem className={props.classes.list} button>
        <HomeIcon className={props.classes.icon} />
        <ListItemText className={props.classes.span}>
          {props.children}
        </ListItemText>
      </ListItem>
      <Divider />
    </NavLink>
  );
}

const CustomLink = withStyles(styles)(Link);

class Section extends Component {
  state = {
    anchorEl: null,
  };

  shouldComponentUpdate() {
    return true;
  }

  openMenu = e => {
    this.setState({ anchorEl: e.currentTarget });
  };

  closeMenu = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    return (
      <Drawer
        variant='permanent'
        classes={{
          paper: this.props.classes.drawerPaper,
        }}
      >
        <div className={this.props.classes.toolbar} />

        <div className={this.props.classes.user}>
          <Avatar
            alt='User Avatar'
            src='/static/images/user.png'
            className={this.props.classes.avatar}
          />

          <div className={this.props.classes.userInfo}>
            <p>۶ قدم</p>
            <p>ceo@6ghadam.com</p>
          </div>

          <Button
            aria-haspopup='true'
            onClick={this.openMenu}
            aria-owns={this.state.anchorEl ? 'simple-menu' : null}
            className={this.props.classes.arrowDown}
          >
            <KeyboardArrowDown />
          </Button>


          <Menu
            onClose={this.closeMenu}
            anchorEl={this.state.anchorEl}
            open={Boolean(this.state.anchorEl)}
          >
            <MenuItem onClick={this.closeMenu}>
              <AccountCircle />
              پروفایل
            </MenuItem>

            <MenuItem onClick={this.closeMenu}>
              <Favorite />
              زبان ها
            </MenuItem>

            <MenuItem onClick={this.closeMenu}>
              <Favorite />
              خروج
            </MenuItem>
          </Menu>
        </div>

        <List className={this.props.classes.mainMenu}>منو اصلی</List>

        <List>
          <CustomLink to='/panel/manage-data'>
            پنل مدیریت داده های آماری
          </CustomLink>

          <CustomLink to='/panel/system-control'>
            پنل کنترلی سیستم
          </CustomLink>

          <CustomLink to='/panel/prediction-control'>
            پنل کنترل پیش بینی ها
          </CustomLink>

          <CustomLink to='/panel/accurate-prediction-control'>
            پنل کنترل پیش بینی های دقیق
          </CustomLink>

          <CustomLink to='/panel/manage-transaction'>
            پنل مدیریت تراکنش های مالی ثبت شده
          </CustomLink>

          <CustomLink to='/panel/manage-winners'>
            پنل مدیریت برندگان و جوایز
          </CustomLink>
        </List>

        <div className={this.props.classes.info}>
          <p className={this.props.classes.homePage}>
            سیستم پیش بینی مسابقات ورزشی ۶ قدم
          </p>

          <p className={this.props.classes.version}>Ver. 1.5.0.0</p>
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Section);
