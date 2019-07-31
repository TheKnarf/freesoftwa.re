---
route: index.html
---
import { dom, fragment } from 'isomorphic-jsx';
import './default.css';

import software from './software.json';
const unique_categories = software
	.map(({ category }) => category)
	.filter((value, index, self) => self.indexOf(value) === index);

const Showcase = ({ link, title, description, sourcecode, copying, license }) =>
	<li>
		<a href={link}>{ title }</a>
		<p>{ description }</p>
		<div class="badge">
			<a href={sourcecode}> source code </a>
		</div>
		<div class="badge">
			<span> license </span>
			<a href={copying}>{license}</a>
		</div>
	</li>;

const page = () => '<!DOCTYPE html>' +
<html>
	<head>
		<title>Free software</title>

		<meta charset="utf-8" />
		<link rel="stylesheet" href="main.css" />
	</head>
	<body>
		<h1> Free software </h1>

		<p> Do you want to add some software to this list? You can contribute at our <a href="https://github.com/theknarf/freesoftwa.re"> git repo </a>. </p>
		<p> Software on this list have to be <a href="https://www.gnu.org/philosophy/free-sw.en.html"> free software </a> </p>

		{
			unique_categories.map( category => <>
				<h2>{ category }</h2>
				<ul>
				{
					software
						.filter(showcase => showcase.category === category)
						.map( showcase => <Showcase {...showcase} />)
				}
				</ul>
				</>
			)
		}

		<h2> Support free software </h2>
		<ul>
			<li> <a href="https://en.liberapay.com/"> Liberapay </a>  </li>
		</ul>
	</body>
</html>;

export default page;
