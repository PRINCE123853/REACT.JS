function DataFatcher() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
//only first render


  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {data.map((post) => {
            <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
