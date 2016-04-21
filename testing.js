AWSCognito.config.region = 'us-east-1';
AWSCognito.config.sslEnabled = true;
var poolData = {
    // UserPoolId: 'us-east-1:f4dacd7d-1f39-41c7-b5eb-33744d16126a',
    // UserPoolId: 'OkR5rVdza',
    // UserPoolId: 'us-east-1_OkR5rVdza',
    UserPoolId: 'us-east-1:f4dacd7d-1f39-41c7-b5eb-33744d16126a',
    ClientId: '377em29vuj7joi6lcso3gu9dgl'
}

var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

var attributeList = [];

var registerAttrs = [
{
    Name: 'email',
    Value: 'btomasik@telkonet'
},
{
    Name: 'family_name',
    Value: 'Tomasik'
},
{
    Name: 'name',
    Value: 'Ben'
},
{
    Name: 'phone_number',
    Value: '+14143012275'
},
{
    Name: 'picture',
    Value: 'asdf.jpg'
}]

for (var this_attr_index in registerAttrs)
{
    var this_attr = registerAttrs[this_attr_index]
    console.log("Registering attribute: " + this_attr['Name'] + ": '" + this_attr['Value'] + "'")
    attr = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(
        this_attr
    );
    attributeList.push(attr);
}

userPool.signUp('btomasik@telkonet.com', 'MyAwes0m3Password!&', attributeList, null, function(err, result){
    if (err) {
        console.log('Error Occurred: ' + err);
        alert(err);
        return;
    }
    cognitoUser = result.user;
    console.log('user name is ' + cognitoUser.getUsername());
});

