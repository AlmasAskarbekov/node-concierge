require.config({
    baseUrl: '/libs',
    shim: {
        "c3": {
            deps: ["d3"]
        }
    },
    map: {
        "css": "css",
        "text": "text"
    }
});

// Relative to 'react/libs'
require(["../init"]);
