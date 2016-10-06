// Encapsulating a service to manage our code as it grows.

app.factory('stringService', function () {
    return {
        processString: function (input) {
            if (!input)
                return input;

            var output = "";

            for (var i = 0; i < input.length; i++) {
                if (i > 0 && input[i] == input[i].toUpperCase()) {
                    output = output + " ";
                }

                output = output + input[i];
            }

            return output;
        }
    };
});