export function validateContext(canvas, context) {
    if (!context) {
        alert("WebGL is not supported, unable to run Torus! 😰");
    }
    //! Will be expanded upon in the future. (Fallback and experimental)
}
export function validateShader(context, shader) {
    if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
        console.error('Error during compilation of shader: ', context.getShaderInfoLog(shader));
        return false;
    }
    return true;
}
export function checkupProgram(context, program) {
    if (!context.getProgramParameter(program, context.LINK_STATUS)) {
        console.error('Error linking program', context.getProgramInfoLog(program));
        return false;
    }
    if (!context.getProgramParameter(program, context.VALIDATE_STATUS)) {
        console.error('Error validating program', context.getProgramInfoLog(program));
        return false;
    }
    return true;
}
