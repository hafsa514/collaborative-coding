// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`20001400010101010101010101010101010101010101010101010101010101010101010101090101010101090101090101010101010101010109090909090909090909010109090909010109010109090909090909090909010901010101010101090101010101010901010901010901010101010101010901090909090901010109010101010101090909090101090101010101010101090101010101090101010901010209090909010109010109090b0a010109090909010b0a0101090101010901010101010109010109010101010101010109010101010101010109090901090101010909090901010909010101010101010901010101010101010101090109010108090808080801010909090909010101090101010909090909010109010901010303030305080101090101010901090909010101090101010901010901090101030303030308010109010101090109010901010109010101090101090109010107030403030909010901010109010901090909090901010109010109010901010303030303080901090909090901090109010101010101010901010901090101030303030308090109010101090109010901010101010101090101090109010103040303030809010901010109010c010901090909090909090101090109010103030307030809010901010109010101090109010101010101010109010901010703030303090909090101010901010109010901010101010101010901090101030304030308010109010909090909090901090909090909090909090109090903030303030801010901010101010101010101010101010101010101010101010303030306080101010101010101010101010101010101010101010101010101`, img`
22222222222222222222222222222222
2.22222.22.2222222222..........2
2....22.22..........2.2222222.22
2222.22.22.22222222.2.....222.22
2222....22.22222222.22222.222.22
.....22.22....22....2..22.222.22
2222.22.22222222.22222222...2.22
2....22..2222222.2222222222.2.22
2.222222.....222.222.....22.2.22
.....222.222.2...222.222.22.2.22
.....222.222.2.2.222.222.22.2.22
.......2.222.2.2.....222.22.2.22
.....2.2.....2.2.2222222.22.2.22
.....2.2.222.2.2.2222222.22.2.22
.....2.2.222.2.2.2.......22.2.22
.....2.2.222.222.2.22222222.2.22
.........222.222.2.22222222.2.22
.....222.2.......2..........2...
.....222.22222222222222222222222
.....222222222222222222222222222
`, [myTiles.transparency16,sprites.builtin.forestTiles0,sprites.castle.tilePath4,sprites.swamp.swampTile9,sprites.swamp.swampTile13,sprites.swamp.swampTile8,sprites.swamp.swampTile14,sprites.builtin.coral2,sprites.builtin.oceanDepths4,sprites.castle.tilePath5,sprites.swamp.swampTile5,sprites.swamp.swampTile4,sprites.castle.tilePath8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
