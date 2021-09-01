const Type = {
    MOUSE_MOVE: 'MOUSE_MOVE',
    KEY_PRESS: 'KEY_PRESS',
    WRITE: 'WRITE',
    MOUSE_CLICK: 'MOUSE_CLICK'
};

Object.freeze(Type)

function stepType(Type) {
    this.type = Type || Type.MOUSE_MOVE
};

function Step(type) {
    this.base = stepType
    this.base(type)
};