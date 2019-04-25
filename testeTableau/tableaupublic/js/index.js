function initVizIndex() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/shared/X22KGSTDB?:display_count=yes",
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
}

function initVizFavorecidos() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/shared/C7CF9B3T2?:display_count=yes",
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
}

function initVizInstituicao() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/shared/MRGYT6CJR?:display_count=yes",
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
}

function initVizProjeto() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/shared/C2MJY9C98?:display_count=yes",
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
}