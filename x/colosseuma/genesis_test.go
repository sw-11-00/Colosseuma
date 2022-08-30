package colosseuma_test

import (
	"testing"

	keepertest "ColosseumA/testutil/keeper"
	"ColosseumA/testutil/nullify"
	"ColosseumA/x/colosseuma"
	"ColosseumA/x/colosseuma/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ColosseumaKeeper(t)
	colosseuma.InitGenesis(ctx, *k, genesisState)
	got := colosseuma.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
