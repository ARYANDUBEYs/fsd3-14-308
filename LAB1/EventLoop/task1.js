//Synchronus Call
//JS is synchronus and single threaded
//In asynchronus we use event loop to manage the call stack.
//Asyn call uing timer:-
//1.Set Time out
//2.Set Immediate
//3.Process.next tick
const f1 = () =>
{
    console.log("f1 starts\n");
    f2();
    console.log("f1 running\n");
    console.log("f1 ends\n");
};
const f2 = () =>
{
    console.log("f2 starts");
    f3();
    console.log("f2 running\n");
    console.log("f3 ends\n");
};
const f3 = () =>
{
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 ends");
};
function main()
{
    console.log("main\n");
    f1();
    f2();
    f3();
    console.log("end main\n");
}
main();