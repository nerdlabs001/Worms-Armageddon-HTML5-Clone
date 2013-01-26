class Map
{
    private mapDef;
    currentSpawn;

    constructor (mapDef)
    {
        this.mapDef = mapDef;
        this.currentSpawn = 0;
    }

    getNextSpawnPoint()
    {
        return Utilies.pickUnqine(this.mapDef.spawnPionts, "spanwPionts");
    }

    getBackgroundCss()
    {
        return this.mapDef.backgroundGraidentCss;
    }

    getTerrainImg()
    {
        return AssetManager.images[this.mapDef.terrainImage];
    }
}

module Maps
{
    export var priates = {
        smallImage: "data/images/levels/level2.png",
        name: "Priates",
        terrainImage: "level2",
        spawnPionts: [{ "x": 1699.956189657431, "y": 2054.5162596293976 }, { "x": 1693.956189657431, "y": 2408.5162596293976 }, { "x": 2218.956189657431, "y": 2243.5162596293976 }, { "x": 2570.956189657431, "y": 2551.5162596293976 }, { "x": 3896.956189657431, "y": 2014.5162596293978 }, { "x": 1156.956189657431, "y": 2314.5162596293976 }, { "x": 1652.956189657431, "y": 1183.5162596293978 }, { "x": 2273.956189657431, "y": 1143.5162596293978 }, { "x": 2568.956189657431, "y": 1452.5162596293978 }, { "x": 3129.956189657431, "y": 1717.5162596293978 }],
        backgroundGraidentCss: "background: -webkit-linear-gradient(top,  #242a4a 0%,#201610 100%);",
        info: " Pritaes and shit "
    }

    export var smallCastle = {
        smallImage: "data/images/levels/level3.png",
        name: "SmallCastle",
        terrainImage: "level3",
        spawnPionts: [{"x":1575.275298536866,"y":1790.5508663509784},{"x":1313.275298536866,"y":1936.5508663509784},{"x":2363.275298536866,"y":1811.5508663509784},{"x":3035.275298536866,"y":1748.5508663509784},{"x":3510.275298536866,"y":1445.5508663509784},{"x":3839.275298536866,"y":1541.5508663509784},{"x":3633.275298536866,"y":1800.5508663509784},{"x":3252.275298536866,"y":1498.5508663509784},{"x":2112.275298536866,"y":1024.5508663509784},{"x":1838.275298536866,"y":1069.5508663509784},{"x":2067.275298536866,"y":1643.5508663509784},{"x":2507.275298536866,"y":1726.5508663509784},{"x":2706.275298536866,"y":1766.5508663509784}],
        backgroundGraidentCss: "background: -webkit-linear-gradient(top,  #242a4a 0%,#201610 100%);",
        info: " Pritaes and shit "
    }

     export var ship = {
         smallImage: "data/images/levels/level5.png",
        name: "Ships",
        terrainImage: "level5",
        spawnPionts: [{"x":3897.863193612373,"y":1971.9089369086514},{"x":3685.863193612373,"y":1976.9089369086514},{"x":3638.863193612373,"y":1611.9089369086514},{"x":3477.863193612373,"y":1614.9089369086514},{"x":3790.863193612373,"y":1450.9089369086514},{"x":3021.863193612373,"y":1230.9089369086514},{"x":3030.863193612373,"y":1058.9089369086514},{"x":3534.863193612373,"y":1096.9089369086514},{"x":2221.863193612373,"y":1464.9089369086514},{"x":2371.863193612373,"y":1479.9089369086514},{"x":1426.863193612373,"y":1572.9089369086514},{"x":1712.863193612373,"y":1318.9089369086514},{"x":1401.863193612373,"y":1227.9089369086514},{"x":2007.863193612373,"y":1001.9089369086514},{"x":2559.863193612373,"y":1004.9089369086514}],
        backgroundGraidentCss: "background: -webkit-linear-gradient(top,  #242a4a 0%,#201610 100%);",
        info: " Pritaes and shit "
    }

   export var titanic = {
       smallImage: "data/images/levels/level20.png",
        name: "Titanic",
        terrainImage: "level20",
        spawnPionts: [{"x":1339.692335438047,"y":1164.8114860205706},{"x":1284.692335438047,"y":2027.8114860205706},{"x":1750.692335438047,"y":2335.8114860205706},{"x":1974.692335438047,"y":2135.8114860205706},{"x":1690.692335438047,"y":1432.8114860205706},{"x":2554.692335438047,"y":1335.8114860205706},{"x":3066.692335438047,"y":1629.8114860205706},{"x":3369.692335438047,"y":2130.8114860205706},{"x":3844.692335438047,"y":2341.8114860205706},{"x":3857.692335438047,"y":2553.8114860205706},{"x":4928.692335438047,"y":2572.8114860205706},{"x":2389.692335438047,"y":2571.8114860205706},{"x":3194.692335438047,"y":2393.8114860205706},{"x":3809.692335438047,"y":2338.8114860205706},{"x":3348.692335438047,"y":1871.8114860205706},{"x":2893.692335438047,"y":1929.8114860205706},{"x":3829.692335438047,"y":1735.8114860205706},{"x":2205.692335438047,"y":1934.8114860205706},{"x":2328.692335438047,"y":1988.8114860205706},{"x":2240.692335438047,"y":1482.8114860205706}],
        backgroundGraidentCss: "background: -webkit-linear-gradient(top,  #242a4a 0%,#201610 100%);",
        info: " Pritaes and shit "
    }
}