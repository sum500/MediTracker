import Navbar from "../components/Navbar";
import "../App.css";
import "./about.css";
import Footer from "../components/Footer";
import { Fade } from "react-awesome-reveal";
import { Card, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<Navbar buttons={true} />
			<div id="about-container" style={{ minHeight: "80vh" }}>
				<div id="about-left-container">
					<Fade
						delay={10}
						direction="top"
						style={{ color: "black" }}
						triggerOnce
					>
						<h2>About Us</h2>
					</Fade>

					<p id="about-text">
						We are a passionate group of student developers who
						started working on this project as part of our
						university curriculum. But over the course of this
						project, we have grown to love this project and we are
						now working on it as a hobby. Our mission is to scale
						this project up further and make it available to
						everyone.
					</p>
				</div>

				<div className="d-flex about-right">
					{/*  */}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default About;