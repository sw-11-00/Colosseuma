/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "colosseuma.colosseuma";

export interface MsgCreateCoinSymbol {
  creator: string;
  symbol: string;
}

export interface MsgCreateCoinSymbolResponse {}

export interface MsgDeleteCoinSymbol {
  creator: string;
  id: number;
}

export interface MsgDeleteCoinSymbolResponse {}

const baseMsgCreateCoinSymbol: object = { creator: "", symbol: "" };

export const MsgCreateCoinSymbol = {
  encode(
    message: MsgCreateCoinSymbol,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.symbol !== "") {
      writer.uint32(18).string(message.symbol);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateCoinSymbol {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateCoinSymbol } as MsgCreateCoinSymbol;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.symbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCoinSymbol {
    const message = { ...baseMsgCreateCoinSymbol } as MsgCreateCoinSymbol;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    return message;
  },

  toJSON(message: MsgCreateCoinSymbol): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateCoinSymbol>): MsgCreateCoinSymbol {
    const message = { ...baseMsgCreateCoinSymbol } as MsgCreateCoinSymbol;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    return message;
  },
};

const baseMsgCreateCoinSymbolResponse: object = {};

export const MsgCreateCoinSymbolResponse = {
  encode(
    _: MsgCreateCoinSymbolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCreateCoinSymbolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCreateCoinSymbolResponse,
    } as MsgCreateCoinSymbolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateCoinSymbolResponse {
    const message = {
      ...baseMsgCreateCoinSymbolResponse,
    } as MsgCreateCoinSymbolResponse;
    return message;
  },

  toJSON(_: MsgCreateCoinSymbolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgCreateCoinSymbolResponse>
  ): MsgCreateCoinSymbolResponse {
    const message = {
      ...baseMsgCreateCoinSymbolResponse,
    } as MsgCreateCoinSymbolResponse;
    return message;
  },
};

const baseMsgDeleteCoinSymbol: object = { creator: "", id: 0 };

export const MsgDeleteCoinSymbol = {
  encode(
    message: MsgDeleteCoinSymbol,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteCoinSymbol {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteCoinSymbol } as MsgDeleteCoinSymbol;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteCoinSymbol {
    const message = { ...baseMsgDeleteCoinSymbol } as MsgDeleteCoinSymbol;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgDeleteCoinSymbol): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteCoinSymbol>): MsgDeleteCoinSymbol {
    const message = { ...baseMsgDeleteCoinSymbol } as MsgDeleteCoinSymbol;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseMsgDeleteCoinSymbolResponse: object = {};

export const MsgDeleteCoinSymbolResponse = {
  encode(
    _: MsgDeleteCoinSymbolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteCoinSymbolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDeleteCoinSymbolResponse,
    } as MsgDeleteCoinSymbolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteCoinSymbolResponse {
    const message = {
      ...baseMsgDeleteCoinSymbolResponse,
    } as MsgDeleteCoinSymbolResponse;
    return message;
  },

  toJSON(_: MsgDeleteCoinSymbolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDeleteCoinSymbolResponse>
  ): MsgDeleteCoinSymbolResponse {
    const message = {
      ...baseMsgDeleteCoinSymbolResponse,
    } as MsgDeleteCoinSymbolResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  CreateCoinSymbol(
    request: MsgCreateCoinSymbol
  ): Promise<MsgCreateCoinSymbolResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  DeleteCoinSymbol(
    request: MsgDeleteCoinSymbol
  ): Promise<MsgDeleteCoinSymbolResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  CreateCoinSymbol(
    request: MsgCreateCoinSymbol
  ): Promise<MsgCreateCoinSymbolResponse> {
    const data = MsgCreateCoinSymbol.encode(request).finish();
    const promise = this.rpc.request(
      "colosseuma.colosseuma.Msg",
      "CreateCoinSymbol",
      data
    );
    return promise.then((data) =>
      MsgCreateCoinSymbolResponse.decode(new Reader(data))
    );
  }

  DeleteCoinSymbol(
    request: MsgDeleteCoinSymbol
  ): Promise<MsgDeleteCoinSymbolResponse> {
    const data = MsgDeleteCoinSymbol.encode(request).finish();
    const promise = this.rpc.request(
      "colosseuma.colosseuma.Msg",
      "DeleteCoinSymbol",
      data
    );
    return promise.then((data) =>
      MsgDeleteCoinSymbolResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
