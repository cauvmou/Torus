import { validateContext, validateShader, checkupProgram } from "./helpers/contextHandler";

async function Init() {
    //* Setup Basic Canvas
    const ROOT = document.getElementsByTagName("body")[0] as HTMLBodyElement;
    // HTML Canvas Creation
    let HTML_CANVAS = document.getElementById('torus') as HTMLCanvasElement;
    if (!HTML_CANVAS) {
        HTML_CANVAS = document.createElement('canvas');
        HTML_CANVAS.id = "torus";
        HTML_CANVAS.width = window.innerWidth;
        HTML_CANVAS.height = window.innerHeight;
        ROOT.appendChild(HTML_CANVAS);
    }

    //* fetch Shaders (Tesing)
    const vertexText = await (await fetch("/assets/vert.glsl")).text();
    const fragmentText = await (await fetch("/assets/frag.glsl")).text();

    let GL = HTML_CANVAS.getContext("webgl2") as WebGL2RenderingContext;
    validateContext(HTML_CANVAS, GL);

    window.addEventListener("resize", resizeCanvas);
    function resizeCanvas() {
        HTML_CANVAS.width = window.innerWidth;
        HTML_CANVAS.height = window.innerHeight;
        GL.viewport(0, 0, HTML_CANVAS.width, HTML_CANVAS.height)
        TorusDemo()
    }
    resizeCanvas()
    
    function TorusDemo() {

        GL.clearColor(0.5, 0.75, 1, 1);
        GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

        //* Compile Shaders and create Programs

        const vertexShader = GL.createShader(GL.VERTEX_SHADER) as WebGLShader;
        const fragmentShader = GL.createShader(GL.FRAGMENT_SHADER) as WebGLShader;

        GL.shaderSource(vertexShader, vertexText);
        GL.shaderSource(fragmentShader, fragmentText);

        GL.compileShader(vertexShader);
        if (!validateShader(GL, vertexShader)) return;

        GL.compileShader(fragmentShader);
        if (!validateShader(GL, fragmentShader)) return;

        const program = GL.createProgram() as WebGLProgram 
        GL.attachShader(program, vertexShader);
        GL.attachShader(program, fragmentShader);
        GL.linkProgram(program);
        GL.validateProgram(program);
        if (!checkupProgram(GL, program)) return;

        //* Create buffer

        const triangleVertices = [
            0.0, 0.5, 1.0, 0.0, 0.0,
            -0.5, -0.5, 0.0, 1.0, 0.0,
            0.5, -0.5, 0.0, 0.0, 1.0
        ]

        const vertexBufferObject = GL.createBuffer();
        GL.bindBuffer(GL.ARRAY_BUFFER, vertexBufferObject);
        GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(triangleVertices), GL.STATIC_DRAW);

        const positionAttribLocation = GL.getAttribLocation(program, 'vertPosition');
        const colorAttribLocation = GL.getAttribLocation(program, 'vertColor');

        GL.vertexAttribPointer(
            positionAttribLocation,
            2,
            GL.FLOAT,
            false,
            5 * Float32Array.BYTES_PER_ELEMENT,
            0
        );
        GL.vertexAttribPointer(
            colorAttribLocation,
            3,
            GL.FLOAT,
            false,
            5 * Float32Array.BYTES_PER_ELEMENT,
            2 * Float32Array.BYTES_PER_ELEMENT,
        );

        GL.enableVertexAttribArray(positionAttribLocation);
        GL.enableVertexAttribArray(colorAttribLocation);

        GL.useProgram(program);
        GL.drawArrays(GL.TRIANGLES, 0, 3);

    }
}
Init()