import React, {Component} from 'react';
import './App.css';
import {Authenticator} from 'aws-amplify-react';
import {Amplify} from 'aws-amplify';
import '@aws-amplify/ui/dist/style.css';

export default class App extends Component {
  componentDidMount() {
    Amplify.configure({
      mandatorySignIn: true,
      region: process.env.REACT_APP_AWS_REGION,
      userPoolId: process.env.REACT_APP_POOL_ID,
      identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_APP_CLIENT_ID
    })
  }

  render() {
    return (
    <div><Authenticator /></div>
    )
  }
}