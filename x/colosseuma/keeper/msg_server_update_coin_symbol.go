package keeper

import (
	"context"

	"ColosseumA/x/colosseuma/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UpdateCoinSymbol(goCtx context.Context, msg *types.MsgUpdateCoinSymbol) (*types.MsgUpdateCoinSymbolResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgUpdateCoinSymbolResponse{}, nil
}
