import { validateContext, TorusRenderingContext } from "./helpers/contextHandler";

async function Init() {
    // *Setup Basic Canvas
    // HTML Canvas Creation
    let HTML_CANVAS = document.getElementById('torus') as HTMLCanvasElement;
    if (!HTML_CANVAS) {
        HTML_CANVAS = document.createElement('canvas');
        HTML_CANVAS.id = "torus";
        document.getRootNode().appendChild(HTML_CANVAS);
    }

    let GL = HTML_CANVAS.getContext("webgl2") as WebGL2RenderingContext;
    GL = validateContext(HTML_CANVAS, GL) as WebGL2RenderingContext;

    function resizeCanvas() {
        HTML_CANVAS.width = window.innerWidth;
        HTML_CANVAS.height = window.innerHeight;
    }
    resizeCanvas()

    // *fetch Shaders (Tesing)
    const vertexShader = await (await fetch("/assets/vert.glsl")).text();
    const fragmentShader = await (await fetch("/assets/frag.glsl")).text();

    function TorusDemo() {

        GL.clearColor(0.5, 0.75, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

    }
    TorusDemo()
}
Init()