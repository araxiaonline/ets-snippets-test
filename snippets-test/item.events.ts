const onItemDummy: item_event_on_dummy_effect = (event: number, caster: Player, spellId: number, effIndex: number, item: Item) => {
    // Implementation
};

// Register
RegisterItemEvent(10000, ItemEvents.ITEM_EVENT_ON_DUMMY_EFFECT, (...args) => onItemDummy(...args));

const onItemExpire: item_event_on_expire = (event: number, player: Player, itemId: number): boolean => {
    // Implementation
    return true; // Return true
};

// Register
RegisterItemEvent(10000, ItemEvents.ITEM_EVENT_ON_EXPIRE, (...args) => onItemExpire(...args));

const onItemQuestAccept: item_event_on_quest_accept = (event: number, player: Player, item: Item, quest: Quest): boolean => {
    // Implementation
    return true; // Return true
};

// Register
RegisterItemEvent(10000, ItemEvents.ITEM_EVENT_ON_QUEST_ACCEPT, (...args) => onItemQuestAccept(...args));

const onItemRemove: item_event_on_remove = (event: number, player: Player, item: Item): boolean => {
    // Implementation
    return true; // Return true
};

// Register
RegisterItemEvent(10000, ItemEvents.ITEM_EVENT_ON_REMOVE, (...args) => onItemRemove(...args));

const onItemUse: item_event_on_use = (event: number, player: Player, item: Item, target: Unit): boolean => {
    // Implementation
    return true; // Return false to stop the spell casting
};

// Register
RegisterItemEvent(10000, ItemEvents.ITEM_EVENT_ON_USE, (...args) => onItemUse(...args));