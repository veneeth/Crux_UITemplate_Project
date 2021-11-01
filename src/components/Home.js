import React, { useState } from 'react'
import classes from './Home.module.css'

function Home() {
	const [isActive, setActive] = useState(false)

	function toggle() {
		setActive(!isActive)
	}

	return (
		<div className={classes.sidebar}>
			<div className={classes.logo_content}>
				<div className={classes.logo}>
					<i class="bx bxl-jquery"></i>
					<div className={classes.logo_name}>cuddle</div>
				</div>
			</div>

			<ul className={classes.nav_list}>
				<li>
					<a href="#">
						<i class="bx bxs-dashboard"></i>
						<span className={classes.links_name}>Ask</span>
					</a>
				</li>
				<li>
					<a href="#" onClick={toggle}>
						<i class="bx bxs-dashboard"></i>
						<span className={classes.links_name}>Trackboard</span>
					</a>
					<ul className={isActive ? classes.featBtn : null}>
						<li>
							<a href="#">
								<span className={classes.links_name_small}>Home</span>
								<i class="bx bx-lock-alt"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<span className={classes.links_name_small}>Home</span>
								<i class="bx bx-lock-alt"></i>
							</a>
						</li>
						<li>
							<a href="#">
								<span className={classes.links_name_small}>Home</span>
								<i class="bx bx-lock-alt"></i>
							</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#">
						<i class="bx bxs-dashboard"></i>
						<span className={classes.links_name}>Nudges</span>
					</a>
				</li>
			</ul>
		</div>
	)
}

export default Home
