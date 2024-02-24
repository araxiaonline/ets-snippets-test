const MyItemEntry = 900000; 
const MyMenuId = 1000000; 
const MyGameObjectEntry = 1000000;
const MyCreatureEntry = 1000000;


const onItemGossipHello: gossip_event_on_hello = (event: number, player: Player, item: Item): boolean => {
    // Implementation
    return true;
};

// Register Item Gossip Event on Hello
RegisterItemGossipEvent(MyItemEntry, GossipEvents.GOSSIP_EVENT_ON_HELLO, (...args) => onItemGossipHello(...args));

const onItemGossipSelect: gossip_event_on_select = (event: number, player: Player, item: Item, sender: number, intid: number, code: string, menuId?: number): boolean => {
    // Implementation
    return true;
};

// Register Item Gossip Event on Select
RegisterItemGossipEvent(MyItemEntry, GossipEvents.GOSSIP_EVENT_ON_SELECT, (...args) => onItemGossipSelect(...args));

const onPlayerGossipHello: gossip_event_on_hello = (event: number, player: Player, object: Object): boolean => {
    // Implementation
    return true;
};

// Register Player Gossip Event on Hello
RegisterPlayerGossipEvent(MyMenuId, GossipEvents.GOSSIP_EVENT_ON_HELLO, (...args) => onPlayerGossipHello(...args));

const onPlayerGossipSelect: gossip_event_on_select = (event: number, player: Player, object: Object, sender: number, intid: number, code: string, menuId?: number): boolean => {
    // Implementation
    return true;
};

// Register Player Gossip Event on Select
RegisterItemGossipEvent(MyMenuId, GossipEvents.GOSSIP_EVENT_ON_SELECT, (...args) => onPlayerGossipSelect(...args));

const onGameObjGossipHello: gossip_event_on_hello = (event: number, player: Player, gameObject: GameObject): boolean => {
    // Implementation
    return true;
};

// Register GameObject Gossip Event on Hello
RegisterGameObjectGossipEvent(MyGameObjectEntry, GossipEvents.GOSSIP_EVENT_ON_HELLO, (...args) => onGameObjGossipHello(...args));

const onGameObjGossipSelect: gossip_event_on_select = (event: number, player: Player, gameObject: GameObject, sender: number, intid: number, code: string, menuId?: number): boolean => {
    // Implementation
    return true;
};

// Register GameObject Gossip Event on Select
RegisterGameObjectGossipEvent(MyGameObjectEntry, GossipEvents.GOSSIP_EVENT_ON_SELECT, (...args) => onGameObjGossipSelect(...args));

const onCreatureGossipHello: gossip_event_on_hello = (event: number, player: Player, creature: Creature): boolean => {
    // Implementation
    return true;
};

// Register Creature Gossip Event on Hello
RegisterCreatureGossipEvent(MyCreatureEntry, GossipEvents.GOSSIP_EVENT_ON_HELLO, (...args) => onCreatureGossipHello(...args));

const onCreatureGossipSelect: gossip_event_on_select = (event: number, player: Player, creature: Creature, sender: number, intid: number, code: string, menuId?: number): boolean => {
    // Implementation
    return true;
};

// Register Creature Gossip Event on Select
RegisterCreatureGossipEvent(MyCreatureEntry, GossipEvents.GOSSIP_EVENT_ON_SELECT, (...args) => onCreatureGossipSelect(...args));