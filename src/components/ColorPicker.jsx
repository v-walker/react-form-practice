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

            <div className="container row">
                <div className = "col-10 row">
                    <div className="col-4">
                        <form onSubmit={handleSubmit}>
                            <h2>Give me two colors as hex values!</h2>
                            <label htmlFor="colorA">Color A:</label>
                            <input type="text" value={colorA} onChange={(e) => setColorA(e.target.value)}/>
                            <label htmlFor="colorA">Color B:</label>
                            <input type="text" value={colorB} onChange={(e) => setColorB(e.target.value)}/>
                            <input type="submit" />
                        </form>
                    </div>

                    <div className="col-6 offset-2">
                        {/* color gradient squares here */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ColorPicker;
