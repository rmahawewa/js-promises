const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 success"), 1000);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 6000);
});

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p4 fail"), 1000);
});

const p5 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p5 fail"), 4000);
});

const p6 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p6 fail"), 5000);
});

//Promise.all

Promise.all([p1, p2, p3])
.then((res) => {
    console.log("1", res);
})
.catch((err) => {
    console.error(err);
    console.log(err.errors);
});

Promise.all([p1,p2,p4])
.then((res) => {
    console.log("2", res);
})
.catch((err) => {
    console.error("2", err);
    console.log("2", err.errors);
});

//Promise.allSettled

Promise.allSettled([p1,p2,p3])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error("3", err);
    console.log("3", err.errors);
});

Promise.allSettled([p3,p4,p5])
.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.error("4", err);
    console.log("4", err.error);
})

