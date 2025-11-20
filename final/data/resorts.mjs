export const resorts = [
    {
        name: "Brighton",
        image: "images/brighton.jpg",
        about: "Brighton is a mountain-focused resort in Big Cottonwood Canyon near Salt Lake City. Known for reliable snowfall, varied terrain, terrain parks, short lift lines, and a long season.",
        stats: {
            snowfall: "504 in.",
            acreage: "1,050 acres",
            baseElevation: "8,755 ft",
            summitElevation: "10,500 ft",
            verticalDrop: "1,745 ft",
            lifts: 9,
            terrainPercent: { beginner: 24, intermediate: 36, advanced: 40 },
            longestRun: "1.9 mi",
            nightSkiing: true,
            terrainParks: 6,
            avgSeason: { start: "Nov", end: "Apr" },
            avgOpenDays: 152,
            coordinates: { lat: 40.5880, lon: -111.5844 },
            driveTimeFromSLC: "35 min"
        },
        prices: {
            day: "Starting at $60",
            halfDay: "Starting at $60",
            night: "Starting at $51",
            season: "$1,349",
            seasonMidweek: "$759",
            seasonNight: "$729"
        }
    },
    {
        name: "Nordic Valley",
        image: "images/nordic-valley.webp",
        about: "Nordic Valley is a small, family-oriented resort near Ogden with affordable lift tickets, good beginner terrain, and notable night skiing.",
        stats: {
            snowfall: "300 in.",
            acreage: "300 acres",
            baseElevation: "5,365 ft",
            summitElevation: "7,060 ft",
            verticalDrop: "1,700 ft",
            lifts: 6,
            terrainPercent: { beginner: 35, intermediate: 40, advanced: 25 },
            longestRun: "1.8 mi",
            nightSkiing: true,
            terrainParks: 1,
            avgSeason: { start: "Dec", end: "Mar" },
            avgOpenDays: 110,
            coordinates: { lat: 41.2218, lon: -111.8416 },
            driveTimeFromSLC: "50 min"
        },
        prices: {
            day: "Starting at $15",
            halfDay: "N/A",
            night: "N/A",
            season: "$599",
            seasonMidweek: "$375",
            seasonNight: "N/A"
        }
    },
    {
        name: "Powder Mountain",
        image: "images/powder-mountain.webp",
        about: "Powder Mountain offers massive skiable acreage and low lift density. Renowned for tree skiing, open bowls, and a laid-back vibe.",
        stats: {
            snowfall: "500 in.",
            acreage: "8,464 acres",
            baseElevation: "6,900 ft",
            summitElevation: "9,422 ft",
            verticalDrop: "2,522 ft",
            lifts: 11,
            terrainPercent: { beginner: 20, intermediate: 50, advanced: 30 },
            longestRun: "3.5 mi",
            nightSkiing: true,
            terrainParks: 2,
            avgSeason: { start: "Nov", end: "Apr" },
            avgOpenDays: 160,
            coordinates: { lat: 41.2783, lon: -111.8411 },
            driveTimeFromSLC: "75 min"
        },
        prices: {
            day: "$109",
            halfDay: "$109",
            night: "$19",
            season: "$1,649",
            seasonMidweek: "$1,149",
            seasonNight: "N/A"
        }
    },
    {
        name: "Sundance",
        image: "images/sundance.webp",
        about: "Sundance Resort blends art, nature, and skiing on a scenic mountain founded by Robert Redford. A boutique mountain with varied terrain and intimate lodging.",
        stats: {
            snowfall: "300 in.",
            acreage: "450 acres",
            baseElevation: "6,100 ft",
            summitElevation: "8,250 ft",
            verticalDrop: "2,150 ft",
            lifts: 7,
            terrainPercent: { beginner: 25, intermediate: 50, advanced: 25 },
            longestRun: "2.0 mi",
            nightSkiing: true,
            terrainParks: 1,
            avgSeason: { start: "Dec", end: "Mar" },
            avgOpenDays: 130,
            coordinates: { lat: 40.3579, lon: -111.5811 },
            driveTimeFromSLC: "60 min"
        },
        prices: {
            day: "$179",
            halfDay: "$149",
            night: "$89",
            season: "$1,399",
            seasonMidweek: "N/A",
            seasonNight: "N/A"
        }
    },
    {
        name: "Alta",
        image: "images/alta.webp",
        about: "Alta is a legendary skier-only mountain in Little Cottonwood Canyon known for extraordinary snowfall and steep, technical terrain.",
        stats: {
            snowfall: "517 in.",
            acreage: "2,614 acres",
            baseElevation: "8,530 ft",
            summitElevation: "11,068 ft",
            verticalDrop: "2,538 ft",
            lifts: 14,
            terrainPercent: { beginner: 15, intermediate: 30, advanced: 55 },
            longestRun: "3.0 mi",
            nightSkiing: false,
            terrainParks: 0,
            avgSeason: { start: "Nov", end: "May" },
            avgOpenDays: 170,
            coordinates: { lat: 40.5884, lon: -111.6385 },
            driveTimeFromSLC: "45 min"
        },
        prices: {
            day: "$179",
            halfDay: "$149",
            night: "N/A",
            season: "$1,799",
            seasonMidweek: "N/A",
            seasonNight: "N/A"
        }
    },
    {
        name: "Snowbird",
        image: "images/snowbird.webp",
        about: "Snowbird is famous for big snow, long verticals, and challenging terrain accessed by a high-capacity tram. Seasons often extend into spring.",
        stats: {
            snowfall: "497 in.",
            acreage: "2,500 acres",
            baseElevation: "7,760 ft",
            summitElevation: "11,000 ft",
            verticalDrop: "3,240 ft",
            lifts: 14,
            terrainPercent: { beginner: 10, intermediate: 40, advanced: 50 },
            longestRun: "2.9 mi",
            nightSkiing: false,
            terrainParks: 1,
            avgSeason: { start: "Nov", end: "May" },
            avgOpenDays: 170,
            coordinates: { lat: 40.5820, lon: -111.6540 },
            driveTimeFromSLC: "45 min"
        },
        prices: {
            day: "$229",
            halfDay: "$189",
            night: "N/A",
            season: "$1,999",
            seasonMidweek: "N/A",
            seasonNight: "N/A"
        }
    },
    {
        name: "Solitude",
        image: "images/solitude.webp",
        about: "Solitude Mountain Resort offers a quieter, family-friendly experience with groomers, bowls, and gladed tree skiing.",
        stats: {
            snowfall: "500 in.",
            acreage: "1,200 acres",
            baseElevation: "7,994 ft",
            summitElevation: "10,488 ft",
            verticalDrop: "2,494 ft",
            lifts: 8,
            terrainPercent: { beginner: 20, intermediate: 50, advanced: 30 },
            longestRun: "4.8 mi",
            nightSkiing: true,
            terrainParks: 2,
            avgSeason: { start: "Nov", end: "Apr" },
            avgOpenDays: 150,
            coordinates: { lat: 40.6200, lon: -111.5600 },
            driveTimeFromSLC: "45 min"
        },
        prices: {
            day: "$189",
            halfDay: "$159",
            night: "$79",
            season: "$1,599",
            seasonMidweek: "$999",
            seasonNight: "N/A"
        }
    },
    {
        name: "Deer Valley",
        image: "images/deer-valley.webp",
        about: "Deer Valley is an upscale, skier-only resort known for impeccably groomed runs, top-tier guest services, and limited lift capacity.",
        stats: {
            snowfall: "300 in.",
            acreage: "2,342 acres",
            baseElevation: "6,570 ft",
            summitElevation: "9,570 ft",
            verticalDrop: "3,000 ft",
            lifts: 27,
            terrainPercent: { beginner: 20, intermediate: 50, advanced: 30 },
            longestRun: "2.8 mi",
            nightSkiing: false,
            terrainParks: 0,
            avgSeason: { start: "Dec", end: "Apr" },
            avgOpenDays: 140,
            coordinates: { lat: 40.6379, lon: -111.4780 },
            driveTimeFromSLC: "50 min"
        },
        prices: {
            day: "$299",
            halfDay: "$239",
            night: "N/A",
            season: "$2,999",
            READMEseasonMidweek: "$1,799",
            seasonNight: "N/A"
        }
    },
    {
        name: "Brian Head",
        image: "images/brian-head.webp",
        about: "Brian Head is a high-elevation southern Utah resort offering family-friendly terrain, affordable lift tickets, and night skiing.",
        stats: {
            snowfall: "360 in.",
            acreage: "650 acres",
            baseElevation: "9,600 ft",
            summitElevation: "11,300 ft",
            verticalDrop: "1,700 ft",
            lifts: 8,
            terrainPercent: { beginner: 30, intermediate: 40, advanced: 30 },
            longestRun: "1.5 mi",
            nightSkiing: true,
            terrainParks: 2,
            avgSeason: { start: "Dec", end: "Mar" },
            avgOpenDays: 120,
            coordinates: { lat: 37.7029, lon: -112.8481 },
            driveTimeFromSLC: "3 hr 15 min"
        },
        prices: {
            day: "$119",
            halfDay: "$99",
            night: "$49",
            season: "$699",
            seasonMidweek: "N/A",
            seasonNight: "N/A"
        }
    },
    {
        name: "Park City",
        image: "images/park-city.webp",
        about: "Park City Mountain is one of North America’s largest resorts with extensive terrain, modern lift infrastructure, and strong town amenities.",
        stats: {
            snowfall: "355 in.",
            acreage: "7,300 acres",
            baseElevation: "6,800 ft",
            summitElevation: "10,023 ft",
            verticalDrop: "3,200 ft",
            lifts: 41,
            terrainPercent: { beginner: 20, intermediate: 50, advanced: 30 },
            longestRun: "3.5 mi",
            nightSkiing: false,
            terrainParks: 4,
            avgSeason: { start: "Nov", end: "Apr" },
            avgOpenDays: 160,
            coordinates: { lat: 40.6461, lon: -111.4980 },
            driveTimeFromSLC: "40 min"
        },
        prices: {
            day: "$299",
            halfDay: "$239",
            night: "N/A",
            season: "$2,399",
            seasonMidweek: "N/A",
            seasonNight: "N/A"
        }
    },

    {
        name: "Snowbasin",
        image: "images/snowbasin.webp",
        about: "Snowbasin is a premier resort north of Ogden with Olympic history, long cruisers, and stunning views of the Great Salt Lake.",
        stats: {
            snowfall: "300 in.",
            acreage: "3,000 acres",
            baseElevation: "6,450 ft",
            summitElevation: "9,350 ft",
            verticalDrop: "2,900 ft",
            lifts: 12,
            terrainPercent: { beginner: 20, intermediate: 50, advanced: 30 },
            longestRun: "3.0 mi",
            nightSkiing: false,
            terrainParks: 3,
            avgSeason: { start: "Nov", end: "Apr" },
            avgOpenDays: 150,
            coordinates: { lat: 41.2161, lon: -111.8578 },
            driveTimeFromSLC: "55 min"
        },
        prices: {
            day: "$199",
            halfDay: "$169",
            night: "N/A",
            season: "$1,899",
            seasonMidweek: "N/A",
            seasonNight: "N/A"
        }
    },
    {
        name: "Beaver Mountain",
        image: "images/beaver-mountain.webp",
        about: "Family-owned since 1939, Beaver Mountain offers a classic, no-frills ski experience with great tree skiing and friendly locals in Logan Canyon.",
        stats: {
            snowfall: "400 in.",
            acreage: "828 acres",
            baseElevation: "7,200 ft",
            summitElevation: "8,860 ft",
            verticalDrop: "1,660 ft",
            lifts: 6,
            terrainPercent: { beginner: 30, intermediate: 40, advanced: 30 },
            longestRun: "2.5 mi",
            nightSkiing: false,
            terrainParks: 1,
            avgSeason: { start: "Dec", end: "Apr" },
            avgOpenDays: 130,
            coordinates: { lat: 41.9683, lon: -111.5417 },
            driveTimeFromSLC: "2 hr"
        },
        prices: {
            day: "$78",
            halfDay: "$65",
            night: "N/A",
            season: "$650",
            seasonMidweek: "$475",
            seasonNight: "N/A"
        }
    },
    {
        name: "Eagle Point",
        image: "images/eagle-point.webp",
        about: "Southern Utah’s hidden gem with varied terrain, uncrowded slopes, and breathtaking views over the Tushar Mountains.",
        stats: {
            snowfall: "350 in.",
            acreage: "650 acres",
            baseElevation: "9,100 ft",
            summitElevation: "10,950 ft",
            verticalDrop: "1,850 ft",
            lifts: 5,
            terrainPercent: { beginner: 30, intermediate: 40, advanced: 30 },
            longestRun: "1.8 mi",
            nightSkiing: false,
            terrainParks: 2,
            avgSeason: { start: "Dec", end: "Apr" },
            avgOpenDays: 120,
            coordinates: { lat: 38.3194, lon: -112.3792 },
            driveTimeFromSLC: "3 hr 30 min"
        },
        prices: {
            day: "$109",
            halfDay: "$89",
            night: "N/A",
            season: "$699",
            seasonMidweek: "N/A",
            seasonNight: "N/A"
        }
    },
    {
        name: "Cherry Peak",
        image: "images/cherry-peak.webp",
        about: "Utah’s newest resort near Logan, offering affordable skiing, excellent night skiing, and a relaxed family atmosphere.",
        stats: {
            snowfall: "320 in.",
            acreage: "400 acres",
            baseElevation: "5,750 ft",
            summitElevation: "7,050 ft",
            verticalDrop: "1,300 ft",
            lifts: 4,
            terrainPercent: { beginner: 30, intermediate: 45, advanced: 25 },
            longestRun: "1.5 mi",
            nightSkiing: true,
            terrainParks: 2,
            avgSeason: { start: "Dec", end: "Mar" },
            avgOpenDays: 110,
            coordinates: { lat: 41.9278, lon: -111.7542 },
            driveTimeFromSLC: "1 hr 45 min"
        },
        prices: {
            day: "$69",
            halfDay: "$59",
            night: "$39",
            season: "$499",
            seasonMidweek: "$349",
            seasonNight: "$299"
        }
    }
];