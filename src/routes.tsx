import { createHashRouter } from "react-router";
import { AppShell } from "./components/layout/AppShell";
import { Dashboard } from "./pages/Dashboard";
import { Collection } from "./pages/Collection";
import { Decks } from "./pages/Decks";
import { DeckBuilder } from "./pages/DeckBuilder";
import { Market } from "./pages/Market";
import { Wishlist } from "./pages/Wishlist";
import { Sets } from "./pages/Sets";
import { SetDetail } from "./pages/SetDetail";
import { Explore } from "./pages/Explore";
import { Profile } from "./pages/Profile";
import { Settings } from "./pages/Settings";

export const router = createHashRouter([
  {
    path: "/",
    Component: AppShell,
    children: [
      { index: true, Component: Dashboard },
      { path: "collection", Component: Collection },
      { path: "decks", Component: Decks },
      { path: "decks/new", Component: DeckBuilder },
      { path: "decks/:id", Component: DeckBuilder },
      { path: "market", Component: Market },
      { path: "wishlist", Component: Wishlist },
      { path: "sets", Component: Sets },
      { path: "sets/:id", Component: SetDetail },
      { path: "explore", Component: Explore },
      { path: "profile", Component: Profile },
      { path: "settings", Component: Settings },
    ],
  },
]);
