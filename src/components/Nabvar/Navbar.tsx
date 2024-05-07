import { Link } from 'react-router-dom'
import IconHome from '../../assets/icon-home.svg'

const Navbar = () => {
  return (
    <header>
      {/* <nav className="navbar navbar-dark bg-dark">
				<div className="container-fluid">
					<IconHome className="navbar-brand" />
					<div className="collapse navbar-collapse">
						<ul className="navbar-nav">
							<li className="navbar-item">
								<Link to={'/'} className="nav-link">
									Home
								</Link>
							</li>
							<li className="navbar-item">
								<Link to={'/blog'} className="nav-link">
									Blog
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav> */}
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<div className="navbar-brand">
						<img src={IconHome} alt="Icon-home" />
					</div>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to={'/'} className="nav-link active">
									Home
								</Link>
							</li>
							<li className="nav-item">
								<Link to={'/blog'} className="nav-link active">
									Blog
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
    </header>
	)
}

export default Navbar