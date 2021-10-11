// Setup Basic Canvas
let HTML_CANVAS = document.getElementById('torus') as HTMLCanvasElement;
if (!HTML_CANVAS) {
    HTML_CANVAS = document.createElement('canvas');
    HTML_CANVAS.id = "torus";
    document.getRootNode().appendChild(HTML_CANVAS);
}

function resizeCanvas() {
    HTML_CANVAS.width = window.innerWidth;
    HTML_CANVAS.height = window.innerHeight;
}
resizeCanvas()

const CONTEXT = HTML_CANVAS.getContext('2d') as CanvasRenderingContext2D;

window.addEventListener('resize', () => {
    resizeCanvas();
}, false);
// ---