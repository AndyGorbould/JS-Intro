(function () {
    document.getElementById("run").addEventListener("click", function () {
        for (let i = 1; i <= 21; i++) {
            x = i ** 2;
            let list = document.getElementById("list-me");
            let li = document.createElement("li");
            li.innerText = x;
            list.append(li);
        }
    });
})();


