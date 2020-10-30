import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function Signup() {
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const handleSignIup = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({ displayName: FirstName, photoURL: Math.floor(Math.random() * 5) + 1 }).then(() => {
          history.push(ROUTES.BROWSE);
        });
      })
      .catch((error) => {
        setFirstName('');
        setPassword('');
        setEmailAddress('');
        setError(error.message);
      });
  };
  const isInvalid = password === '' || FirstName === '' || emailAddress === '';
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title> Sign Up</Form.Title>
          {error && <Form.Error> {error} </Form.Error>}
          <Form.Base onSubmit={handleSignIup} method="POST">
            <Form.Input
              placeholder="Your Name"
              value={FirstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a User? <Form.Link to={ROUTES.SIGN_IN}>Sign In!</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This Page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
