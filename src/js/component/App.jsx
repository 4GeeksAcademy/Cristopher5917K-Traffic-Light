import React, { useState } from "react";

//include images into your bundle

//create your first component

const App = () => {
	const [selectColor, setSelectColor] = useState(``)
	return (
		<>
		{/* <div className="glow">Hola</div> */}
		<div className="barra position-absolute top-0 start-50 translate-middle"></div>
		<div className="base  	position-absolute top-4 start-50 translate-middle">
			
		
			<div onClick={()=>setSelectColor("red")} className={"light red" + ((selectColor ==="red") ? " glow"  : "")}></div>
			<div onClick={()=>setSelectColor("yellow")} className={"light yellow"+((selectColor ==="yellow") ? " glow"  : "")}></div>
			<div onClick={()=>setSelectColor("green")} className={"light green" +((selectColor ==="green") ? " glow"  : "")}></div>
		</div>
				
		</>
	);
};

export default App;
