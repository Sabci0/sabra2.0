export const createPageUrl = (page: string) => {
    const map: Record<string, string> = {
      Home: "/",
      Wyroby: "/wyroby",
      Galeria: "/galeria",
      Kontakt: "/kontakt",
    };
    return map[page] ?? `/${page.toLowerCase()}`;
  };
  