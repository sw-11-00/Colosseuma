/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../colosseuma/params";
import { CoinSymbol } from "../colosseuma/coin_symbol";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";

export const protobufPackage = "colosseuma.colosseuma";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetCoinSymbolRequest {
  id: number;
}

export interface QueryGetCoinSymbolResponse {
  CoinSymbol: CoinSymbol | undefined;
}

export interface QueryAllCoinSymbolRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllCoinSymbolResponse {
  CoinSymbol: CoinSymbol[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetCoinSymbolRequest: object = { id: 0 };

export const QueryGetCoinSymbolRequest = {
  encode(
    message: QueryGetCoinSymbolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCoinSymbolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCoinSymbolRequest,
    } as QueryGetCoinSymbolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCoinSymbolRequest {
    const message = {
      ...baseQueryGetCoinSymbolRequest,
    } as QueryGetCoinSymbolRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCoinSymbolRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCoinSymbolRequest>
  ): QueryGetCoinSymbolRequest {
    const message = {
      ...baseQueryGetCoinSymbolRequest,
    } as QueryGetCoinSymbolRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCoinSymbolResponse: object = {};

export const QueryGetCoinSymbolResponse = {
  encode(
    message: QueryGetCoinSymbolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.CoinSymbol !== undefined) {
      CoinSymbol.encode(message.CoinSymbol, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCoinSymbolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCoinSymbolResponse,
    } as QueryGetCoinSymbolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CoinSymbol = CoinSymbol.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCoinSymbolResponse {
    const message = {
      ...baseQueryGetCoinSymbolResponse,
    } as QueryGetCoinSymbolResponse;
    if (object.CoinSymbol !== undefined && object.CoinSymbol !== null) {
      message.CoinSymbol = CoinSymbol.fromJSON(object.CoinSymbol);
    } else {
      message.CoinSymbol = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCoinSymbolResponse): unknown {
    const obj: any = {};
    message.CoinSymbol !== undefined &&
      (obj.CoinSymbol = message.CoinSymbol
        ? CoinSymbol.toJSON(message.CoinSymbol)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCoinSymbolResponse>
  ): QueryGetCoinSymbolResponse {
    const message = {
      ...baseQueryGetCoinSymbolResponse,
    } as QueryGetCoinSymbolResponse;
    if (object.CoinSymbol !== undefined && object.CoinSymbol !== null) {
      message.CoinSymbol = CoinSymbol.fromPartial(object.CoinSymbol);
    } else {
      message.CoinSymbol = undefined;
    }
    return message;
  },
};

const baseQueryAllCoinSymbolRequest: object = {};

export const QueryAllCoinSymbolRequest = {
  encode(
    message: QueryAllCoinSymbolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCoinSymbolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCoinSymbolRequest,
    } as QueryAllCoinSymbolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCoinSymbolRequest {
    const message = {
      ...baseQueryAllCoinSymbolRequest,
    } as QueryAllCoinSymbolRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCoinSymbolRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCoinSymbolRequest>
  ): QueryAllCoinSymbolRequest {
    const message = {
      ...baseQueryAllCoinSymbolRequest,
    } as QueryAllCoinSymbolRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllCoinSymbolResponse: object = {};

export const QueryAllCoinSymbolResponse = {
  encode(
    message: QueryAllCoinSymbolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.CoinSymbol) {
      CoinSymbol.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCoinSymbolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCoinSymbolResponse,
    } as QueryAllCoinSymbolResponse;
    message.CoinSymbol = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.CoinSymbol.push(CoinSymbol.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCoinSymbolResponse {
    const message = {
      ...baseQueryAllCoinSymbolResponse,
    } as QueryAllCoinSymbolResponse;
    message.CoinSymbol = [];
    if (object.CoinSymbol !== undefined && object.CoinSymbol !== null) {
      for (const e of object.CoinSymbol) {
        message.CoinSymbol.push(CoinSymbol.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllCoinSymbolResponse): unknown {
    const obj: any = {};
    if (message.CoinSymbol) {
      obj.CoinSymbol = message.CoinSymbol.map((e) =>
        e ? CoinSymbol.toJSON(e) : undefined
      );
    } else {
      obj.CoinSymbol = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCoinSymbolResponse>
  ): QueryAllCoinSymbolResponse {
    const message = {
      ...baseQueryAllCoinSymbolResponse,
    } as QueryAllCoinSymbolResponse;
    message.CoinSymbol = [];
    if (object.CoinSymbol !== undefined && object.CoinSymbol !== null) {
      for (const e of object.CoinSymbol) {
        message.CoinSymbol.push(CoinSymbol.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a CoinSymbol by id. */
  CoinSymbol(
    request: QueryGetCoinSymbolRequest
  ): Promise<QueryGetCoinSymbolResponse>;
  /** Queries a list of CoinSymbol items. */
  CoinSymbolAll(
    request: QueryAllCoinSymbolRequest
  ): Promise<QueryAllCoinSymbolResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "colosseuma.colosseuma.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  CoinSymbol(
    request: QueryGetCoinSymbolRequest
  ): Promise<QueryGetCoinSymbolResponse> {
    const data = QueryGetCoinSymbolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "colosseuma.colosseuma.Query",
      "CoinSymbol",
      data
    );
    return promise.then((data) =>
      QueryGetCoinSymbolResponse.decode(new Reader(data))
    );
  }

  CoinSymbolAll(
    request: QueryAllCoinSymbolRequest
  ): Promise<QueryAllCoinSymbolResponse> {
    const data = QueryAllCoinSymbolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "colosseuma.colosseuma.Query",
      "CoinSymbolAll",
      data
    );
    return promise.then((data) =>
      QueryAllCoinSymbolResponse.decode(new Reader(data))
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
