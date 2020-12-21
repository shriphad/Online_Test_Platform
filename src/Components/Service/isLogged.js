const isLogged = (function () {
    let logged = false;

    const getLogged = function () {
        return logged;
    };

    const setLogged = function () {
        logged = true;
        return logged;

    };

    return {
        getLogged: getLogged,
        setLogged: setLogged
    }

})();

export default isLogged;