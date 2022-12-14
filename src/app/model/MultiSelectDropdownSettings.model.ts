export class MultiSelectDropdownSettings {
    singleSelection: boolean;
    selectAllText: string;
    unSelectAllText: string;
    itemsShowLimit: number;
    allowSearchFilter: boolean;
    idField: string;
    textField: string;
    searchPlaceholderText?: string;
    clearSearchFilter?: boolean;
    enableCheckAll?: boolean;

    constructor(singleSelection: boolean, selectAllText: string, unSelectAllText: string, itemsShowLimit: number, allowSearchFilter: boolean, idField: string, textField: string, searchPlaceholderText?: string, clearSearchFilter?: boolean, enableCheckAll?: boolean) {
        this.singleSelection = singleSelection;
        this.selectAllText = selectAllText;
        this.unSelectAllText = unSelectAllText;
        this.itemsShowLimit = itemsShowLimit;
        this.allowSearchFilter = allowSearchFilter;
        this.idField = idField;
        this.textField = textField;
        this.searchPlaceholderText = searchPlaceholderText;
        this.clearSearchFilter = clearSearchFilter;
        this.enableCheckAll = enableCheckAll;
    }
}