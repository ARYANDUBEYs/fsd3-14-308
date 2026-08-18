// const f1= () => {
//     console.log("f1\n");
// };
// const f2 = () => {
//     console.log("f2\n");
// };
// const f3 = () => {
//     console.log("f3\n");
// };
// const main = () => {
//     console.log("main");
//     setTimeout(f1, 5000);
//     f2();
//     console.log("end\n");
// };
// const f1= () => {
//     console.log("f1\n");
// };
// const f2 = () => {
//     console.log("f2\n");
// };
// const f3 = () => {
//     console.log("f3\n");
// };
// const main = () => {
//     console.log("main");
//     setTimeout(f1, 5000);
//     setTimeout(f2, 0);
//     console.log("end\n");
// };
// main();
// const f1= () => {
//     console.log("f1\n");
// };
// const f2 = () => {
//     console.log("f2\n");
// };
// const f3 = () => {
//     console.log("f3\n");
// };
// const main = () => {
//     console.log("main");
//     setInterval(f2, 5000);
//     console.log("end\n");
// };
// main();



// const f1= () => {
//     console.log("f1\n");
// };
// const f2 = () => {
//     console.log("f2\n");
// };
// const f3 = () => {
//     console.log("f3\n");
// };
// const main = () => {
//     console.log("main");
//     setTimeout(f1, 5000);
//     setImmediate(f2);
//     console.log("end\n");
// };
// main();


/* PROMISE */
import fs from "fs/promises";

const writeData = async() =>
{
    try{
        await fs.writeFile('stud.txt', "Name: Raman Singh");

    }
    catch(error){
        console.log(error);
    }
};

const f1= () => {
    console.log("f1\n");
};
const f2 = () => {
    console.log("f2\n");
};
const f3 = () => {
    console.log("f3\n");
};
const main = () => {
    console.log("main");
    setTimeout(f1, 5000);
    setImmediate(f2);
    process.nextTick(f3);
    writeData();
    console.log("end\n");
};
main();