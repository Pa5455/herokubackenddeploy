import { assert } from "chai";
import { doseService } from "./dose-service.js";
import { maggie, testProducts, testDosage } from "../fixtures.js";
import { assertSubset } from "../test-utils.js";

suite("Dosage API tests", () => {
  setup(async () => {
    await doseService.createUser(maggie);
    await doseService.authenticate(maggie);
    await doseService.deleteAllUsers();
    await doseService.createUser(maggie);
    await doseService.authenticate(maggie);
  });
  teardown(async () => {
    await doseService.deleteAllUsers();
  });

  test("create a dose", async () => {
    const returnedProduct = await doseService.createProduct(testProducts[0]);
    await doseService.makeDosage(returnedProduct._id, testDosage[0]);
    const returnedDosage = await doseService.getDosage(returnedProduct._id);
    console.log(returnedDosage);
    assert.equal(returnedDosage.length, 1);
    assertSubset(returnedDosage[0], testDosage[0]);
  });
});
