# dynamo-ops
Basic CRUD operations for dynamo DB


- getItem 

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | field  | <code>string</code> | search field name |
   | value | <code>string</code> | search field value    |
   
- getItems

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   
- getItemById

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | id  | <code>string</code> | id field value |
   | idField | <code>string</code> | search field name    |
   | rangeId  | <code>string</code> | rangeId field value |
   | rangeIdField | <code>string</code> | rangeIdField field name    |

   docClient, tableName, id, idField = 'id', rangeId, rangeIdField = 'rangeId'

- insertItem

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | item  | <code>object</code> | object to insert |

- updateItem

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | data | <code>object</code> | data to update with     |
   | id  | <code>string</code> | id field value |
   | idField | <code>string</code> | search field name    |

- deleteItem

   | Param  | Type                | Description  |
   | ------ | ------------------- | ------------ |
   | docClient  | <code>DocumentClient</code> | AWS Dynamodb DocumentClient |
   | tableName | <code>string</code> | table name string     |
   | keys  | <code>string array</code> | field names to update |
   | keyValues | <code>string array</code> | field value to update    |
