# @builderhub/mui-theme

Builderhub Platform Material UI Theme

- Custom colors
- Custom breakpoint
- Custom typography
- Custom MuiCssBaseline

## Installation

- npm

```zsh
npm i @builderhub/mui-theme
```

- yarn

```zsh
yarn add @builderhub/mui-theme
```

- pnpm

```zsh
pnpm add @builderhub/mui-theme
```

## Usage

```tsx
import React from "react";
import { BuilderhubThemeProvider } from "@builderhub/mui-theme";

export function Wrapped() {
  return (
    <BuilderhubThemeProvider>
      <App />
    </BuilderhubThemeProvider>
  );
}
```
