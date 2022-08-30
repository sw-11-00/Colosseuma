package colosseuma

import (
	"ColosseumA/x/colosseuma/keeper"
	"ColosseumA/x/colosseuma/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// Set all the coinSymbol
	for _, elem := range genState.CoinSymbolList {
		k.SetCoinSymbol(ctx, elem)
	}

	// Set coinSymbol count
	k.SetCoinSymbolCount(ctx, genState.CoinSymbolCount)
	// this line is used by starport scaffolding # genesis/module/init
	k.SetParams(ctx, genState.Params)
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()
	genesis.Params = k.GetParams(ctx)

	genesis.CoinSymbolList = k.GetAllCoinSymbol(ctx)
	genesis.CoinSymbolCount = k.GetCoinSymbolCount(ctx)
	// this line is used by starport scaffolding # genesis/module/export

	return genesis
}
