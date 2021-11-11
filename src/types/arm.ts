interface armField {
    name: string,
    required: boolean,
    description: string,
    dbcolname: string,
    dbcoltype: string,
    contentType: string,
    order: "10",
    "filter": {
        "ctrlCode": "number_input",
        "ctrlParams": {
            "validationRules": {
                "integer": {
                    "title": "Цифры целые",
                    "is_number": true,
                    "descr": ""
                }
            }
        },
        "lookup_columns": []
    },
    "list": {
        "ctrlCode": "text_static",
        "ctrlParams": {
            "isLink": true
        },
        "lookup_columns": [],
        "columnWidth": "10"
    },
    card: {
        ctrlCode: string,
        ctrlParams: object,
        lookup_columns: Array<any>
    }
}


export interface Arm{
    id: string,
    caption: string,
    description: string,
    fields: Array<armField>,
    childArms: [],
    parentArms: [],
    maintable: {
        name: string,
        schema: string,
        source: string
    },
    "prefilters": [],
    customSQL: {
        filterSQL: string,
        selectSQL: string,
        insertSQL: string,
        updateSQL: string,
        deleteSQL: string,
    },
    "customOptions": {},
    "pageSize": 20,
    "isAddable": true,
    "isDeletable": true,
    "isEditable": true,
    "editHistoryEnabled": "OFF",
    "isIndexing": false,
    "isTreeView": false,
    "isImmediateShowList": true,
    "isNeedFillFilter": false,
    "isRequireCaptcha": false,
    "usageType": 1
}