interface Result<T> {
  data: T | null;
  error: T | null;
}

interface User {
  username: string;
}

interface Product {
  title: string;
}

function fetchData<T>(): Result<T> {
  return { data: null, error: null };
}

const user = fetchData<User>();
const product = fetchData<Product>();
