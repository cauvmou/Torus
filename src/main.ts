async function Init() {
    // *Setup Basic Canvas
    // HTML Canvas Creation
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

    // WebGL Context Creation
    let CONTEXT: WebGLRenderingContext = HTML_CANVAS.getContext('webgl') as WebGLRenderingContext;
    if (!CONTEXT) {
        console.error("Your browser is not capable of WebGL!");
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        TorusDemo();
    }, false);
    //*#####

    // *Rendering

    const vert = await(await fetch("/assets/vert.glsl")).text();
    const frag = await(await fetch("/assets/frag.glsl")).text();

    const vertexShader = CONTEXT.createShader(CONTEXT.VERTEX_SHADER) as WebGLShader;
    const fragmentShader = CONTEXT.createShader(CONTEXT.FRAGMENT_SHADER) as WebGLShader;

    CONTEXT.shaderSource(vertexShader, vert);
    CONTEXT.shaderSource(fragmentShader, frag);

    CONTEXT.compileShader(vertexShader);
    if (!CONTEXT.getShaderParameter(vertexShader, CONTEXT.COMPILE_STATUS))
        console.error("Failed to compile vertex shader!", CONTEXT.getShaderInfoLog(vertexShader));
    
    CONTEXT.compileShader(fragmentShader);
    if (!CONTEXT.getShaderParameter(fragmentShader, CONTEXT.COMPILE_STATUS))
        console.error("Failed to compile fragment shader!", CONTEXT.getShaderInfoLog(fragmentShader));

    const program = CONTEXT.createProgram() as WebGLProgram;

    CONTEXT.attachShader(program, vertexShader);
    CONTEXT.attachShader(program, fragmentShader);

    CONTEXT.linkProgram(program);
    if (!CONTEXT.getProgramParameter(program, CONTEXT.LINK_STATUS))
        console.error("Failed to link program!", CONTEXT.getProgramInfoLog(program));
    
    CONTEXT.validateProgram(program);
    if (!CONTEXT.getProgramParameter(program, CONTEXT.VALIDATE_STATUS))
        console.error("Failed to validate program!", CONTEXT.getProgramInfoLog(program));
    
    async function TorusDemo() {
        CONTEXT.clearColor(1.0, 1.0, 1.0, 1.0);
        CONTEXT.clear(CONTEXT.COLOR_BUFFER_BIT | CONTEXT.DEPTH_BUFFER_BIT);
    }
    TorusDemo();

}
Init()