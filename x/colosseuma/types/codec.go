package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgCreateCoinSymbol{}, "colosseuma/CreateCoinSymbol", nil)
	cdc.RegisterConcrete(&MsgDeleteCoinSymbol{}, "colosseuma/DeleteCoinSymbol", nil)
	cdc.RegisterConcrete(&MsgUpdateCoinSymbol{}, "colosseuma/UpdateCoinSymbol", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgCreateCoinSymbol{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDeleteCoinSymbol{},
	)
	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateCoinSymbol{},
	)
	// this line is used by starport scaffolding # 3

	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)
}

var (
	Amino     = codec.NewLegacyAmino()
	ModuleCdc = codec.NewProtoCodec(cdctypes.NewInterfaceRegistry())
)
