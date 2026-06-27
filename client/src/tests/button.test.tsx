import { render, screen } from "@testing-library/react";
import Button from "../components/Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  test("renderiza texto", () => {
    render(<Button>Salvar</Button>);

    expect(screen.getByText("Salvar")).toBeTruthy();
  });

  test("mostra carregando", () => {
    render(<Button isLoading>Salvar</Button>);

    expect(screen.getByText("Carregando...")).toBeTruthy();
  });
});