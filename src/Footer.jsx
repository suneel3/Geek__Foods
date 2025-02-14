import logo from "/src/assets/logo.jpg"
function Footer(){
  return (
    <>
      <footer>
         <div className="footer-container">
             <div className="icons">
             <img src={logo} alt="" />
                <h4>GeeksFoods</h4>
             </div>
             <div className="about-para">
                <p>"© 2024 GeekFoods. All rights reserved. Crafted with love and passion for burger enthusiasts worldwide."</p>
             </div>
             <div className="footer-menu">
             <ul>
                <li>About</li>
                <li>Career</li>
                <li>History</li>
                <li>Services</li>
                <li>Project</li>
                <li>Blog</li>
             </ul>
             </div>

             <div className="social-icon">
             <i class="fa-brands fa-facebook"></i>
             <i class="fa-brands fa-instagram"></i>
             <i class="fa-brands fa-twitter"></i>
             <i class="fa-brands fa-github"></i>
             <i class="fa-brands fa-dribbble"></i>
             </div>
         </div>
      </footer>
    </>
  )
}
export default Footer;