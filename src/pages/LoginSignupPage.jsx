import React, { useState } from 'react';
import { Header } from '../components/Header'; 
import { Footer } from '../components/Footer';
import { LoginSignup } from '../components/LoginSignup'



export const LoginSignupPage = () => {
    return (
        <div>
            <Header />
            <LoginSignup />
            <Footer />
        </div>
    );
  };


  
