import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="text-center text-lg-start">
            <div className="text-center p-3">
            © 2025 Elder Techies. All rights reserved.
            </div>
            <div className="text-center p-3" style={{backgroundColor: "#07273d"}}>
            <a href="https://www.twitter.com/yourpage" className="text-white me-4">Twitter</a>
            <a href="https://www.youtube.com/yourpage" className="text-white me-4">YouTube</a>
            <a href="https://www.facebook.com/yourpage" className="text-white me-4">Facebook</a>
            <a href="https://www.instagram.com/yourpage" className="text-white me-4">Instagram</a>
            <a href="https://www.linkedin.com/in/yourprofile" className="text-white me-4">LinkedIn</a>
            </div>
        </footer>
    </div>
  )
}

export default footer