// eslint-disable-next-line
export default {
  fullScreen: false,
  background: {
    color: {
      value: "rgb(229, 229, 229)",
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#ffd43b", "#d18719", "#e74c3c", "#d35400"],
    },
    shape: {
      type: ["circle", "triangle", "edge", "polygon"],
      stroke: {
        width: 2,
        color: ["#ff6347", "#daa520", "#ffaf40", "#ffbf00"],
      },
      polygon: {
        nb_sides: 5,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#bde0fe",
      opacity: 0.4,
      width: 4,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "right",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: ["bubble", "grab"],
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 100,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 200,
        size: 4,
        duration: 5,
        opacity: 1,
        speed: 0.1,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};
