import { Dispatch, SetStateAction } from "react";

export interface itemInterface {
    id: number,
    item: string,
    amount: number,
    checked: boolean
}

export interface itemListPropInterface {
    itemList: itemInterface[],
}

export interface searchBarPropInterface {
    itemList: itemInterface[];
    setItemList: Dispatch<SetStateAction<itemInterface[]>>;
}

export interface addItemPropInterface {
    ele: itemInterface,
    itemList: itemInterface[],
    setItemList: Dispatch<SetStateAction<itemInterface[]>>;
}