import { Link } from 'react-router-dom'
import IconHome from '../../assets/icon-home.svg'

const Navbar = () => {
  return (
    <header>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<div className="navbar-brand">
						<Link to={'/'}>
							<img src={IconHome} alt="Icon-home" />
						</Link>
					</div>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link to={'/'} className="nav-link active">
									Home
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