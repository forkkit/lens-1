// Transaction Tags

enum Tag {
    Nop = 0,
    Generic,
    CreateContract,
    Stake
}

const STORAGE_KEYS = {
    STORED_HOSTS: "storedHosts",
    CURRENT_HOST: "currentHost"
};
const DEFAULT_API_HOST = location.hostname + ":9000";

export { Tag, STORAGE_KEYS, DEFAULT_API_HOST };
