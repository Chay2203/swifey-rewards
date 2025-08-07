import { useState, useEffect } from 'react'
import './App.css'
import swifeyLogo from './assets/swifey-logo.svg'

function App() {
  const [isMobile, setIsMobile] = useState(false)

  const appStoreLink = 'https://apps.apple.com/us/app/swifey-dating/id6737560814'
  const playStoreLink = 'https://play.google.com/store/apps/details?id=com.flutter.r42.swifey'

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!isMobile) {
    return (
      <div className="desktop-redirect">
        <div className="redirect-content">
          <img src={swifeyLogo} alt="Swifey" className="redirect-logo" />
          <h1>Please open on mobile</h1>
          <p>This experience is designed for mobile devices.</p>
          <p>Please scan the QR code or open this link on your phone.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="swifey-rewards">
      <div className="rewards-container">
        {/* Header with Logo */}
        <div className="header-section">
          <img src={swifeyLogo} alt="Swifey" className="swifey-logo" />
          <h1 className="swifey-heading">Swifey Dating</h1>
        </div>

        {/* Points Display */}
        <div className="points-display">
          <div className="points-content">
            <div className="points-label">Your Points</div>
            <div className="points-value">42.00</div>
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="cta-section">
          <div className="cta-main">
            You got 42 points - Just download swifey to claim the points
          </div>
          <div className="cta-sub">
            You'll need to approve your profile in order to use the points
          </div>
        </div>

        {/* Download Buttons */}
        <div className="download-buttons">
          <a href={appStoreLink} className="download-button apple-store">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" fill="currentColor"/>
            </svg>
            <span>Download on App Store</span>
          </a>
          
          <a href={playStoreLink} className="download-button play-store">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" fill="currentColor"/>
            </svg>
            <span>Download on Google Play</span>
          </a>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="footer-text">
            Find your perfect match with Swifey!
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
