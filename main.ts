controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dino.isHittingTile(CollisionDirection.Bottom)) {
        dino.vy = -140
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f . . . . . . 
        . f 7 7 7 7 7 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f 4 . . . . 
        . f 7 7 1 f 1 7 7 7 f f . . . . 
        . f 7 7 1 1 1 7 7 7 f 4 . . . . 
        . f 7 7 7 7 7 f 7 7 f 4 4 . . . 
        . . f f f f f f 7 7 7 f f . . . 
        . . . . f 7 7 7 7 7 7 f 4 . . . 
        . . f 7 7 7 7 7 7 f 7 f 4 4 . . 
        . . f 7 7 7 7 7 7 f 7 7 f f . . 
        . . . . f 7 d d 7 7 7 7 f 4 4 . 
        . . . . f 7 d d d 7 7 7 7 f f 4 
        . . . . f 7 d d d 7 7 7 7 7 7 f 
        . . . . f 7 d f f 7 7 f f f f f 
        . . . . f f f . . f f f . . . . 
        `)
})
scene.onHitTile(SpriteKind.Player, 10, function (sprite) {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    dino.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f f f . . 
        . . . . 4 f 7 7 7 7 7 7 7 7 f . 
        . . . . 4 f 7 7 7 1 f 1 7 7 f . 
        . . . . f f 7 7 7 1 f 1 7 7 f . 
        . . . . 4 f 7 7 7 1 1 1 7 7 f . 
        . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
        . . . f f 7 7 7 f f f f f f . . 
        . . . 4 f 7 7 7 7 7 7 f . . . . 
        . . 4 4 f 7 f 7 7 7 7 7 7 f . . 
        . . f f 7 7 f 7 7 7 7 7 7 f . . 
        . 4 4 f 7 7 7 7 d d 7 f . . . . 
        4 f f 7 7 7 7 d d d 7 f . . . . 
        f 7 7 7 7 7 7 d d d 7 f . . . . 
        f f f f f 7 7 f f d 7 f . . . . 
        . . . . f f f . . f f f . . . . 
        `)
})
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    game.over(false)
})
let dino: Sprite = null
dino = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f f f . . 
    . . . . 4 f 7 7 7 7 7 7 7 7 f . 
    . . . . 4 f 7 7 7 1 f 1 7 7 f . 
    . . . . f f 7 7 7 1 f 1 7 7 f . 
    . . . . 4 f 7 7 7 1 1 1 7 7 f . 
    . . . 4 4 f 7 7 f 7 7 7 7 7 f . 
    . . . f f 7 7 7 f f f f f f . . 
    . . . 4 f 7 7 7 7 7 7 f . . . . 
    . . 4 4 f 7 f 7 7 7 7 7 7 f . . 
    . . f f 7 7 f 7 7 7 7 7 7 f . . 
    . 4 4 f 7 7 7 7 d d 7 f . . . . 
    4 f f 7 7 7 7 d d d 7 f . . . . 
    f 7 7 7 7 7 7 d d d 7 f . . . . 
    f f f f f 7 7 f f d 7 f . . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(dino, 50, 0)
scene.setBackgroundColor(6)
scene.setTileMap(img`
    9 9 9 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . 7 7 . . . . . . . . . 
    . . . . . . . . . . d d d d d . . . . . 7 e e . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . 7 e e e . . 7 7 7 . . . a 
    7 7 7 7 7 . . 7 7 . . . . . . . 7 7 7 e e e e . . e e e . . 7 7 
    e e e e e 2 2 e e 2 2 2 2 2 2 2 e e e e e e e 2 2 e e e 2 2 e e 
    `)
scene.setTile(14, img`
    b d d d d d d c c d d d d d d c 
    d b b b b b c d d c b b b b b c 
    d b b b b c d b b b c b b b b c 
    d b b b c d b b b b b c b b b c 
    d b b c d b b b b b b b c b b c 
    d b c d b b b b b b b b b c b c 
    d c d b b b b b b b b b b b c b 
    c d b b b b b b b b b b b b b c 
    c d b b b b b b b b b b b b c d 
    d c b b b b b b b b b b b c d c 
    d b c b b b b b b b b b c d b c 
    d b b c b b b b b b b c d b b c 
    d b b b c b b b b b c d b b b c 
    d b b b b c b b b c d b b b b c 
    d b b b b b c b c d b b b b b c 
    c c c c c c b c d c c c c c c a 
    `, true)
scene.setTile(7, img`
    . . . . . . . . . . 8 8 . . . . 
    . . . 8 8 . . . . . 8 8 . . . . 
    . . . 8 7 8 . . . 8 7 8 . . . . 
    . . . 8 7 6 8 . 8 8 7 8 . . . . 
    . . . 8 6 7 8 . 8 7 7 8 . 8 8 . 
    . . . 8 8 7 8 8 8 7 7 8 . 8 6 8 
    . . . 8 8 7 6 8 6 7 6 8 8 8 8 6 
    8 8 . 8 8 7 7 8 7 7 8 8 6 7 8 6 
    8 7 8 8 8 7 7 8 7 6 8 7 7 6 8 8 
    8 6 7 6 8 6 7 6 7 6 6 7 6 8 8 7 
    . 8 7 7 6 6 7 6 7 6 7 7 8 8 7 7 
    . . 8 7 7 6 7 8 7 6 7 6 8 7 7 8 
    . . . 8 7 6 7 8 6 6 7 8 6 7 8 8 
    . . . 8 7 8 7 8 6 6 8 8 6 6 8 6 
    . . . 8 6 8 6 8 6 6 8 8 6 6 8 6 
    . . . 8 6 8 6 6 6 6 8 8 6 6 8 6 
    `, true)
scene.setTile(2, img`
    c c c c c c c c c c c c c c c c 
    8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
    8 8 8 6 6 6 8 8 8 6 6 6 6 8 8 8 
    6 6 8 8 8 6 6 6 6 6 6 8 8 8 8 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    9 9 6 6 6 6 6 9 9 9 9 6 6 6 9 9 
    6 6 6 6 9 9 9 6 6 6 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
    `, true)
scene.setTile(10, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f 2 . . . . . . . 
    . . . . . . . f 2 2 2 . . . . . 
    . . . . . . . f 2 2 2 . . . . . 
    . . . . . . . f 2 2 . . . . . . 
    . . . . . . . f 2 . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . e . . . . . . . . 
    . . . . . . e e e . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, true)
scene.setTile(9, img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, false)
dino.ay = 290
scene.placeOnRandomTile(dino, 9)
scene.cameraFollowSprite(dino)
