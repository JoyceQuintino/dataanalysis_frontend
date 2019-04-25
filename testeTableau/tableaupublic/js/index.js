//"http://public.tableau.com/views/WorldIndicators/GDPpercapita";

function initViz() {
    var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/TransparenciaAracati2015-208/Instituio?:embed=y&:display_count=yes&publish=yes",
        options = {
            hideTabs: true,
            onFirstInteractive: function () {
                console.log("Run this code when the viz has finished loading.");
            }
        };

    var viz = new tableau.Viz(containerDiv, url, options);
}