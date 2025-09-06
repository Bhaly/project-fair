// src/components/Footer.js

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>About Us</h3>
            <ul>
              <li><a href="/about">Company</a></li>
              <li><a href="#">Podcast</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="/media">Media Inquiries</a></li>
              <li><a href="/media/presskit">Press Kit</a></li>
              <li><a href="#">The Buy Nothing Home</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Community</h3>
            <ul>
              <li><a href="/guidelines">Community Guidelines</a></li>
              <li><a href="/diversity">Diversity & Accessibility</a></li>
              <li><a href="/safety">Safety & Trust</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Build Community</h3>
            <ul>
              <li><a href="/quickstart">Quick Start Guide</a></li>
              <li><a href="/build">Build a Buy Nothing Community</a></li>
              <li><a href="/academy">Buy Nothing Academy</a></li>
              <li><a href="/build">Tools & Resources</a></li>
              <li><a href="/aid">Humanitarian Aid</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Help Center / Contact</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Donate (tax-deductible)</a></li>
              <li><a href="/about/getinvolved">Get Involved!</a></li>
              <li><a href="/impact-partner">Become an Impact Partner</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
            <a href="/commitment">Community Commitment</a>
          </div>
          <div className="footer-copyright">
            <p>© 2025 Buy Nothing Project. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
