import { render, screen } from "@testing-library/react";
import PostCard from "../components/PostCard";
import "@testing-library/jest-dom";

const mockPost = {
  id: 1,
  title: "Post de teste",
  body: "Corpo do post de teste",
  liked: false,
  reactions: { likes: 42, dislikes: 7 },
};

describe("PostCard - Reacoes", () => {
  test("deve exibir o numero de curtidas do post", () => {
    render(
      <PostCard post={mockPost} isAuthenticated={false} onLike={async () => {}} />
    );
    expect(screen.getByText("👍 42 curtidas")).toBeTruthy();
  });

  test("deve exibir o numero de descurtidas do post", () => {
    render(
      <PostCard post={mockPost} isAuthenticated={false} onLike={async () => {}} />
    );
    expect(screen.getByText("👎 7 descurtidas")).toBeTruthy();
  });
});
