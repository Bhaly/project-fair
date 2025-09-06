// src/components/MainContent.js

import React from 'react';
import './MainContent.css';

const MainContent = () => {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="main-tagline">Buy Less. Share More.</h1>
          
          <div className="subtitle-section">
            <h2 className="hero-subtitle">
              Join The World's Largest<br />
              Network of Gifting Communities
            </h2>
          </div>
          
          <div className="benefits-section">
            <ul className="benefits-list">
              <li>• Reduce Waste - Give away what you no longer need</li>
              <li>• Save Money - Get what you want, for free</li>
              <li>• Build Community - Meet neighbors, share creatively</li>
            </ul>
            
            <a href="#" className="get-started-btn">
              Get started now →
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="testimonial-container">
          <div className="testimonial-illustration">
            <div className="bazaar-gallery">
              <img 
                src="https://www.shutterstock.com/image-vector/people-sellers-customers-characters-enjoying-600nw-2557639153.jpg"
                alt="BuyNothing Bazaar community event with people sharing clothes and items"
                className="testimonial-image"
              />
            </div>
          </div>
          
          <div className="testimonial-content">
            <blockquote className="testimonial-text">
              We had our first BuyNothing community event and it was a hit! Everyone went home with new (to them) clothes to update their wardrobes! We'll definitely do it again next year.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          <h2 className="stats-title">The Buy Nothing Project's Global Impact</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">13 M</div>
              <div className="stat-label">Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2.6 M</div>
              <div className="stat-label">Gifts per Month</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">245 K</div>
              <div className="stat-label">Communities</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">14 K</div>
              <div className="stat-label">Volunteers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook Groups Section */}
      <section className="facebook-section">
        <div className="facebook-container">
          <h2 className="facebook-title">Looking for Buy Nothing on Facebook?</h2>
          <div className="facebook-content">
            <p className="facebook-welcome">
              <strong>Welcome home!</strong> We've built something special just for our community.
            </p>
            <p className="facebook-description">
              <strong>Discover +1,000 thriving groups in your area</strong> on our purpose-built platform, 
              where sharing is simpler and connections are stronger.
            </p>
            <button className="facebook-btn">Find Your Local Groups</button>
          </div>
          <div className="facebook-features">
            <p>Free sign-up. Purpose-built for sharing. Enhanced community features</p>
          </div>
        </div>
      </section>

      {/* Available Now Section */}
      <section className="available-section">
        <div className="available-container">
          <h2 className="available-title">Available Now on BuyNothing</h2>
          <p className="available-description">
            Looking for something specific? With the <strong>BuyNothing App</strong>, you can find and request what you need, 
            giving it a second life while reducing consumption. Save money, strengthen your community, and help 
            protect the planet—all through our app-driven network.
          </p>
          
          <div className="gifts-grid">
            <div className="gift-card">
              <div className="gift-header">
                <div className="user-avatar">M</div>
                <div className="user-info">
                  <div className="user-name">Michael Marakanto</div>
                  <div className="post-time">September 5, 2025 at 6:13 PM</div>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="L-shaped sofa" className="gift-image" />
              <div className="gift-location">[Global post from Mount Holly, NJ US]</div>
              <div className="gift-description">L-shaped sofa. Free for pick up.</div>
            </div>
            
            <div className="gift-card">
              <div className="gift-header">
                <div className="user-avatar">L</div>
                <div className="user-info">
                  <div className="user-name">Liesl Clark</div>
                  <div className="post-time">August 31, 2025 at 1:39 AM</div>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dog coat" className="gift-image" />
              <div className="gift-location">[Global post from Carbondale, CO US]</div>
              <div className="gift-description">Zack and Zoey fleece lined dog coat. Still has lots of warmth to give. Size L.</div>
            </div>
            
            <div className="gift-card">
              <div className="gift-header">
                <div className="user-avatar">P</div>
                <div className="user-info">
                  <div className="user-name">Peg Wax-Ohani</div>
                  <div className="post-time">August 26, 2025 at 2:43 AM</div>
                </div>
              </div>
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Benjamin Walk shoes" className="gift-image" />
              <div className="gift-location">[Global post from Bloomfield, NJ US]</div>
              <div className="gift-description">Would anyone love these brand new beautiful Benjamin Walk Touch Up</div>
            </div>
          </div>
          
          <button className="find-gift-btn">Find my Gift</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Buy Nothing book" className="feature-image" />
            <h3 className="feature-title">Buy Nothing, Get Everything Plan.</h3>
            <p className="feature-description">
              Access our handbook through our local sharing—digital, audio, or print. 
              Ready to own it? Purchase below and share with your community.
            </p>
            <button className="feature-btn">Get now →</button>
          </div>
          
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Community building" className="feature-image" />
            <h3 className="feature-title">Build Community</h3>
            <p className="feature-description">
              Get free tools, training, and support to build a thriving local sharing network. Start today.
            </p>
            <button className="feature-btn">Start Now →</button>
          </div>
          
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Podcast" className="feature-image" />
            <h3 className="feature-title">Buy Nothing, The Podcast</h3>
            <p className="feature-description">
              Real Stories, Real Change. Discover how Buy Nothing transformed communities through personal stories from our movement makers.
            </p>
            <button className="feature-btn">Listen Now →</button>
          </div>
          
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" alt="Charitable donations" className="feature-image" />
            <h3 className="feature-title">Charitable Donations</h3>
            <p className="feature-description">
              Support Our Mission. Make a tax-deductible gift now. Every dollar keeps our sharing platform running.
            </p>
            <button className="feature-btn">Make Donation →</button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default MainContent;

