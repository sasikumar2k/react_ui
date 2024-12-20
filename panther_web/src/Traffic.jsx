import * as React from "react";

export default function Traffic() {
    const lightDurations = [5000, 2000, 1000];
    const [colorIndex, setColorIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setColorIndex((colorIndex + 1) % 3);
        }, lightDurations[colorIndex]);
        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <div className="App">
            <div
                style={{
                    height: "400px",
                    border: "1px solid black",
                    width: "200px",
                    margin: "auto",
                }}
            >
                <div
                    style={{
                        height: "100px",
                        border: "1px solid black",
                        width: "100px",
                        margin: "auto",
                        borderRadius: "50%",
                        marginTop: "25px",
                        backgroundColor: "#f00",
                        opacity: colorIndex === 0 ? 1 : 0.4,
                    }}
                    id="div1"
                ></div>
                <div
                    style={{
                        height: "100px",
                        border: "1px solid black",
                        width: "100px",
                        margin: "auto",
                        borderRadius: "50%",
                        marginTop: "15px",
                        backgroundColor: "#ff0",
                        opacity: colorIndex === 1 ? 1 : 0.4,
                    }}
                    id="div2"
                ></div>
                <div
                    style={{
                        height: "100px",
                        border: "1px solid black",
                        width: "100px",
                        margin: "auto",
                        borderRadius: "50%",
                        marginTop: "15px",
                        backgroundColor: "#0c0",
                        opacity: colorIndex === 2 ? 1 : 0.4,
                    }}
                    id="div3"
                ></div>
            </div>
        </div>
    );
}
