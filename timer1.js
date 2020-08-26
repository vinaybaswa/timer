const timer = () => {
  let args = process.argv.sort((a, b) => a - b);
  let i = 2;
  while (i < args.length) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(args[i]) * 1000);
    i++;
  }
};

timer();

// Test 
// node timer1.js 10 3 5 15 9 