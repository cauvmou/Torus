var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { validateContext } from "./helpers/contextHandler.js";
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
        let GL = HTML_CANVAS.getContext("webgl2");
        GL = validateContext(HTML_CANVAS, GL);
        function resizeCanvas() {
            HTML_CANVAS.width = window.innerWidth;
            HTML_CANVAS.height = window.innerHeight;
        }
        resizeCanvas();
        // *fetch Shaders (Tesing)
        const vertexShader = yield (yield fetch("/assets/vert.glsl")).text();
        const fragmentShader = yield (yield fetch("/assets/frag.glsl")).text();
        console.log(vertexShader);
        console.log(fragmentShader);
        function TorusDemo() {
            GL.clearColor(0.5, 0.75, 1, 1);
        }
        TorusDemo();
    });
}
Init();
