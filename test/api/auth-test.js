import { assert } from "chai";
import { doseService } from "./dose-service.js";
import { decodeToken } from "../../src/api/jwt-utils.js";
import { maggie } from "../fixtures.js";

suite("Authentication API tests", async () => {
  setup(async () => {
    doseService.clearAuth();
    await doseService.createUser(maggie);
    await doseService.authenticate(maggie);
    await doseService.deleteAllUsers();
  });

  test("authenticate", async () => {
    const returnedUser = await doseService.createUser(maggie);
    const response = await doseService.authenticate(maggie);
    assert(response.success);
    assert.isDefined(response.token);
  });

  test("verify Token", async () => {
    const returnedUser = await doseService.createUser(maggie);
    const response = await doseService.authenticate(maggie);

    const userInfo = decodeToken(response.token);
    assert.equal(userInfo.email, returnedUser.email);
    assert.equal(userInfo.userId, returnedUser._id);
  });

  test("check Unauthorized", async () => {
    donationService.clearAuth();
    try {
      await doseService.deleteAllUsers();
      assert.fail("Route not protected");
    } catch (error) {
      assert.equal(error.response.data.statusCode, 401);
    }
  });
});
