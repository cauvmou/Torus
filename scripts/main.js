"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function Init() {
    return __awaiter(this, void 0, void 0, function* () {
        // *Setup Basic Canvas
        // HTML Canvas Creation
        let HTML_CANVAS = document.getElementById('torus');
        if (!HTML_CANVAS) {
            HTML_CANVAS = document.createElement('canvas');
            HTML_CANVAS.id = "torus";
            document.getRootNode().appendChild(HTML_CANVAS);
        }
        function resizeCanvas() {
            HTML_CANVAS.width = window.innerWidth;
            HTML_CANVAS.height = window.innerHeight;
        }
        resizeCanvas();
        // WebGL Context Creation
        let CONTEXT = HTML_CANVAS.getContext('webgl');
        if (!CONTEXT) {
            console.error("Your browser is not capable of WebGL!");
        }
        window.addEventListener('resize', () => {
            resizeCanvas();
            TorusDemo();
        }, false);
        //*#####
        // *Rendering
        const vert = yield (yield fetch("/assets/vert.glsl")).text();
        const frag = yield (yield fetch("/assets/frag.glsl")).text();
        const vertexShader = CONTEXT.createShader(CONTEXT.VERTEX_SHADER);
        const fragmentShader = CONTEXT.createShader(CONTEXT.FRAGMENT_SHADER);
        CONTEXT.shaderSource(vertexShader, vert);
        CONTEXT.shaderSource(fragmentShader, frag);
        CONTEXT.compileShader(vertexShader);
        if (!CONTEXT.getShaderParameter(vertexShader, CONTEXT.COMPILE_STATUS))
            console.error("Failed to compile vertex shader!", CONTEXT.getShaderInfoLog(vertexShader));
        CONTEXT.compileShader(fragmentShader);
        if (!CONTEXT.getShaderParameter(fragmentShader, CONTEXT.COMPILE_STATUS))
            console.error("Failed to compile fragment shader!", CONTEXT.getShaderInfoLog(fragmentShader));
        const program = CONTEXT.createProgram();
        CONTEXT.attachShader(program, vertexShader);
        CONTEXT.attachShader(program, fragmentShader);
        CONTEXT.linkProgram(program);
        if (!CONTEXT.getProgramParameter(program, CONTEXT.LINK_STATUS))
            console.error("Failed to link program!", CONTEXT.getProgramInfoLog(program));
        CONTEXT.validateProgram(program);
        if (!CONTEXT.getProgramParameter(program, CONTEXT.VALIDATE_STATUS))
            console.error("Failed to validate program!", CONTEXT.getProgramInfoLog(program));
        function TorusDemo() {
            return __awaiter(this, void 0, void 0, function* () {
                CONTEXT.clearColor(1.0, 1.0, 1.0, 1.0);
                CONTEXT.clear(CONTEXT.COLOR_BUFFER_BIT | CONTEXT.DEPTH_BUFFER_BIT);
            });
        }
        TorusDemo();
    });
}
Init();
