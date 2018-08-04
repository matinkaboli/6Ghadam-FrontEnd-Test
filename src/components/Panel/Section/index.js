import React, { Component } from 'react';
import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';

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
  link: {
    textDecoration: 'none',
    color: theme.palette.common.black,
  },
  avatar: {
    margin: 20,
  },
  toolbar: theme.mixins.toolbar,
  user: {
    display: 'flex',
    backgroundColor: green[100],
  },
  userInfo: {
    marginTop: 18,
  },
  mainMenu: {
    padding: 5,
    paddingLeft: 15,
    fontWeight: 600,
    backgroundColor: grey[200],
  },
  arrowDown: {
    marginTop: 35,
    marginLeft: 10,
    cursor: 'pointer',
  },
  drawerPaper: {
    width: 300,
    position: 'relative',
  },
});

function Link(props) {
  return (
    <NavLink to={props.to} className={props.classes.link}>
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
            <MenuItem onClick={this.closeMenu}>پروفایل</MenuItem>
            <MenuItem onClick={this.closeMenu}>زبان ها</MenuItem>
            <MenuItem onClick={this.closeMenu}>خروج</MenuItem>
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
            پنل کنترلی پیش بینی ها
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

        <p>سیستم پیش بینی مسابقات ورزشی ۶ قدم</p>
        <p>Ver. 1.5.0.0</p>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Section);
