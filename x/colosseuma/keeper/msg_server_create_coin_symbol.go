package keeper

import (
	"context"

	"ColosseumA/x/colosseuma/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateCoinSymbol(goCtx context.Context, msg *types.MsgCreateCoinSymbol) (*types.MsgCreateCoinSymbolResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgCreateCoinSymbolResponse{}, nil
}
