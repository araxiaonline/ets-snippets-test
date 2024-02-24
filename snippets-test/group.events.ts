const onGroupCreate: group_event_on_create = (event: number, group: Group, leaderGuid: number, groupType: number) => {
    // Implementation
};

// Register
RegisterGroupEvent(GroupEvents.GROUP_EVENT_ON_CREATE, (...args) => onGroupCreate(...args));

const onGroupDisband: group_event_on_disband = (event: number, group: Group) => {
    // Implementation
};

// Register
RegisterGroupEvent(GroupEvents.GROUP_EVENT_ON_DISBAND, (...args) => onGroupDisband(...args));

const onGroupLeaderChange: group_event_on_leader_change = (event: number, group: Group, newLeaderGuid: number, oldLeaderGuid: number) => {
    // Implementation
};

// Register
RegisterGroupEvent(GroupEvents.GROUP_EVENT_ON_LEADER_CHANGE, (...args) => onGroupLeaderChange(...args));

const onGroupMemberAdd: group_event_on_member_add = (event: number, group: Group, guid: number) => {
    // Implementation
};

// Register
RegisterGroupEvent(GroupEvents.GROUP_EVENT_ON_MEMBER_ADD, (...args) => onGroupMemberAdd(...args));

const onGroupInvite: group_event_on_member_invite = (event: number, group: Group, guid: number) => {
    // Implementation
};

// Register
RegisterGroupEvent(GroupEvents.GROUP_EVENT_ON_MEMBER_INVITE, (...args) => onGroupInvite(...args));

const onGroupRemove: group_event_on_member_remove = (event: number, group: Group, guid: number, method: number) => {
    // Implementation
};

// Register
RegisterGroupEvent(GroupEvents.GROUP_EVENT_ON_MEMBER_REMOVE, (...args) => onGroupRemove(...args));