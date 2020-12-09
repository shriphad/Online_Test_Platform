var isLogged = (function () {
    var logged = false;

    var getLogged = function () {
        return logged;    // Or pull this from cookie/localStorage
    };

    var setLogged = function () {
        logged = true;
        return logged;
        // Also set this in cookie/localStorage
    };

    return {
        getLogged: getLogged,
        setLogged: setLogged
    }

})();

export default isLogged;