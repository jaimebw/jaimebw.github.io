(function () {
  const container = document.getElementById("wasm-container");
  if (!container) return;

  const canvas = document.createElement("canvas");
  canvas.className = "game";
  canvas.id = "canvas";
  canvas.oncontextmenu = (event) => event.preventDefault();
  container.appendChild(canvas);

  const ASPECT = 16 / 9;

  const resizeCanvas = () => {
    const width = container.clientWidth || 640;
    const height = Math.max(260, Math.round(width / ASPECT));
    const dpr = window.devicePixelRatio || 1;

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    if (window.Module?.setCanvasSize) {
      window.Module.setCanvasSize(canvas.width, canvas.height, true);
    }
  };

  const observer = new ResizeObserver(resizeCanvas);
  observer.observe(container);

  window.Module = {
    preRun: [],
    postRun: [],
    print: (...args) => console.log(args.join(" ")),
    printErr: (...args) => console.error(args.join(" ")),
    canvas,
    setStatus: (msg) => console.log("status:", msg),
    monitorRunDependencies: (msg) => console.log("monitor run deps:", msg),
    onRuntimeInitialized: () => {
      resizeCanvas();
    },
  };

  window.addEventListener("resize", resizeCanvas);

  window.onerror = (event) => {
    console.log("onerror:", event?.message);
  };

  const script = document.createElement("script");
  script.src = "/assets/js/demo.js";
  script.async = true;
  script.onload = () => resizeCanvas();
  container.appendChild(script);

  resizeCanvas();
})();
