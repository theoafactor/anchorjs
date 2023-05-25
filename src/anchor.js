/**
 * Loads Scripts and libraries that are used in the core(anchor)
 */
function AnchorMixer() {
  const dependenciesArray = [
    {
      name: "axiosScript",
      src: "https://unpkg.com/axios@0.25.0/dist/axios.min.js",
    },
    {
      name: "jqueryScript",
      src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
    },
    {
      name: "jqueryScript",
      src: "https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js",
    },
    {
      name: "bootstrapScript",
      src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js",
    },
  ];

  function createScripts(depArray) {
    depArray.forEach((dependency) => {
      // script name
      let scriptName = dependency.name;
      // script source/URL
      let scriptSrc = dependency.src;
      //   =======================================//
      scriptName = document.createElement("script");
      // script src attribute
      scriptName.src = scriptSrc;
      scriptName.async = true;
      document.head.appendChild(scriptName);
    });
  }

  createScripts(dependenciesArray);

  this.load_dependencies = () => {
    return new Promise((resolve, reject) => {
      intervalObject = setTimeout(() => {
        if (
          // typeof axios != 'undefined'
          // && typeof Cookies != 'undefined'
          typeof jQuery != undefined &&
          typeof $ != undefined &&
          typeof bootstrap != "undefined"
        ) {
          resolve({
            // axios: axios,
            // Cookies: Cookies,
            jQuery: jQuery,
            bootstrap: bootstrap,
          });
        } else {
          dependencies = this.load_dependencies();
          resolve(dependencies);
        }
      }, 100);
    });
  };

  //initialize the app
  this.initializeAnchor = async (dependencies) => {
    dependencies = await dependencies;
  };
}

module.exports = AnchorMixer;
