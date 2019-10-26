export declare type IListRender = (index: number) => any;
interface IList {
    itemCount: number;
    layout?: 'horizontal' | 'vertical';
    loadCount?: number;
    render: IListRender;
}
export interface IListState {
    stopAppend: boolean;
}
declare const List: ({ render, itemCount, loadCount, layout }: IList) => HTMLDivElement;
export default List;
