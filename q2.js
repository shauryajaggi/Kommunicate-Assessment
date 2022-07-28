function getUrlParameterValue(url, parameter) {

    let parameters = new URLSearchParams(url);
    return parameters.get(parameter);
}
var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getUrlParameterValue(url, "utm_medium"));
console.log(getUrlParameterValue(url, "utm_campaign"));