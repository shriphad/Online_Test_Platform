var isLogged = (function () {
    var logged = false;

    var getLogged = function () {
        return logged;
    };

    var setLogged = function () {
        logged = true;
        return logged;

    };

    return {
        getLogged: getLogged,
        setLogged: setLogged
    }

})();

export default isLogged;