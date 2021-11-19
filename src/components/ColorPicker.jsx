import React, {useState, useEffect} from 'react';

function ColorPicker() {
    const [gradientArray, setGradientArray] = useState([]);
    const [colorA, setColorA] = useState("");
    const [colorB, setColorB] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const newGradientArray = [...gradientArray];

        let formObj = {
            colorA,
            colorB
        }

        newGradientArray.push(formObj);
        setGradientArray(newGradientArray);

        setColorA("");
        setColorB("");
    }

    useEffect(() => {
        console.log(gradientArray);
    }, [gradientArray])
    
    return (
        <div>
            <h1>Color Picker</h1>
            <br />
            <br />

            <div className="container-fluid row d-flex justify-content-center">
                <div className = "col-10 row d-flex justify-content-center">
                    <div className="col-4">
                        <form onSubmit={handleSubmit}>
                            <h2 className="mb-3">Choose Two Colors!</h2>
                            <label htmlFor="colorA">Color A:</label>
                            <input type="color" value={colorA} onChange={(e) => setColorA(e.target.value)}/> <br />
                            <label htmlFor="colorA">Color B:</label>
                            <input type="color" value={colorB} onChange={(e) => setColorB(e.target.value)}/> <br />
                            <input type="submit" />
                        </form>
                    </div>

                    <div className="col-6 offset-2 row">
                        <h2 className="mb-3">Your color choices here</h2>
                            {/* color gradient squares here */}
                        {gradientArray.map((colorObj, index) => {
                            return (
                                <div key={index} className="col-5 mb-5">
                                    <p>Color A: {colorObj.colorA} <br /> Color B: {colorObj.colorB}</p>
                                    <div style={{height: "100px", width: "100px", background: `linear-gradient(${colorObj.colorA}, ${colorObj.colorB})`}} ></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;
