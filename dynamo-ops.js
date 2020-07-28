export const getItems = async (tableName,docClient) => {
    let params = {
        TableName: tableName,
        Select: "ALL_ATTRIBUTES"
    };
    return await new Promise((resolve, reject) => {
        docClient.scan(params, function (err, data) {
            if (err) {
                reject(err)
            } else {
                resolve(data.Items)
            }
        })
    });
}

/**
 * 
 * getItemById - gets a single item from a dynamodb table using it's id
 * @param {*} docClient - the connection
 * @param {*} tableName - table where the key is stored
 * @param {*} id - the id for the lookup
 * @param {*} idField - optional.  overrride default id field name
 * 
 * returns just the item from dynamo resultset if available
 */
export const getItemById = async (docClient, tableName, id, idField = 'id') => {

    console.log(`getting data for item ${id}`)
    var params = {
        TableName: tableName,
        KeyConditionExpression: '#id=:id',
        ExpressionAttributeValues: {    
            ":id": id
        },
        ExpressionAttributeNames: {
            "#id": idField
        },
        ScanIndexForward: false
    };
    console.log(params)
    let results = await docClient.query(params).promise()
    console.log(`results: ${JSON.stringify(results)}`)
    return results.Items[0];

}

export const insertItem = async (docClient, tableName, item) => {
    let params = {
      TableName: tableName,
      Item: {}
    }
  
    params.Item = Object.assign(params.Item, item)
    console.log(`params: ${JSON.stringify(params)}`)

    let result = docClient.put(params).promise()
    console.log('result...')
    console.log(result)
    console.log('end result...')
    return result;
  }