export default function Header() {
  return (
    <header className="header card">
      <div className="profile">
        <img 
          src="/profile.jpg" 
          className="profile-img"
        />
        <div>
          <h1>Matthew Vincentius</h1>
          <p>Web Developer | Frontend Specialist</p>
          <div className="social-links">
            <a href="https://github.com/MatthewVincentius"><i className="fab fa-github fa-beat" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </header>
  );
}