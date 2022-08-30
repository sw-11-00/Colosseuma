package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgDeleteCoinSymbol = "delete_coin_symbol"

var _ sdk.Msg = &MsgDeleteCoinSymbol{}

func NewMsgDeleteCoinSymbol(creator string, id uint64) *MsgDeleteCoinSymbol {
	return &MsgDeleteCoinSymbol{
		Creator: creator,
		Id:      id,
	}
}

func (msg *MsgDeleteCoinSymbol) Route() string {
	return RouterKey
}

func (msg *MsgDeleteCoinSymbol) Type() string {
	return TypeMsgDeleteCoinSymbol
}

func (msg *MsgDeleteCoinSymbol) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteCoinSymbol) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteCoinSymbol) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
