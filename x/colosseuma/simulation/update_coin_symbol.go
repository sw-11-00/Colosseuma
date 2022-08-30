package simulation

import (
	"math/rand"

	"ColosseumA/x/colosseuma/keeper"
	"ColosseumA/x/colosseuma/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgUpdateCoinSymbol(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgUpdateCoinSymbol{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the UpdateCoinSymbol simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "UpdateCoinSymbol simulation not implemented"), nil, nil
	}
}
