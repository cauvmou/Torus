
export type TorusRenderingContext = WebGLRenderingContext | WebGL2RenderingContext | RenderingContext

export function validateContext(canvas: HTMLCanvasElement, context: TorusRenderingContext): TorusRenderingContext  {

    if (!context) {
        console.error("WebGL / WebGL2 is not supported by your browser, falling back to experimental-webgl!");
        context = canvas.getContext("experimental-webgl") as RenderingContext;
    }

    if (!context) {
        alert("WebGL is not supported, unable to run Torus! 😰");
    }

    return context;
}