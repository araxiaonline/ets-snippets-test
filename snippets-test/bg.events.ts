const onBGCreate: bg_event_on_create = (event: number, bg: BattleGround, bgId: BattleGroundTypeId, instanceId: number) => {
    // Implementation
};

// Register
RegisterBGEvent(BGEvents.BG_EVENT_ON_CREATE, (...args) => onBGCreate(...args));

const onBGEnd: bg_event_on_end = (event: number, bg: BattleGround, bgId: BattleGroundTypeId, instanceId: number, winner: Team) => {
    // Implementation
};

// Register
RegisterBGEvent(BGEvents.BG_EVENT_ON_END, (...args) => onBGEnd(...args));

const onBGPreDestroy: bg_event_on_pre_destroy = (event: number, bg: BattleGround, bgId: BattleGroundTypeId, instanceId: number) => {
    // Implementation
};

// Register
RegisterBGEvent(BGEvents.BG_EVENT_ON_PRE_DESTROY, (...args) => onBGPreDestroy(...args));

const onBGStart: bg_event_on_start = (event: number, bg: BattleGround, bgId: BattleGroundTypeId, instanceId: number) => {
    // Implementation
};

// Register
RegisterBGEvent(BGEvents.BG_EVENT_ON_START, (...args) => onBGStart(...args));