$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('individualactivity1\registration.feature');
formatter.feature({
  "line": 1,
  "name": "Registering into the one cool summer",
  "description": "",
  "id": "registering-into-the-one-cool-summer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Performing the user registration",
  "description": "",
  "id": "registering-into-the-one-cool-summer;performing-the-user-registration",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User in the registration form",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User enters required data",
  "rows": [
    {
      "cells": [
        "Fields",
        "Values"
      ],
      "line": 5
    },
    {
      "cells": [
        "FirstName",
        "Laxman"
      ],
      "line": 6
    },
    {
      "cells": [
        "LastName",
        "Baskaran"
      ],
      "line": 7
    },
    {
      "cells": [
        "phone",
        "8778016326"
      ],
      "line": 8
    },
    {
      "cells": [
        "email",
        "laxman@gmail.com"
      ],
      "line": 9
    },
    {
      "cells": [
        "Address",
        "mark Street"
      ],
      "line": 10
    },
    {
      "cells": [
        "City",
        "albany"
      ],
      "line": 11
    },
    {
      "cells": [
        "State",
        "Melbourne"
      ],
      "line": 12
    },
    {
      "cells": [
        "pin",
        "12104"
      ],
      "line": 13
    },
    {
      "cells": [
        "country",
        "AUSTRALIA"
      ],
      "line": 14
    },
    {
      "cells": [
        "userName",
        "Laxman21"
      ],
      "line": 15
    },
    {
      "cells": [
        "password",
        "Laxman@123"
      ],
      "line": 16
    },
    {
      "cells": [
        "confirmPassword",
        "Laxman@123"
      ],
      "line": 17
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "Registration should be success",
  "keyword": "Then "
});
formatter.match({
  "location": "Registration_1.open_guru99()"
});
formatter.result({
  "duration": 4085058500,
  "status": "passed"
});
formatter.match({
  "location": "Registration_1.enter_valid_data(DataTable)"
});
formatter.result({
  "duration": 27921382500,
  "status": "passed"
});
formatter.match({
  "location": "Registration_1.successful_login()"
});
formatter.result({
  "duration": 361196100,
  "status": "passed"
});
});