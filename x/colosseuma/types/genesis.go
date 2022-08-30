package types

import (
	"fmt"
)

// DefaultIndex is the default capability global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default Capability genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		CoinSymbolList: []CoinSymbol{},
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// Check for duplicated ID in coinSymbol
	coinSymbolIdMap := make(map[uint64]bool)
	coinSymbolCount := gs.GetCoinSymbolCount()
	for _, elem := range gs.CoinSymbolList {
		if _, ok := coinSymbolIdMap[elem.Id]; ok {
			return fmt.Errorf("duplicated id for coinSymbol")
		}
		if elem.Id >= coinSymbolCount {
			return fmt.Errorf("coinSymbol id should be lower or equal than the last id")
		}
		coinSymbolIdMap[elem.Id] = true
	}
	// this line is used by starport scaffolding # genesis/types/validate

	return gs.Params.Validate()
}
