let request = {
    requestUri: serviceRoot + "TestCaseMain?$filter=testCaseId eq " + testCaseId,
    method: "GET",
    headers: {  
        "Content-Type": "application/json", 
        "Accept": "application/json", 
        "Authorization": "Bearer " + token
        },
    data: null
};

odatajs.oData.request(
    request, 
    function (data, response) {
        
    },
    function (err) {
        
    }
);

let request = {
    requestUri: serviceRoot + "TestCaseMain(ID=" + templateId + ",IsActiveEntity=true)/TestCaseService.copy",
    method: "POST",
    headers: {  
        "Content-Type": "application/json", 
        "Accept": "application/json", 
        "Authorization": "Bearer " + token
        },
    data: null
};

odatajs.oData.request(
    request, 
    function (data, response) {
        
    },
    function (err) {
        
    }
);

let request = {
    requestUri: serviceRoot + "TestCaseMain(ID=" + draftTestCaseEntityId + ",IsActiveEntity=false)/TestCaseService.draftActivate",
    method: "POST",
    headers: {  
        "Content-Type": "application/json", 
        "Accept": "application/json", 
        "Authorization": "Bearer " + token
        },
    data: null
};

odatajs.oData.request(
    request, 
    function (data, response) {
    },
    function (err) {
    }
);

let request = {
    requestUri: serviceRoot + "TestCaseMain(ID=" + activeTestCaseEntityId + ",IsActiveEntity=true)?$expand=input,inputVars,expResults",
    method: "POST",
    headers: {  
        "Content-Type": "application/json", 
        "Accept": "application/json", 
        "Authorization": "Bearer " + token
        },
    data: null
};

odatajs.oData.request(
    request, 
    function (data, response) {
    },
    function (err) {
    }
);

let request = {
    requestUri: serviceRoot + "TestCaseMain(ID=" + activeTestCaseEntityId + ",IsActiveEntity=true)",
    method: "PATCH",
    headers: {  
        "Content-Type": "application/json", 
        "Accept": "application/json", 
        "Authorization": "Bearer " + token
        },
    data: body
};

odatajs.oData.request(
    request, 
    function (data, response) {
    },
    function (err) {
    }
);
