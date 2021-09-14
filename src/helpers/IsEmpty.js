// Function to validate any input text

export default function IsEmpty(toCompare){
    let response = false;

    if(toCompare.trim().length > 3){
        response = true;
    }
    else {
        response = false;
    }

    return response;
}