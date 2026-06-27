import { isPasswordValid } from "../utils/password";

describe("Bug senha minima", () => {
  // test.failing indica que este teste e esperado falhar (documenta o bug)
  test.failing("deve aceitar senha com exatamente 8 caracteres", () => {
    expect(isPasswordValid("Abc1!Def")).toBe(true);
  });
});
