export declare type IListRender = (index: number) => any;
export interface IVanillaList {
    itemCount: number;
    layout?: 'horizontal' | 'vertical';
    loadCount?: number;
    render: IListRender;
}
export interface IListState {
    stopAppend: boolean;
}
declare const vanillaList: ({ render, itemCount, loadCount, layout }: IVanillaList) => HTMLDivElement;
export default vanillaList;
