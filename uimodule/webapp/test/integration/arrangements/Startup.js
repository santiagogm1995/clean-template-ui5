sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
  "use strict";

  return Opa5.extend(
    "com.clean.example.test.integration.arrangements.Startup",
    {
      iStartMyApp: function () {
        this.iStartMyUIComponent({
          componentConfig: {
            name: "com.clean.example",
            async: true,
            manifest: true,
          },
        });
      },
    }
  );
});
