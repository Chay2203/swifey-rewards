import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [copyMessage, setCopyMessage] = useState('')

  const inviteCode = 'BR7QQE'
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

  const copyInviteCode = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode)
      setCopyMessage('Copied!')
      setTimeout(() => setCopyMessage(''), 2000)
    } catch (err) {
      setCopyMessage('Failed to copy')
      setTimeout(() => setCopyMessage(''), 2000)
    }
  }

  const shareInvite = async () => {
    const shareText = `Join me on Swifey! Use my invite code: ${inviteCode}\n\nDownload here:\niOS: ${appStoreLink}\nAndroid: ${playStoreLink}`
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join Swifey!',
          text: shareText,
        })
      } catch (err) {
        copyToClipboard(shareText)
      }
    } else {
      copyToClipboard(shareText)
    }
  }

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopyMessage('Share message copied!')
      setTimeout(() => setCopyMessage(''), 2000)
    } catch (err) {
      setCopyMessage('Failed to copy')
      setTimeout(() => setCopyMessage(''), 2000)
    }
  }

  if (!isMobile) {
    return (
      <div className="desktop-redirect">
        <div className="redirect-content">
          <h1>📱 Please open on mobile</h1>
          <p>This experience is designed for mobile devices.</p>
          <p>Please scan the QR code or open this link on your phone.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="swifey-rewards">
      <div className="rewards-container">

        <div className="points-display">
          <div className="points-content">
            <div className="points-text">
              <div className="points-label">Your Points</div>
              <div className="points-value">98.00</div>
            </div>
          </div>
        </div>

        <div className="description-section">
          <div className="main-description">
            10K points airdropped everyday to active users.
          </div>
          <div className="sub-description">
            Invite your friends to boost your points.
          </div>
        </div>

        <div className="invite-code-section">
          <div className="invite-code-container" onClick={copyInviteCode}>
            <div className="code-display">
              <span className="invite-code">{inviteCode}</span>
              <span className="copy-text">{copyMessage || 'Tap to copy'}</span>
            </div>
          </div>
        </div>

        <div className="referrals-section">
          <div className="referrals-header">
            <span className="referrals-label">Users Referred</span>
            <span className="referrals-count">3</span>
          </div>
          
          <div className="referrals-list">
            <div className="referral-item">
              <div className="referral-user">
                <div className="user-avatar"></div>
                <div className="user-name">MBola</div>
              </div>
              <div className="join-date">
                <span className="joined-label">Joined at </span>
                <span className="date-text">Mar, 13 2025</span>
              </div>
            </div>

            <div className="referral-item">
              <div className="referral-user">
                <div className="user-avatar"></div>
                <div className="user-name">Lucky</div>
              </div>
              <div className="join-date">
                <span className="joined-label">Joined at</span>
                <span className="date-text"> Mar, 9 2025</span>
              </div>
            </div>

            <div className="referral-item">
              <div className="referral-user">
                <div className="user-avatar"></div>
                <div className="user-name">Arya</div>
              </div>
              <div className="join-date">
                <span className="joined-label">Joined at</span>
                <span className="date-text"> Mar, 9 2025</span>
              </div>
            </div>
          </div>
        </div>

        <div className="share-button-container">
          <button className="share-button" onClick={shareInvite}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 8C19.6569 8 21 6.65685 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 5.12549 15.0077 5.24919 15.0227 5.37063L8.08261 9.19657C7.54305 8.46973 6.70861 8 5.77778 8C4.24365 8 3 9.34315 3 11C3 12.6569 4.24365 14 5.77778 14C6.70861 14 7.54305 13.5303 8.08261 12.8034L15.0227 16.6294C15.0077 16.7508 15 16.8745 15 17C15 18.6569 16.3431 20 18 20C19.6569 20 21 18.6569 21 17C21 15.3431 19.6569 14 18 14C17.0692 14 16.2347 14.4697 15.6952 15.1966L8.75523 11.3706C8.77025 11.2492 8.77778 11.1255 8.77778 11C8.77778 10.8745 8.77025 10.7508 8.75523 10.6294L15.6952 6.80343C16.2347 7.53027 17.0692 8 18 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Invite Friends</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
