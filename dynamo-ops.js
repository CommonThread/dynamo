export const getItem = async (docClient, tableName, field, value) => {
    let params = {
        TableName: tableName,
        Select: "ALL_ATTRIBUTES",
        FilterExpression: " #f=:f",
        ExpressionAttributeValues: {
            ":f": value
        },
        ExpressionAttributeNames: {
            "#f": field
        }
    };

    let result = await  docClient.scan(params).promise()

    return result.Items[0]
    
};

export const getItems = async (tableName, docClient) => {
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
export const getItemById = async (docClient, tableName, id, idField = 'id', rangeId, rangeIdField = 'rangeId') => {

    let keyExp2 = ''
    if(rangeId) {
        keyExp2 = `and #rId=:rId`
    }
    console.log(`getting data for item ${id}`)
    var params = {
        TableName: tableName,
        KeyConditionExpression: `#id=:id${keyExp2}`,
        ExpressionAttributeValues: {
            ":id": id
        },
        ExpressionAttributeNames: {
            "#id": idField
        },
        ScanIndexForward: false
    };
    if(rangeId){
        params.ExpressionAttributeValues[":rId"] = rangeId
        params.ExpressionAttributeNames["#rId"] = rangeIdField

    }
    console.log(params)
    let results = await docClient.query(params).promise()
    console.log(`results: ${JSON.stringify(results)}`)
    return results.Items[0];

}



export const getItemByRangeId = async (id, idField = 'id', rangeId, rangeIdField = 'rangeId') => {
    const docClient = new aws.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    let table = process.env.PROCESSING_REQUEST_TABLE
    let keyExp2 = ''
        if(rangeId) {
            keyExp2 = `and #rId=:rId`
        }
        console.log(`getting data for item ${id}`)
        var params = {
            TableName: tableName,
            KeyConditionExpression: `#id=:id${keyExp2}`,
            ExpressionAttributeValues: {
                ":id": id
            },
            ExpressionAttributeNames: {
                "#id": idField
            },
            ScanIndexForward: false
        };
        if(rangeId){
            params.ExpressionAttributeValues[":rId"] = rangeId
            params.ExpressionAttributeNames["#rId"] = rangeIdField
    
        }
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

    let result = await docClient.put(params).promise()
    console.log('result...')
    console.log(result)
    console.log('end result...')
    return result;
}

export const updateItem = async (docClient, tableName, data, id, idField = 'id') => {

    let params = {
        TableName: tableName,
        Key: {},
        UpdateExpression: "set ",
        ExpressionAttributeValues: {},
        ExpressionAttributeNames: {},
        ReturnValues: "ALL_NEW"
    };

    params.Key[idField] = id

    let expressionValues = []
    Object.keys(data).forEach((key) => {
        expressionValues.push(`#${key} = :${key}`)
        params.ExpressionAttributeNames[`#${key}`] = key
        params.ExpressionAttributeValues[`:${key}`] = data[key]
    })

    params.UpdateExpression += expressionValues.join()

    let result = await docClient.update(params).promise()

    return result
}

export const deleteItem = async (docClient, tableName, keys, keyValues) => {

    let params = {
      TableName: tableName,
      Key: {}
    };
    params.Key[keys[0]] = keyValues[0]
    if(keys.length > 1){
      params.Key[keys[1]] = keyValues[1]
    }
  
    console.log(params)
    return await docClient.delete(params).promise();
  }