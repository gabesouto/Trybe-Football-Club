import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import LeaderboardBtn from '../components/LeaderboardBtn';
import MatchesBtn from '../components/MatchesBtn';
import { requestLogin, setToken, requestData } from '../services/requests';
import { positiveLogo } from '../images';
import '../styles/components/signUpForm.css';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {

    return (
        <> 
         <Header
                page="SIGN UP"
                FirstNavigationLink={LeaderboardBtn}
                SecondNavegationLink={MatchesBtn}
            />
        <div className='main-container'>
          <SignUpForm />
        </div>
        </>
    );
};

export default SignUp;
