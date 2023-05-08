export enum WalletId {
 TrustWallet = "trustwallet",
 Metamask = "metamask",
}

export enum StatusEnum {
 Initializing = "initializing",
 Unavailable = "unavailable",
 NotConnected = "notConnected",
 Connecting = "connecting",
 Connected = "connected",
}

export interface IStatusChangedEvent extends Event {
 status: StatusEnum;
}
