// (mostly) imported from build week marketing page
// feel free to make changes to this
const Home = () => {
	return (
		<div id="wrapper">


			<header id="header" className="alt style2">
				<a href="index.html" className="logo"><strong>Forty</strong> <span>by HTML5 UP</span></a>
				<nav>
					<a href="#menu">Menu</a>
				</nav>



				<nav id="menu" className='menu'>
					<ul className="links">
						<li><a href="/">Home</a></li>
						<li><a href="/signup-user">Sign Up</a></li>
						<li><a href="/login">Login</a></li>
						<li><a href="/posts">Posts</a></li>
					</ul>
					<ul className="actions stacked">
						<li><a href="/signup-user" className="button primary fit">Get Started</a></li>
						<li><a href="/login" className="button fit">Log In</a></li>
					</ul>
				</nav>
			</header>


			<section id="banner" className="style2">
				<div className="inner">
					<span className="image">
						<img src="images/pic07.jpg" alt="" />
					</span>
					<header className="major">
						<h1>Co-Make</h1>
					</header>
					<div className="content">
						<p>Ever get frustrated that a problem in your town or neighborhood goes ages without being resolved? You might have road issues (potholes, dangerous areas), overgrown plants, or anything else that makes living where you live a little less pleasant. With Co-make you can make your voice heard on the issues you would like to see resolved in your community.
								</p>
					</div>
				</div>
			</section>


			<div id="main">


				<section id="three">
					<div className="inner">
						<header className="major">
							<h2>Massa libero</h2>
						</header>
						<p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
						<ul className="actions">
							<li><a href="/signup-user" className="button next">Get Started</a></li>
						</ul>
					</div>
				</section>

			</div>


			<footer id="footer">
				<div className="inner">
					<ul className="icons">
						<li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
						<li><a href="#" className="icon brands alt fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
					</ul>
					<ul className="copyright">
						<li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li>
					</ul>
				</div>
			</footer>

		</div>
	)
}

export default Home 