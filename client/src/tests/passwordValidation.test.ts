import {
  isPasswordValid,
  getPasswordValidationMessage,
} from "../utils/password";

describe("Password Validation", () => {
  test("deve rejeitar senha vazia", () => {
    expect(isPasswordValid("")).toBe(false);
  });

  test("deve retornar erro quando faltar número", () => {
    expect(
      getPasswordValidationMessage("SenhaForte!")
    ).toContain("um número");
  });
});