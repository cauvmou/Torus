export function validateContext(canvas, context) {
    if (!context) {
        console.error("WebGL / WebGL2 is not supported by your browser, falling back to experimental-webgl!");
        context = canvas.getContext("experimental-webgl");
    }
    if (!context) {
        alert("WebGL is not supported, unable to run Torus! 😰");
    }
    return context;
}
