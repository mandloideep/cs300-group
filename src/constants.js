export const CLIENT_BASE_URL = import.meta.env.BASE_URL;

export const clientURLs = {
  HOME: "/",
  ABOUT: "/about",
  LIST_MEALS: "/meals",
  MEALS_DETAILS: "/meals/:id",
  NOT_FOUND: "*",
};

export const serverURLs = {
  CATOGORIES: "www.themealdb.com/api/json/v1/1/list.php?c=list",
};

export const NAV_ITEMS = [
  { label: "Home", to: clientURLs.HOME, end: true, icon: "home" },
  { label: "About", to: clientURLs.ABOUT, icon: "info" },
  { label: "Meals", to: clientURLs.LIST_MEALS, icon: "meal" },
];
