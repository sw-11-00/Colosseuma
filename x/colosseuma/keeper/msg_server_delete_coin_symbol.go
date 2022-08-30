package keeper

import (
	"context"

	"ColosseumA/x/colosseuma/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) DeleteCoinSymbol(goCtx context.Context, msg *types.MsgDeleteCoinSymbol) (*types.MsgDeleteCoinSymbolResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgDeleteCoinSymbolResponse{}, nil
}
