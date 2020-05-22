const encoder = new TextEncoder();

const greetText = encoder.encode("Hello World\nMy name is Yoshik");

//Async wrapped in Deno
await Deno.writeFile("greet.txt", greetText);
