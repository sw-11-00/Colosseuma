/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "colosseuma.colosseuma";

export interface MsgCreateCoinSymbol {
  creator: string;
  symbol: string;
}

export interface MsgCreateCoinSymbolResponse {}

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

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateCoinSymbol(
    request: MsgCreateCoinSymbol
  ): Promise<MsgCreateCoinSymbolResponse>;
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
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
