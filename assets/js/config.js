const particlesConfig = {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": true
      },
      "size": {
        "value": 3,
        "random": true
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "repulse": {
          "distance": 100,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  };
  
  // Initialize particles.js
  document.addEventListener("DOMContentLoaded", function() {
    try {
      particlesJS("particles-js", particlesConfig);
      
      // Make sure particles canvas has proper pointer-events
      setTimeout(() => {
        const canvas = document.querySelector("#particles-js canvas");
        if (canvas) {
          // Set canvas to pass through pointer events
          canvas.style.pointerEvents = "none";
        }
      }, 200);
    } catch (error) {
      console.error("Error initializing particles.js:", error);
    }
  });
  