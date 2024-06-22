// The never type represents values that never occur. For example, a function that always throws an error or a function that never returns.

function error(message: string): never {
    throw new Error(message);
    console.log(message);
}

error("this is error");
