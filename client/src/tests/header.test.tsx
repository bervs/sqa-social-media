import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("../contexts/AuthContext", () => ({
  useAuth: () => ({
    isAuthenticated: false,
    logout: jest.fn(),
  }),
}));

describe("Header", () => {
  test("mostra botão Entrar", () => {
    render(<Header />);

    expect(screen.getByText("Entrar")).toBeTruthy();
  });

  test("mostra botão Criar Conta", () => {
    render(<Header />);

    expect(screen.getByText("Criar Conta")).toBeTruthy();
  });
});