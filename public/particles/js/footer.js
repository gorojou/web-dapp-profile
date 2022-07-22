try {
  done = false;
  const getParticleScript = () => {
    const jsScript = document.createElement("script");
    jsScript.src =
      "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    window.document.body.appendChild(jsScript);
    jsScript.addEventListener("load", () => {
      particleInit1();
    });
  };
  if (document.readyState !== "loading") {
    getParticleScript();
  } else {
    document.addEventListener("DOMContentLoaded", function (event) {
      getParticleScript();
    });
  }
  const particleInit1 = () => {
    particlesJS("particles-js-footer", {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "rgb(27, 20, 100)",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "rgb(27, 20, 100)",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.2,
          random: false,
          anim: {
            enable: false,
            speed: 0.5,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 4,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "rgb(27, 20, 100)",
          opacity: 0.2,
          width: 1,
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          out_mode: "out",
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: false,
            mode: "repulse",
          },
          onclick: {
            enable: false,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
      config_demo: {
        hide_card: false,
      },
    });
    var count_particles, stats, update;
    count_particles = document.querySelector(".js-count-particles");
    update = function () {
      if (
        window.pJSDom[0].pJS.particles &&
        window.pJSDom[0].pJS.particles.array
      ) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  };
} catch (err) {
  console.log(err);
}
