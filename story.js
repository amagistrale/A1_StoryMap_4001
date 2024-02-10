var config = {
    style: 'mapbox://styles/amagistrale/cls7v0ncl02cf01qs2ao08t9h',
    accessToken: 'pk.eyJ1IjoiYW1hZ2lzdHJhbGUiLCJhIjoiY2xzN3NvZDQyMWoxNzJybzNxb2JvZW44eSJ9.OySTV2z8T2d_HwmprXqbjw',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'Ontario\'s Wildfires',
    subtitle: 'A summary of the wildfire seasons from 2020-2021',
    byline: 'By: Anna Magistrale',
    footer: '<p>Sources:<br> Canadian Interagency Forest Fire Centre. (2021, Feb 26). Canada Report 2020. CIFFC. https://www.ciffc.ca/sites/default/files/2021-02/Canada_Report_2020_Final.pdf<br>Canadian Interagency Forest Fire Centre. (2022, Feb 22). Canada Report 2021. CIFFC. https://www.ciffc.ca/sites/default/files/2022-02/Canada_Report_2021_Final.pdf <br>Canadian Interagency Forest Fire Centre. (2023, Feb 24). Canada Report 2022. CIFFC. https://www.ciffc.ca/sites/default/files/2021-02/Canada_Report_2020_Final.pdf <br> Canadian Wildland Fire Information Service. (2024). CWFIS Datamart. Natural Resources Canada. https://cwfis.cfs.nrcan.gc.ca/datamart/download/nbac <br> The Ministry of Transportation. (2024, Jan 4). Ontario Provincial Highways / Autoroutes provinciales de l\'Ontario. The Government of Ontario. https://hub.arcgis.com/datasets/21d0776a5fb347728a3c79a0d7ace051_0/about <br> SVGRepo. (2024). Construction Crane SVG Vector. SVGRepo. https://www.svgrepo.com/svg/195438/construction-crane <br> UXWing. (2024). Hot Icon. UXWing. https://uxwing.com/hot-icon/ <br> National Geographic. (2017, Oct 23). Wildfires 101 | National Geographic. Youtube. https://youtu.be/5hghT1W33cY?si=1zR99oLtQLxd7ui6 <br> World Heath Organization. (2024). Wildfires. WHO. https://www.who.int/health-topics/wildfires#tab=tab_1 <br> Tyler Griffin. (2022, Aug 16). Ontario Sees Slow Forest Fire Season a Year After Record Setting Fires. Global News. https://globalnews.ca/news/9062810/ontario-slow-forest-fire-season-2022/ <br> The Ministry of Natural Resources and Forestry. (2024, Jan 10). Forest Fires. Ontario Government. https://www.ontario.ca/page/forest-fires</p> ',
    chapters: [
        {
            id: 'Ch1',
            title: 'Ontario Wildfires',
            image: 'images/Ch1.jpg',
            description: '<h1>Overview<h1><br><p>Wildfires are destructive events that can cause destruction to large areas of land. In Ontario, wildfire season ranges from April 1st to October 31st. There are many factors that dictate how bad a wildfire season is such as dry conditions are. This story map will outline Ontario\'s wildfire seasons in the years 2020 - 2022. Areas that were burned in 2020 appear in yellow, those burned in 2021 appear in orange, and those burned in 2022 appear in red. <br> To learn more about wildfires, check out this video:<br> <p><iframe width="375" height="315" src="https://www.youtube.com/embed/5hghT1W33cY?si=H_-DRPDEzCTrbC-H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
            location: {
                center: [-90.81411, 49.85722],
                zoom: 4.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: '2020',
            title: 'The 2020 Season',
            image: 'images/2020.png',
            description: '<h2>2020 Fire Season<h2><br><p>2020 was a fairly average wildfire season with a total of 608 wildland fires affecting a total of 15,460 hectares of land. The largest area burned was 5931.54 hectares. See the table below to find a summary of the number of fires in Ontario for the 2020 fire season:<p><br><style>table, th, td{border:1px solid white;}</style><table><tr><th>Province</th><th>Natural Fires</th><th>Human Caused Fires</th><th>Total Fires</th></tr><tr><td>ON</td><td>367</td><td>241</td><td>608</td></tr></table><br><p>How does Ontario\'s number of wildfires compare to the rest of Canada in 2020?<p><br><canvas id="Chart2020" width="400" height="400"></canvas> ',
            location: {
                center: [-88.58560, 51.44565],
                zoom: 10.29,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{
                    layer: 'points',
                    opacity: 1
                 }],
            onChapterExit: [{
                layer: 'simpleont6-62uus9',
                opacity: 0
            }]
        },
        {
            id: '2021',
            title: 'The 2021 Season',
            image: 'images/2021.png',
            description: '<h2>2021 Fire Season<h2><br><p>2021 saw one of the worst fire seasons for Ontario, especially in the northwestern part of the province. 496 out-of-province firefighting personnel assisted with these fires. A total of 793,325 hectares burned which set a new record for the province. The largest area burned can be seen in orange on the map with 225,937.19 hectares burned. See the table below to find a summary of the number of Ontario\'s 2021 forest fires:<p><br><style>table, th, td{border:1px solid white;}</style><table><tr><th>Province</th><th>Natural Fires</th><th>Human Caused Fires</th><th>Total Fires</th></tr><tr><td>ON</td><td>933</td><td>265</td><td>1198</td></tr></table><br><p>How does Ontario\'s number of wildfires compare to the rest of Canada for 2021?<p><br><canvas id="Chart2021" width="400" height="400"></canvas> ', 
            location: {
                center: [-95.08768, 50.65928],
                zoom: 8.10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{
                    layer: 'points',
                    opacity: 1
                 }],
            onChapterExit: [{
                layer: 'simpleont6-62uus9',
                opacity: 0
            }]
        },
        {
            id: '2022',
            title: 'The 2022 Season',
            image: 'images/2022.webp',
            description: '<h2>2022 Fire Season<h2><br><p>2022 saw a much slower fire season than 2021. It was one of the five slowest fire seasons for Ontario. The total burn area was 2,560 hectares and the largest burned area was 1,230.09 hectares. See the table below to find a summary of the number of wildfires for Ontario\'s 2022 fire season:<p><br><style>table, th, td{border:1px solid white;}</style><table><tr><th>Province</th><th>Natural Fires</th><th>Human Caused Fires</th><th>Total Fires</th></tr><tr><td>ON</td><td>88</td><td>187</td><td>275</td></tr></table><br><p>How does Ontario\'s number of wildfires compare to the rest of Canada in 2022?<p><br><canvas id="Chart2022" width="400" height="400"></canvas> ',
            location: {
                center: [-81.391,47.482],
                zoom: 10.90,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [{
                    layer: 'points',
                    opacity: 1
                 }],
            onChapterExit: [{
                layer: 'simpleont6-62uus9',
                opacity: 0
            }]
        }
    ]
};
