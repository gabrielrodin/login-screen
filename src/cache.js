export function AdicionarCache() {
   const addDataIntoCache = (cacheName, url, response) => {
      const data = new Response(JSON.stringify(response));
      console.log(data);
      if ("caches" in window) {
         caches.open(cacheName).then((cache) => {
            cache.put(url, data);
            alert("Data Added into cache!");
         });
      }
   };
   
   return (
      <button
         onClick={() =>
            addDataIntoCache(
               "MyCache",
               "https://www.youtube.com/watch?v=593aHSRpjYI",
               "SampleData"
            )
         }>Adicionar data ao cache!</button>

   )
}