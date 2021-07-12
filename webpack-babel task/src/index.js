import './styles.css';
import "core-js/stable";
import "regenerator-runtime/runtime";

const button = document.getElementById("getNewsButton");
button.onclick = e => import(/* webpackChunkName: "print" */ './getNews').then(module => {
    const print = module.default;

    print();
});
