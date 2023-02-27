const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

onmessage = (e) => {
  const { num, id } = e.data;
  console.log(`Web Worker ${id} Start`);
  
  const startTime = new Date().getTime();
  const fibNum = fib(num);
  console.log(`Web Worker ${id} Finished`);
  postMessage({
    fibNum,
    time: (new Date().getTime() - startTime)/1000,
  });
};