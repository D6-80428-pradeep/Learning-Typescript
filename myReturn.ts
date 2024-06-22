type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
function fetchData(): Promise<string> {
    // Fetch data from an API
    return Promise.resolve('Data received');
}
type ResultType = MyReturnType<typeof fetchData>; // string
