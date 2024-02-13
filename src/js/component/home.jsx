import React, { useState } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Button,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	CardText
} from 'reactstrap';

function Example(args) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar {...args} dark color="dark">
				<NavbarBrand href="/">Start Bootstrap</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="me-auto" navbar>
						<NavItem>
							<NavLink href="/home/">Home</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/about/">About</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/services/">Services</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/contact/">Contact</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
			<div className="jumbotron d-flex align-items-center justify-content-center text-start vh-80% bg-dark text-white">
				<div>
					<h1 className="display-1">A Warm Welcome!</h1>
					<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<Button color="primary">Call to action!</Button>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col">
					<Card>
						<img alt="Sample" src="https://picsum.photos/300/200" />
						<CardBody>
							<CardTitle tag="h5">Card title</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
							<CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
							<Button>Button</Button>
						</CardBody>
					</Card>
				</div>
				<div className="col">
				<Card>
						<img alt="Sample" src="https://picsum.photos/300/200" />
						<CardBody>
							<CardTitle tag="h5">Card title</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
							<CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
							<Button>Button</Button>
						</CardBody>
					</Card>
				</div>
				<div className="col">
				<Card>
						<img alt="Sample" src="https://picsum.photos/300/200" />
						<CardBody>
							<CardTitle tag="h5">Card title</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
							<CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
							<Button>Button</Button>
						</CardBody>
					</Card>
				</div>
				<div className="col">
				<Card>
						<img alt="Sample" src="https://picsum.photos/300/200" />
						<CardBody>
							<CardTitle tag="h5">Card title</CardTitle>
							<CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
							<CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
							<Button>Button</Button>
						</CardBody>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default Example;
