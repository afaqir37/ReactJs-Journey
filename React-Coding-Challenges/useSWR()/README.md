

📝 Problem Description: Implement Basic Usage of `useSWR`
---------------------------------------------------------

You are tasked with implementing a basic version of the `useSWR` hook, a React hook often used for data fetching and caching. Your implementation should allow fetching data from an API and storing it in a cache to prevent refetching the same data multiple times. Additionally, it should provide mechanisms for handling loading and error states.

### 🎯 Requirements:

1.  **State Management:**

    -   Your `useSWR` hook should manage three pieces of state:
        -   `data`: Stores the fetched data 📊.
        -   `isLoading`: A boolean that tracks whether data is being fetched ⏳.
        -   `error`: Stores any errors encountered during fetching ❌.
2.  **Fetcher Function:**

    -   The hook should accept a `fetcher` function as an argument. This function is responsible for fetching the data from a remote API (e.g., using `fetch` or `axios`) 🌍.
    -   The `fetcher` function should return a promise, so the hook can handle asynchronous data fetching ⏱️.
3.  **Caching:**

    -   The hook should store the fetched data in a cache (e.g., a `Map` or similar structure) so that repeated calls for the same data do not trigger additional network requests 💾.
4.  **Error Handling:**

    -   If the fetch operation encounters an error, the `error` state should be updated, and the component should display an error message ⚠️.
5.  **Basic Usage:**

    -   The hook should be used inside a component, where it will:
        -   Initiate the fetch request when the component is mounted 🚀.
        -   Display a loading message while the data is being fetched 🔄.
        -   Display the fetched data once it is successfully retrieved ✅.
        -   Display an error message if the fetch operation fails 🚨.

### 📚 Example Usage:

```javascript

const fetcher = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
   return response.json();
};

const MyComponent = () => {
   const { data, isLoading, error } = useSWR('unique-key', fetcher);

   return (
      <div>
         {isLoading && <p>Loading...</p>}
         {error && <p>Error: {error.message}</p>}
         {data && <p>Data: {JSON.stringify(data)}</p>}
      </div>
   );
};
```

### ⚡ Additional Requirements:

-   Your solution should avoid unnecessary re-fetching. If the data has already been fetched, it should be retrieved from the cache 🔄.
-   Use React's `useEffect` hook to initiate the fetch on component mount 📥.
