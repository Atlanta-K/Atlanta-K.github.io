document.addEventListener(
  "DOMContentLoaded"
  , function () { let e = document
      .createElement("style");
    e.textContent = `
      #banner {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          font-size: 32px;
          opacity: 0;
          transition: opacity 1s ease-in-out;
      }
      .fade-in-out {
          animation: fadeInOut 3s forwards;
      }

      @keyframes fadeInOut {
          0% {
              opacity: 0;
          }
          50% {
              opacity: 1;
          }
          100% {
              opacity: 0;
          }
      }
  `, document.head.appendChild(e); let
      a = document.createElement(
        "div");
    a.id = "banner", a.textContent =
      "Loading...", a.classList.add(
        "fade-in-out"), document.body
      .appendChild(a), setTimeout(
        function e() { document
            .getElementById("content")
            .style.display =
            "block" }, 3e3) });
