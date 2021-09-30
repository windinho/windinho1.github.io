import React from "react";
import Form from "./components/Form";
import "./core-components/Radio.css";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<div className="background-clip" />
			<div className="card">
				<div className="hero-image">
					<div className="text">
						<h1>Sample heading</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit.
							<br />
							Laborum distinctio incidunt quae voluptas tempore
							dolorem, autem officia libero soluta.
						</p>
					</div>
				</div>
				<div className="form">
					<Form />
				</div>
			</div>
		</div>
	);
}

export default App;
