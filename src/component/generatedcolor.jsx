import { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hsl from 'hsl-to-hex';
// import { hexToHsl } from 'hex-to-hsl';

export default function Gencolor({ Color }) {
	const [palette, setPalette] = useState([]);
	const [palettehex, setPalettehex] = useState([]);
	const notify = (text) => toast(`copied ${text} to clipboard`);
	// var hsl = require('hsl-to-hex');
	const generatedpallete = (Color) => {
		let Pallete = [];
		for (let i = 0; i < 5; i++) {
			const hue = (Color.h + i * 360 / 5) % 360;
			// console.log(Color.h);
			const color = `hsl(${Math.round(hue * 100) / 100}, ${Color.s * 100}%, ${Color.l * 100}%)`
			const hex = hsl(hue, Color.s * 100, Color.l * 100);
			Pallete.push({ color: color, hex: hex });

		}
		return Pallete;
	}
	useEffect(() => {
		if (Color && Color.hsl) {
			console.log(Color.hsl);
			setPalette(generatedpallete(Color.hsl));
			console.log(palette);
		}
	}, [Color])


	return (
		<div>
			{palette.map((color) => (
				<div className='m-2'>
					<div className={`w-5 h-5 rounded-full`} style={{ backgroundColor: color.color }}></div>
					<p onClick={() => {
						navigator.clipboard.writeText(color.hex);
						notify(color.hex);
					}} className='hover:cursor-pointer'>{color.hex}</p>
				</div>
			))}
			<ToastContainer />
		</div>


	)
}