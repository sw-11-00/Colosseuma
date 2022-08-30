package keeper_test

import (
	"context"
	"testing"

	keepertest "ColosseumA/testutil/keeper"
	"ColosseumA/x/colosseuma/keeper"
	"ColosseumA/x/colosseuma/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.ColosseumaKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
