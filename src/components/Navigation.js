import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import { signIn, signOut } from '../Auth';

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgrey;
`;

const Profile = styled.span`
  margin-left: 15px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  max-width: 30px;
  margin-rifht: 5px;
`;
export default ({ user }) => (
  <NavigationBar className="d-flex flex-row">
    <div className="p-2">
      <Link className="btn btn-primary" to="/">
        To-Do List
      </Link>
    </div>
    <div className="p-2">
      <Link className="btn btn-secondary" to="/new-item">
        + Add New
      </Link>
    </div>
    <div className="p-2">
      {!user && <Button onClick={signIn}>Login</Button>}
    </div>
    <div className="p-2">
      {user && (
        <Fragment>
          <Button onClick={signOut}>Logout</Button>
          <Profile>
            <ProfilePicture scr={user.profile.picture} />
            {user.profile.email}
          </Profile>
        </Fragment>
      )}
    </div>
  </NavigationBar>
);
