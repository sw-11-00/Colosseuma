package keeper_test

import (
	"testing"

	testkeeper "ColosseumA/testutil/keeper"
	"ColosseumA/x/colosseuma/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.ColosseumaKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
