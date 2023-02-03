// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`10001000080909090909090909090909090909070b0d030201010201010101010101010a0b01020202010202020202020202020a0b01010202010202020101010102020a0b02010202010201010202020102020a0b02010202010202020202020102020a0b02010202010201010102020102020a0b02010202010202020102020102020a0b02010202010202020101010101020a0b02010202010202020102020202020a0b02010202010101010102020202020a0b02020202010202020202020202020a0b02010201010202010101010101010a0b02010202020202040202020202020a0b02010202020202040202020202020a050c0c0c0c0c0c0c0c0c0c0c0c0c0c06`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . 2 2 . 2 2 2 2 2 2 2 2 2 
2 2 . . . 2 . . . . . . . . . 2 
2 2 2 . . 2 . . . 2 2 2 2 . . 2 
2 . 2 . . 2 . 2 2 . . . 2 . . 2 
2 . 2 . . 2 . . . . . . 2 . . 2 
2 . 2 . . 2 . 2 2 2 . . 2 . . 2 
2 . 2 . . 2 . . . 2 . . 2 . . 2 
2 . 2 . . 2 . . . 2 2 2 2 2 . 2 
2 . 2 . . 2 . . . 2 . . . . . 2 
2 . 2 . . 2 2 2 2 2 . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . 2 . 2 2 . . 2 2 2 2 2 2 2 2 
2 . 2 . . . . . 2 . . . . . . 2 
2 . 2 . . . . . 2 . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.doorClosedEast,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterSouth0,sprites.dungeon.stairEast], TileScale.Sixteen);
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
// Código generado automáticamente. No editar.
