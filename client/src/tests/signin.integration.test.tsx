import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SignIn from "../app/signin/page";

jest.mock("next/navigation", () => ({
  useRouter: () => ({ push: jest.fn() }),
}));

jest.mock("../contexts/AuthContext", () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

describe("SignIn", () => {
  test("deve mostrar erro quando email estiver vazio", () => {
    render(<SignIn />);

    const botoesEntrar = screen.getAllByText("Entrar");

    fireEvent.click(botoesEntrar[2]); // botão submit

    expect(screen.getByText("Email é obrigatório")).toBeTruthy();
  });
});