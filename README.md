# dynamodb-crud
Basic CRUD operations for dynamo DB  

Source available [here](https://github.com/CommonThread/dynamo)

   <br/>
getItem 

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | field  | <code>string</code> | search field name |
   | value | <code>string</code> | search field value    |

   <br/>
getItems

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |

   <br/>
   getItemById

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | id  | <code>string</code> | id field value |
   | idField | <code>string</code> | id field name    |
   | rangeId  | <code>string</code> | rangeId field value |
   | rangeIdField | <code>string</code> | rangeIdField field name    |  

   <br/>
insertItem

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | item  | <code>object</code> | object to insert |

   <br/>
updateItem

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | data | <code>object</code> | data to update with     |
   | id  | <code>string</code> | id field value |
   | idField | <code>string</code> | id field name    |

   <br/>
deleteItem

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | keys  | <code>string array</code> | field names to update |
   | keyValues | <code>string array</code> | field value to update    |

   <br/>
