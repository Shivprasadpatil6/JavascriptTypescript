function getstatus(code){
    if(code>=200 && code<300){
        return "Success";
    }
    else if(code>=400 && code <500){
        return "client error";
    }
    else if(code>=500){
        return "server error";
    } else {
        return "unknown";
    }
}

getstatus(200);
console.log(getstatus(200));
getstatus(404);
console.log(getstatus(404));
getstatus(500);