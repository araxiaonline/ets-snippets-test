const onGuildAddMember: guild_event_on_add_member = (event: number, guild: Guild, player: Player, rank: number) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_ADD_MEMBER, (...args) => onGuildAddMember(...args));

const onGuildBankEvent: guild_event_on_bank_event = (event: number, guild: Guild, eventType: number, tabId: number, playerGUIDLow: number, itemOrMoney: number, itemStackCount: number, destTabId: number) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_BANK_EVENT, (...args) => onGuildBankEvent(...args));

const onGuildCreate: guild_event_on_create = (event: number, guild: Guild, leader: Player, name: string) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_CREATE, (...args) => onGuildCreate(...args));

const onGuildDisband: guild_event_on_disband = (event: number, guild: Guild) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_DISBAND, (...args) => onGuildDisband(...args));

const onGuildEvent: guild_event_on_event = (event: number, guild: Guild, eventType: number, plrGUIDLow1: number, plrGUIDLow2: number, newRank: number) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_EVENT, (...args) => onGuildEvent(...args));

const onGuildInfoChange: guild_event_on_info_change = (event: number, guild: Guild, newInfo: string) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_INFO_CHANGE, (...args) => onGuildInfoChange(...args));

const onGuildItemMove: guild_event_on_item_move = (event: number, guild: Guild, player: Player, item: Item, isSrcBank: boolean, srcContainer: number, srcSlotId: number, isDestBank: boolean, destContainer: number, destSlotId: number) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_ITEM_MOVE, (...args) => onGuildItemMove(...args));

const onGuildMoneyDeposit: guild_event_on_money_deposit = (event: number, guild: Guild, player: Player, amount: number) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_MONEY_DEPOSIT, (...args) => onGuildMoneyDeposit(...args));

const onGuildMoneyDraw: guild_event_on_money_withdraw = (event: number, guild: Guild, player: Player, amount: number, isRepair: boolean) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_MONEY_WITHDRAW, (...args) => onGuildMoneyDraw(...args));

const onGuildMotdChange: guild_event_on_motd_change = (event: number, guild: Guild, newMotd: string) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_MOTD_CHANGE, (...args) => onGuildMotdChange(...args));

const onGuildRemoveMember: guild_event_on_remove_member = (event: number, guild: Guild, player: Player, isDisbanding: boolean) => {
    // Implementation
};

// Register
RegisterGuildEvent(GuildEvents.GUILD_EVENT_ON_REMOVE_MEMBER, (...args) => onGuildRemoveMember(...args));
