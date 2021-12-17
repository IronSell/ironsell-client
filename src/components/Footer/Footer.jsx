import React from 'react';
import {GithubOutlined, LinkedinOutlined } from '@ant-design/icons'
import '../Footer/Footer.css';

function Footer() {
  
  return (
    <div className='footer'>

      <div className='columsFooter'>
        <p>Rocio Garcia:</p>
        <GithubOutlined className='logoGit'/>
        <LinkedinOutlined style={{color:'#1457b6'}}/>
      </div>

      <div className='columsFooter'>
        <p>Nacho Benito:</p>
        <GithubOutlined className='logoGit'/>
        <LinkedinOutlined style={{color:'#1457b6'}}/>
      </div>

      <div className='columsFooter'>
        <p>Federico Altava Redondo:</p>
        <GithubOutlined className='logoGit'/>
        <LinkedinOutlined style={{color:'#1457b6'}}/>
      </div>
    </div>
  );
}

export default Footer;