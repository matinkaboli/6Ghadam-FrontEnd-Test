import List from '@material-ui/core/List';
import Menu from '@material-ui/core/Menu';
import { NavLink } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import MenuItem from '@material-ui/core/MenuItem';
import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';

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
  avatar: {
    margin: 20,
  },
  toolbar: theme.mixins.toolbar,
  user: {
    display: 'flex',
  },
  userInfo: {
    marginTop: 18,
  },
  mainMenu: {
    margin: 5,
    marginLeft: 15,
    fontWeight: 600,
  },
  drawerPaper: {
    width: 300,
    position: 'relative',
  },
});

function Link(props) {
  return (
    <NavLink to={props.to}>
      <List className={props.classes.list}>
        <HomeIcon className={props.classes.icon} />
        <span className={props.classes.span}>{props.children}</span>
      </List>
      <Divider />
    </NavLink>
  );
}

const CustomLink = withStyles(styles)(Link);

class Section extends Component {
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
        </div>

        <List className={this.props.classes.mainMenu}>منو اصلی</List>

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

        <p>سیستم پیش بینی مسابقات ورزشی ۶ قدم</p>
        <p>Ver. 1.5.0.0</p>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Section);
