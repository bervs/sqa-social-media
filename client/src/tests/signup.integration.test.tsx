import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUp from "../app/signup/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock("../contexts/AuthContext", () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

describe("SignUp", () => {
  test("deve mostrar erro quando senhas não coincidem", () => {
    render(<SignUp />);

    const passwordInputs = screen.getAllByPlaceholderText("••••••••");

    fireEvent.change(passwordInputs[0], {
      target: { value: "Senha123!" },
    });

    fireEvent.change(passwordInputs[1], {
      target: { value: "SenhaDiferente123!" },
    });

    const botoes = screen.getAllByText("Criar Conta");

    fireEvent.click(botoes[2]); // botão submit

    expect(
      screen.getByText("As senhas não coincidem")
    ).toBeTruthy();
  });
});